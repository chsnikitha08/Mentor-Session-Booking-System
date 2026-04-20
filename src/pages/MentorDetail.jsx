// src/pages/MentorDetail.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMentorById } from "../services/mentorService";
import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";

const TAG_COLORS = { "React":"tag-react","JavaScript":"tag-js","Python":"tag-python","DSA":"tag-dsa","System Design":"tag-system","Node.js":"tag-node","SQL":"tag-sql","Machine Learning":"tag-ml" };

export default function MentorDetail() {
  const { id } = useParams(); const navigate = useNavigate();
  const { userProfile } = useAuth(); const { createBooking } = useBooking();
  const [mentor, setMentor] = useState(null); const [loading, setLoading] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(""); const [selectedDate, setSelectedDate] = useState("");
  const [bk, setBk] = useState({ loading: false, error: "", success: false });

  useEffect(() => { getMentorById(id).then(setMentor).finally(() => setLoading(false)); }, [id]);

  const handleBook = async () => {
    if (!selectedSlot || !selectedDate) return setBk(b => ({...b, error:"Please select a date and time slot."}));
    setBk({ loading:true, error:"", success:false });
    try {
      await createBooking({ mentorId:mentor.id, mentorName:mentor.name, studentId:userProfile.uid, studentName:userProfile.name, date:selectedDate, slot:selectedSlot });
      setBk({ loading:false, error:"", success:true });
    } catch(err) { setBk({ loading:false, error:err.message, success:false }); }
  };

  const today = new Date().toISOString().split("T")[0];

  if (loading) return <div style={{ padding: 40, textAlign:"center", color:"rgba(143,45,93,0.52)" }}>Loading…</div>;
  if (!mentor) return <div style={{ padding:40, textAlign:"center" }}><p style={{color:"rgba(143,45,93,0.52)"}}>Mentor not found.</p><button onClick={()=>navigate("/mentors")} style={{color:"#db2777",background:"none",border:"none",cursor:"pointer",fontWeight:600}}>{'\u2190'} Back</button></div>;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px" }}>
      <button onClick={() => navigate("/mentors")} style={{ background:"none",border:"none",color:"rgba(143,45,93,0.62)",fontSize:14,cursor:"pointer",marginBottom:28,display:"flex",alignItems:"center",gap:6,fontFamily:"'DM Sans',sans-serif" }}>← Back to mentors</button>

      {/* Profile card */}
      <div className="glass fade-up" style={{ borderRadius: 24, padding: 32, marginBottom: 20 }}>
        <div style={{ display:"flex", alignItems:"flex-start", gap:20 }}>
          <div style={{ width:64, height:64, borderRadius:18, background:"linear-gradient(135deg, #f472b6, #fb7185)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:700, fontSize:26, flexShrink:0, boxShadow:"0 6px 20px rgba(236,72,153,0.28)" }}>{mentor.name?.[0]?.toUpperCase()}</div>
          <div>
            <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:26, color:"#8f2d5d", margin:"0 0 4px", letterSpacing:"-0.01em" }}>{mentor.name}</h1>
            <p style={{ fontSize:13, color:"rgba(143,45,93,0.55)", margin:"0 0 12px" }}>{mentor.email}</p>
            {mentor.bio && <p style={{ fontSize:14, color:"rgba(143,45,93,0.68)", lineHeight:1.7, margin:0 }}>{mentor.bio}</p>}
          </div>
        </div>
        {mentor.expertise?.length > 0 && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginTop:20 }}>
            {mentor.expertise.map(e => <span key={e} className={`tag ${TAG_COLORS[e]||"tag-default"}`}>{e}</span>)}
          </div>
        )}
      </div>

      {/* Booking card */}
      <div className="glass fade-up-2" style={{ borderRadius:24, padding:32 }}>
        <h2 style={{ fontWeight:600, fontSize:18, color:"#8f2d5d", margin:"0 0 24px" }}>Book a Session</h2>

        {bk.success ? (
          <div style={{ textAlign:"center", padding:"20px 0" }}>
            <div style={{ fontSize:48, marginBottom:12 }}>🎉</div>
            <h3 style={{ fontWeight:600, color:"#8f2d5d", margin:"0 0 8px", fontSize:20 }}>Session Booked!</h3>
            <p style={{ color:"rgba(143,45,93,0.62)", fontSize:14, margin:"0 0 24px" }}>Your session with {mentor.name} on {selectedDate} at {selectedSlot} is confirmed.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
              <button onClick={()=>navigate("/my-sessions")} className="btn-primary" style={{fontSize:13}}>View My Sessions</button>
              <button onClick={()=>{setBk({loading:false,error:"",success:false});setSelectedSlot("");setSelectedDate("");}} className="btn-ghost" style={{fontSize:13}}>Book Another</button>
            </div>
          </div>
        ) : mentor.availableSlots?.length === 0 ? (
          <div style={{ textAlign:"center", padding:"20px 0", color:"rgba(143,45,93,0.52)", fontSize:14 }}>This mentor has no available slots at the moment.</div>
        ) : (
          <>
            {bk.error && <div style={{ background:"rgba(255,200,200,0.4)", border:"1px solid rgba(255,150,150,0.4)", borderRadius:12, padding:"12px 16px", marginBottom:20 }}><p style={{color:"#b91c1c",fontSize:13,margin:0}}>{bk.error}</p></div>}
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:13, fontWeight:500, color:"rgba(143,45,93,0.82)", display:"block", marginBottom:8 }}>Select Date</label>
              <input type="date" value={selectedDate} min={today} onChange={e=>setSelectedDate(e.target.value)} className="glass-input" style={{ maxWidth:280 }} />
            </div>
            <div style={{ marginBottom:24 }}>
              <label style={{ fontSize:13, fontWeight:500, color:"rgba(143,45,93,0.82)", display:"block", marginBottom:10 }}>Select Time Slot</label>
              <div style={{ display:"flex", flexWrap:"wrap", gap:9 }}>
                {mentor.availableSlots.map(slot => (
                  <button key={slot} onClick={()=>setSelectedSlot(slot)} style={{
                    padding:"9px 18px", borderRadius:12, fontSize:13, fontWeight:500, cursor:"pointer", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif",
                    background: selectedSlot===slot ? "linear-gradient(135deg,#f472b6,#fb7185)" : "rgba(255,255,255,0.55)",
                    color: selectedSlot===slot ? "white" : "rgba(143,45,93,0.72)",
                    border: selectedSlot===slot ? "1px solid transparent" : "1px solid rgba(255,255,255,0.7)",
                    boxShadow: selectedSlot===slot ? "0 4px 16px rgba(236,72,153,0.26)" : "none",
                  }}>{slot}</button>
                ))}
              </div>
            </div>
            <button onClick={handleBook} disabled={bk.loading} className="btn-primary" style={{ width:"100%", fontSize:14 }}>
              {bk.loading ? "Booking…" : "Confirm Booking"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
