// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(""); setLoading(true);
    try { await login(email, password); setTimeout(() => navigate("/"), 100); }
    catch { setError("Invalid email or password. Please try again."); }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 60px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 420 }} className="fade-up">
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 18, margin: "0 auto 16px",
            background: "linear-gradient(135deg, #ebb86d, #d78d3f)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px rgba(201,122,43,0.28)", fontSize: 24, color: "white", fontWeight: 700
          }}>M</div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: "#6b421d", margin: 0, letterSpacing: "-0.02em" }}>Welcome back</h1>
          <p style={{ color: "rgba(109,66,28,0.66)", marginTop: 6, fontSize: 14 }}>Sign in to your MentorSpace account</p>
        </div>

        <div className="glass" style={{ borderRadius: 24, padding: 32 }}>
          {error && (
            <div style={{ background: "rgba(255,200,200,0.4)", border: "1px solid rgba(255,150,150,0.4)", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
              <p style={{ color: "#b91c1c", fontSize: 13, margin: 0 }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(109,66,28,0.82)", display: "block", marginBottom: 6 }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" className="glass-input" />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(109,66,28,0.82)", display: "block", marginBottom: 6 }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="glass-input" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", fontSize: 14 }}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: 13, color: "rgba(109,66,28,0.66)", marginTop: 20, marginBottom: 0 }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#c77724", fontWeight: 600, textDecoration: "none" }}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
