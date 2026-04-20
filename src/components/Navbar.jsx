// src/components/Navbar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => { await logout(); navigate("/login"); };
  const isActive = (path) => location.pathname === path;

  const studentLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/mentors", label: "Find Mentors" },
    { to: "/my-sessions", label: "My Sessions" },
  ];
  const mentorLinks = [
    { to: "/mentor-dashboard", label: "Dashboard" },
    { to: "/manage-slots", label: "Availability" },
    { to: "/mentor-bookings", label: "Bookings" },
  ];
  const links = userProfile?.role === "mentor" ? mentorLinks : studentLinks;

  return (
    <nav style={{
      background: "rgba(255, 247, 233, 0.7)",
      backdropFilter: "blur(20px) saturate(160%)",
      WebkitBackdropFilter: "blur(20px) saturate(160%)",
      borderBottom: "1px solid rgba(221, 184, 133, 0.35)",
      boxShadow: "0 2px 20px rgba(180, 123, 48, 0.08)",
      position: "sticky", top: 0, zIndex: 50
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #ebb86d, #d78d3f)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(201,122,43,0.24)",
            color: "white", fontWeight: 700, fontSize: 15
          }}>M</div>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#6d421c", letterSpacing: "-0.02em" }}>MentorSpace</span>
        </Link>

        {/* Links */}
        {currentUser && (
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {links.map((l) => (
              <Link key={l.to} to={l.to} style={{
                padding: "6px 16px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                textDecoration: "none", transition: "all 0.2s",
                background: isActive(l.to) ? "rgba(255,249,238,0.94)" : "transparent",
                color: isActive(l.to) ? "#b56c27" : "rgba(109,66,28,0.7)",
                boxShadow: isActive(l.to) ? "0 2px 12px rgba(180,123,48,0.12)" : "none",
              }}>{l.label}</Link>
            ))}
          </div>
        )}

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {currentUser ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "linear-gradient(135deg, #e9b668, #d98c43)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontWeight: 600, fontSize: 13,
                  boxShadow: "0 2px 8px rgba(201,122,43,0.28)"
                }}>{userProfile?.name?.[0]?.toUpperCase() || "U"}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#6d421c", lineHeight: 1.2 }}>{userProfile?.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(109,66,28,0.58)", textTransform: "capitalize" }}>{userProfile?.role}</div>
                </div>
              </div>
              <button onClick={handleLogout} className="btn-ghost" style={{ padding: "6px 14px", fontSize: 13 }}>
                Sign out
              </button>
            </>
          ) : (
            <div style={{ display: "flex", gap: 8 }}>
              <Link to="/login" className="btn-ghost" style={{ fontSize: 13, padding: "6px 16px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Sign in</Link>
              <Link to="/signup" className="btn-primary" style={{ fontSize: 13, padding: "6px 16px", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
