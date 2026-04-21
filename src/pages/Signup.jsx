// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createMentorProfile } from "../services/mentorService";

const EXPERTISE_OPTIONS = ["React","JavaScript","Python","DSA","System Design","Node.js","SQL","Machine Learning"];

export default function Signup() {
  const [form, setForm] = useState({ name:"", email:"", password:"", role:"student", bio:"", expertise:[], customExpertise:"" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const toggleExp = (e) => setForm(f => ({ ...f, expertise: f.expertise.includes(e) ? f.expertise.filter(x=>x!==e) : [...f.expertise, e] }));

  const addCustomExpertise = () => {
    const custom = form.customExpertise.trim();
    if (custom && !form.expertise.includes(custom)) {
      setForm(f => ({ ...f, expertise: [...f.expertise, custom], customExpertise: "" }));
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    if (form.role === "mentor" && form.expertise.length === 0) return setError("Select at least one area of expertise.");
    setError(""); setLoading(true);
    try {
      const cred = await signup(form.email, form.password, form.name, form.role);
      if (form.role === "mentor") await createMentorProfile({ userId: cred.user.uid, name: form.name, email: form.email, bio: form.bio, expertise: form.expertise });
      navigate(form.role === "mentor" ? "/mentor-dashboard" : "/dashboard");
    } catch (err) {
      setError(err.message.includes("email-already-in-use") ? "Email already in use." : err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 60px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 24px" }}>
      <div style={{ width: "100%", maxWidth: 460 }} className="fade-up">
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 56, height: 56, borderRadius: 18, margin: "0 auto 16px", background: "linear-gradient(135deg, #ebb86d, #d78d3f)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(201,122,43,0.28)", fontSize: 24, color: "white", fontWeight: 700 }}>M</div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: "#6b421d", margin: 0, letterSpacing: "-0.02em" }}>Create your account</h1>
          <p style={{ color: "rgba(109,66,28,0.66)", marginTop: 6, fontSize: 14 }}>Join MentorSpace today</p>
        </div>

        <div className="glass" style={{ borderRadius: 24, padding: 32 }}>
          {error && <div style={{ background: "rgba(255,200,200,0.4)", border: "1px solid rgba(255,150,150,0.4)", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}><p style={{ color: "#b91c1c", fontSize: 13, margin: 0 }}>{error}</p></div>}

          <form onSubmit={handleSubmit}>
            {/* Role toggle */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(109,66,28,0.82)", display: "block", marginBottom: 8 }}>I am a</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {["student","mentor"].map(r => (
                  <button key={r} type="button" onClick={() => setForm(f=>({...f,role:r}))}
                    style={{ padding: "10px 0", borderRadius: 14, fontSize: 13, fontWeight: 600, textTransform: "capitalize", cursor: "pointer", transition: "all 0.2s", border: "none",
                      background: form.role===r ? "linear-gradient(135deg, #ebb86d, #d78d3f)" : "rgba(255,249,238,0.68)",
                      color: form.role===r ? "white" : "rgba(109,66,28,0.7)",
                      boxShadow: form.role===r ? "0 4px 16px rgba(201,122,43,0.24)" : "none",
                    }}>{r}</button>
                ))}
              </div>
            </div>

            {[["Full Name","text","name","John Doe"],["Email","email","email","you@example.com"],["Password","password","password","Min. 6 characters"]].map(([label,type,field,ph]) => (
              <div key={field} style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(109,66,28,0.82)", display: "block", marginBottom: 6 }}>{label}</label>
                <input type={type} value={form[field]} onChange={e=>setForm(f=>({...f,[field]:e.target.value}))} required placeholder={ph} className="glass-input" />
              </div>
            ))}

            {form.role === "mentor" && (<>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(109,66,28,0.82)", display: "block", marginBottom: 6 }}>Bio</label>
                <textarea value={form.bio} onChange={e=>setForm(f=>({...f,bio:e.target.value}))} placeholder="Tell students about yourself..." rows={3}
                  className="glass-input" style={{ resize: "none", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: "rgba(109,66,28,0.82)", display: "block", marginBottom: 8 }}>Areas of Expertise</label>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <input
                    type="text"
                    value={form.customExpertise}
                    onChange={e => setForm(f => ({ ...f, customExpertise: e.target.value }))}
                    placeholder="e.g., English, Math, Cooking"
                    className="glass-input"
                    style={{ flex: 1 }}
                  />
                  <button
                    type="button"
                    onClick={addExpertise}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: "linear-gradient(135deg, #ebb86d, #d78d3f)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    Add
                  </button>
                </div>
                {form.expertise.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {form.expertise.map(e => (
                      <span
                        key={e}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 12,
                          padding: "4px 8px",
                          borderRadius: 999,
                          background: "linear-gradient(135deg, #ebb86d, #d78d3f)",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={() => removeExpertise(e)}
                      >
                        {e} ×
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </>)}

            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", fontSize: 14, marginTop: 4 }}>
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: 13, color: "rgba(109,66,28,0.66)", marginTop: 20, marginBottom: 0 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#c77724", fontWeight: 600, textDecoration: "none" }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
