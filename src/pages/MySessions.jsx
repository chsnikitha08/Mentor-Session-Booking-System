// src/pages/MySessions.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";
import SessionCard from "../components/SessionCard";

export default function MySessions() {
  const { userProfile } = useAuth();
  const { fetchStudentBookings, bookings, loading } = useBooking();
  const [activeTab, setActiveTab] = useState("booked");

  const load = () => { if (userProfile?.uid) fetchStudentBookings(userProfile.uid); };
  useEffect(() => { load(); }, [userProfile]);

  const filtered = bookings.filter(b => b.status === activeTab);
  const tabs = [
    { key:"booked", label:"Upcoming", count: bookings.filter(b=>b.status==="booked").length },
    { key:"cancelled", label:"Cancelled", count: bookings.filter(b=>b.status==="cancelled").length },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:32 }} className="fade-up">
        <div>
          <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:36, color:"#8f2d5d", margin:"0 0 6px", letterSpacing:"-0.02em" }}>My Sessions</h1>
          <p style={{ color:"rgba(143,45,93,0.62)", fontSize:15, margin:0 }}>Manage your booked mentoring sessions.</p>
        </div>
        <Link to="/mentors" className="btn-primary" style={{ textDecoration:"none", fontSize:13 }}>+ Book New</Link>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", background:"rgba(255,255,255,0.45)", border:"1px solid rgba(255,255,255,0.7)", borderRadius:999, padding:4, width:"fit-content", marginBottom:28, gap:4 }} className="fade-up-2">
        {tabs.map(t => (
          <button key={t.key} onClick={()=>setActiveTab(t.key)} className={`tab-pill ${activeTab===t.key?"active":""}`} style={{ display:"flex", alignItems:"center", gap:7 }}>
            {t.label}
            <span style={{ fontSize:11, padding:"2px 7px", borderRadius:999, background: activeTab===t.key ? "rgba(244,143,177,0.18)" : "rgba(241,187,204,0.24)", color: activeTab===t.key ? "#db2777" : "rgba(143,45,93,0.54)" }}>{t.count}</span>
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ color:"rgba(143,45,93,0.52)", fontSize:14 }}>Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="glass" style={{ borderRadius:24, padding:"60px 24px", textAlign:"center" }}>
          <p style={{ color:"rgba(143,45,93,0.52)", marginBottom:12, fontSize:14 }}>{activeTab==="booked" ? "No upcoming sessions." : "No cancelled sessions."}</p>
          {activeTab==="booked" && <Link to="/mentors" style={{ color:"#db2777", fontSize:13, fontWeight:600, textDecoration:"none" }}>Browse mentors →</Link>}
        </div>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:16 }}>
          {filtered.map(b => <SessionCard key={b.id} booking={b} role="student" onRefresh={load} />)}
        </div>
      )}
    </div>
  );
}
