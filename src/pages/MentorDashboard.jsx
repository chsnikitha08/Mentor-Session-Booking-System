// src/pages/MentorDashboard.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";
import { getMentorByUserId } from "../services/mentorService";

export default function MentorDashboard() {
  const { userProfile } = useAuth();
  const { fetchMentorBookings, bookings } = useBooking();
  const [mentor, setMentor] = useState(null); const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!userProfile?.uid) return;
      const m = await getMentorByUserId(userProfile.uid);
      setMentor(m); if (m) await fetchMentorBookings(m.id); setLoading(false);
    } load();
  }, [userProfile, fetchMentorBookings]);

  const upcoming = bookings.filter(b => b.status === "booked");
  const stats = [
    { label:"Total Bookings", val: bookings.length, color:"#db2777", icon:"📋" },
    { label:"Upcoming", val: upcoming.length, color:"#059669", icon:"📅" },
    { label:"Slots Available", val: mentor?.availableSlots?.length||0, color:"#d97706", icon:"🕐" },
  ];

  return (
    <div style={{ maxWidth:1100, margin:"0 auto", padding:"40px 24px" }}>
      <div style={{ marginBottom:36 }} className="fade-up">
        <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:36, color:"#8f2d5d", margin:"0 0 6px", letterSpacing:"-0.02em" }}>Welcome, {userProfile?.name?.split(" ")[0]} 👋</h1>
        <p style={{ color:"rgba(143,45,93,0.62)", fontSize:15, margin:0 }}>Here's your mentoring overview.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16, marginBottom:32 }}>
        {stats.map((s,i) => (
          <div key={s.label} className={`glass fade-up-${i+2}`} style={{ borderRadius:20, padding:"24px 28px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
              <span style={{ fontSize:13, color:"rgba(143,45,93,0.62)", fontWeight:500 }}>{s.label}</span>
              <span style={{ fontSize:20 }}>{s.icon}</span>
            </div>
            <div style={{ fontSize:40, fontWeight:700, color:s.color, fontFamily:"'DM Serif Display',serif", lineHeight:1 }}>{loading?"—":s.val}</div>
          </div>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:36 }} className="fade-up-3">
        <Link to="/manage-slots" style={{ textDecoration:"none" }}>
          <div style={{ borderRadius:20, padding:28, background:"linear-gradient(135deg,rgba(248,187,208,0.72),rgba(244,143,177,0.5))", border:"1px solid rgba(255,255,255,0.6)", backdropFilter:"blur(20px)", transition:"all 0.25s", boxShadow:"0 8px 32px rgba(219,39,119,0.15)" }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(219,39,119,0.24)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 8px 32px rgba(219,39,119,0.15)";}}>
            <div style={{ fontSize:28, marginBottom:10 }}>🗓️</div>
            <h3 style={{ fontWeight:600, fontSize:17, color:"#8f2d5d", margin:"0 0 6px" }}>Manage Availability</h3>
            <p style={{ fontSize:13, color:"rgba(143,45,93,0.68)", margin:"0 0 14px", lineHeight:1.5 }}>Add or remove time slots for students to book</p>
            <span style={{ fontSize:13, color:"#db2777", fontWeight:600 }}>Manage slots →</span>
          </div>
        </Link>
        <Link to="/mentor-bookings" style={{ textDecoration:"none" }}>
          <div className="glass glass-hover" style={{ borderRadius:20, padding:28 }}>
            <div style={{ fontSize:28, marginBottom:10 }}>📋</div>
            <h3 style={{ fontWeight:600, fontSize:17, color:"#8f2d5d", margin:"0 0 6px" }}>View Bookings</h3>
            <p style={{ fontSize:13, color:"rgba(143,45,93,0.68)", margin:"0 0 14px", lineHeight:1.5 }}>See all sessions students have booked with you</p>
            <span style={{ fontSize:13, color:"#db2777", fontWeight:600 }}>View bookings →</span>
          </div>
        </Link>
      </div>

      <div className="fade-up-4">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <h2 style={{ fontWeight:600, fontSize:18, color:"#8f2d5d", margin:0 }}>Recent Bookings</h2>
          <Link to="/mentor-bookings" style={{ fontSize:13, color:"#db2777", textDecoration:"none", fontWeight:600 }}>View all →</Link>
        </div>
        {loading ? <div style={{ color:"rgba(143,45,93,0.52)", fontSize:14 }}>Loading…</div>
          : upcoming.length===0 ? (
            <div className="glass" style={{ borderRadius:20, padding:"40px 24px", textAlign:"center" }}>
              <p style={{ color:"rgba(143,45,93,0.52)", margin:0, fontSize:14 }}>No upcoming bookings yet.</p>
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:14 }}>
              {upcoming.slice(0,3).map(b => (
                <div key={b.id} className="glass" style={{ borderRadius:16, padding:18 }}>
                  <div style={{ fontSize:11, color:"rgba(143,45,93,0.5)", fontWeight:500, marginBottom:4 }}>Student</div>
                  <div style={{ fontWeight:600, color:"#8f2d5d", marginBottom:12, fontSize:14 }}>{b.studentName}</div>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                    <span style={{ background:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.8)", borderRadius:8, fontSize:11, padding:"3px 10px", color:"rgba(143,45,93,0.7)", fontWeight:500 }}>{b.date}</span>
                    <span style={{ background:"rgba(52,211,153,0.15)", border:"1px solid rgba(52,211,153,0.25)", borderRadius:8, fontSize:11, padding:"3px 10px", color:"#059669", fontWeight:500 }}>{b.slot}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
