// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";

const STAT_CARDS = [
  { label: "Upcoming Sessions", key: "upcoming", color: "#d9468f", bg: "rgba(244,143,177,0.16)", icon: "📅" },
  { label: "Total Booked", key: "total", color: "#0891b2", bg: "rgba(103,232,249,0.15)", icon: "📋" },
  { label: "Cancelled", key: "cancelled", color: "#be185d", bg: "rgba(249,168,212,0.15)", icon: "✕" },
];

export default function Dashboard() {
  const { userProfile } = useAuth();
  const { fetchStudentBookings, bookings } = useBooking();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userProfile?.uid) fetchStudentBookings(userProfile.uid).finally(() => setLoading(false));
  }, [userProfile, fetchStudentBookings]);

  const upcoming = bookings.filter(b => b.status === "booked");
  const cancelled = bookings.filter(b => b.status === "cancelled");
  const counts = { upcoming: upcoming.length, total: bookings.length, cancelled: cancelled.length };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }} className="fade-up">
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#8f2d5d", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
          Welcome back, {userProfile?.name?.split(" ")[0]} 👋
        </h1>
        <p style={{ color: "rgba(143,45,93,0.62)", fontSize: 15, margin: 0 }}>Here's what's happening with your sessions.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
        {STAT_CARDS.map((s, i) => (
          <div key={s.key} className={`glass fade-up-${i+2}`} style={{ borderRadius: 20, padding: "24px 28px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: "rgba(143,45,93,0.62)", fontWeight: 500 }}>{s.label}</span>
              <span style={{ fontSize: 20 }}>{s.icon}</span>
            </div>
            <div style={{ fontSize: 40, fontWeight: 700, color: s.color, fontFamily: "'DM Serif Display', serif", lineHeight: 1 }}>
              {loading ? "—" : counts[s.key]}
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }} className="fade-up-3">
        <Link to="/mentors" style={{ textDecoration: "none" }}>
          <div style={{ borderRadius: 20, padding: 28, background: "linear-gradient(135deg, rgba(248,187,208,0.72), rgba(244,143,177,0.5))", border: "1px solid rgba(255,255,255,0.6)", backdropFilter: "blur(20px)", cursor: "pointer", transition: "all 0.25s", boxShadow: "0 8px 32px rgba(219,39,119,0.15)" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(219,39,119,0.24)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 32px rgba(219,39,119,0.15)"; }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>🔍</div>
            <h3 style={{ fontWeight: 600, fontSize: 17, color: "#8f2d5d", margin: "0 0 6px" }}>Find a Mentor</h3>
            <p style={{ fontSize: 13, color: "rgba(143,45,93,0.68)", margin: "0 0 14px", lineHeight: 1.5 }}>Browse available mentors and book your next session</p>
            <span style={{ fontSize: 13, color: "#db2777", fontWeight: 600 }}>Browse mentors →</span>
          </div>
        </Link>
        <Link to="/my-sessions" style={{ textDecoration: "none" }}>
          <div className="glass glass-hover" style={{ borderRadius: 20, padding: 28 }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>📅</div>
            <h3 style={{ fontWeight: 600, fontSize: 17, color: "#8f2d5d", margin: "0 0 6px" }}>My Sessions</h3>
            <p style={{ fontSize: 13, color: "rgba(143,45,93,0.68)", margin: "0 0 14px", lineHeight: 1.5 }}>View and manage all your booked sessions</p>
            <span style={{ fontSize: 13, color: "#db2777", fontWeight: 600 }}>View sessions →</span>
          </div>
        </Link>
      </div>

      {/* Upcoming preview */}
      <div className="fade-up-4">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h2 style={{ fontWeight: 600, fontSize: 18, color: "#8f2d5d", margin: 0 }}>Upcoming Sessions</h2>
          <Link to="/my-sessions" style={{ fontSize: 13, color: "#db2777", textDecoration: "none", fontWeight: 600 }}>View all →</Link>
        </div>
        {loading ? <div style={{ color: "rgba(143,45,93,0.52)", fontSize: 14 }}>Loading…</div>
          : upcoming.length === 0 ? (
            <div className="glass" style={{ borderRadius: 20, padding: "40px 24px", textAlign: "center" }}>
              <p style={{ color: "rgba(143,45,93,0.52)", margin: "0 0 12px", fontSize: 14 }}>No upcoming sessions yet.</p>
              <Link to="/mentors" style={{ color: "#db2777", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Book your first session →</Link>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: 14 }}>
              {upcoming.slice(0,3).map(b => (
                <div key={b.id} className="glass" style={{ borderRadius: 16, padding: 18 }}>
                  <div style={{ fontSize: 11, color: "rgba(143,45,93,0.5)", fontWeight: 500, marginBottom: 4 }}>Mentor</div>
                  <div style={{ fontWeight: 600, color: "#8f2d5d", marginBottom: 12, fontSize: 14 }}>{b.mentorName}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.8)", borderRadius: 8, fontSize: 11, padding: "3px 10px", color: "rgba(143,45,93,0.7)", fontWeight: 500 }}>{b.date}</span>
                    <span style={{ background: "rgba(244,143,177,0.16)", border: "1px solid rgba(236,112,160,0.26)", borderRadius: 8, fontSize: 11, padding: "3px 10px", color: "#db2777", fontWeight: 600 }}>{b.slot}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
