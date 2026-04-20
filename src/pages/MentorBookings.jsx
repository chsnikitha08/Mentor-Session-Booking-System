// src/pages/MentorBookings.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";
import { getMentorByUserId } from "../services/mentorService";
import SessionCard from "../components/SessionCard";

export default function MentorBookings() {
  const { userProfile } = useAuth();
  const { fetchMentorBookings, bookings, loading } = useBooking();
  const [activeTab, setActiveTab] = useState("booked"); const [mentorId, setMentorId] = useState(null);

  useEffect(() => {
    async function load() {
      if (!userProfile?.uid) return;
      const m = await getMentorByUserId(userProfile.uid);
      if (m) { setMentorId(m.id); fetchMentorBookings(m.id); }
    } load();
  }, [userProfile, fetchMentorBookings]);

  const filtered = bookings.filter(b => b.status === activeTab);
  const tabs = [
    { key:"booked", label:"Upcoming", count: bookings.filter(b=>b.status==="booked").length },
    { key:"cancelled", label:"Cancelled", count: bookings.filter(b=>b.status==="cancelled").length },
  ];
  const reload = () => { if (mentorId) fetchMentorBookings(mentorId); };

  return (
    <div style={{ maxWidth:1100, margin:"0 auto", padding:"40px 24px" }}>
      <div style={{ marginBottom:32 }} className="fade-up">
        <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:36, color:"#2d1a6e", margin:"0 0 6px", letterSpacing:"-0.02em" }}>Student Bookings</h1>
        <p style={{ color:"rgba(80,60,140,0.6)", fontSize:15, margin:0 }}>Sessions that students have booked with you.</p>
      </div>

      <div style={{ display:"flex", background:"rgba(255,255,255,0.45)", border:"1px solid rgba(255,255,255,0.7)", borderRadius:999, padding:4, width:"fit-content", marginBottom:28, gap:4 }} className="fade-up-2">
        {tabs.map(t => (
          <button key={t.key} onClick={()=>setActiveTab(t.key)} className={`tab-pill ${activeTab===t.key?"active":""}`} style={{ display:"flex", alignItems:"center", gap:7 }}>
            {t.label}
            <span style={{ fontSize:11, padding:"2px 7px", borderRadius:999, background:activeTab===t.key?"rgba(124,58,237,0.15)":"rgba(200,190,240,0.2)", color:activeTab===t.key?"#7c3aed":"rgba(80,60,140,0.5)" }}>{t.count}</span>
          </button>
        ))}
      </div>

      {loading ? <div style={{ color:"rgba(80,60,140,0.5)", fontSize:14 }}>Loading…</div>
        : filtered.length===0 ? (
          <div className="glass" style={{ borderRadius:24, padding:"60px 24px", textAlign:"center" }}>
            <p style={{ color:"rgba(80,60,140,0.5)", margin:0, fontSize:14 }}>No {activeTab} bookings.</p>
          </div>
        ) : (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:16 }}>
            {filtered.map(b => <SessionCard key={b.id} booking={b} role="mentor" onRefresh={reload} />)}
          </div>
        )}
    </div>
  );
}
