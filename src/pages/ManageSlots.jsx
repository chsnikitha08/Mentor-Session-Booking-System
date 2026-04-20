// src/pages/ManageSlots.jsx
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { getMentorByUserId, addSlot, removeSlot, updateMentorProfile } from "../services/mentorService";

const PRESET_SLOTS = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];

export default function ManageSlots() {
  const { userProfile } = useAuth();
  const [mentor, setMentor] = useState(null); const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(null); const [customSlot, setCustomSlot] = useState("");
  const [bioEdit, setBioEdit] = useState(""); const [bioSaving, setBioSaving] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    async function load() {
      if (!userProfile?.uid) return;
      const m = await getMentorByUserId(userProfile.uid);
      setMentor(m); setBioEdit(m?.bio||""); setLoading(false);
    } load();
  }, [userProfile]);

  const handleAddSlot = async (slot) => {
    if (!slot.trim()) return; setSaving(slot);
    await addSlot(mentor.id, slot.trim());
    setMentor(m => ({...m, availableSlots:[...(m.availableSlots||[]), slot.trim()]}));
    setSaving(null); setCustomSlot("");
  };
  const handleRemoveSlot = async (slot) => {
    setSaving(slot); await removeSlot(mentor.id, slot);
    setMentor(m => ({...m, availableSlots: m.availableSlots.filter(s=>s!==slot)})); setSaving(null);
  };
  const handleBioSave = async () => {
    setBioSaving(true); await updateMentorProfile(mentor.id, {bio:bioEdit});
    setMentor(m=>({...m,bio:bioEdit})); setBioSaving(false);
  };

  if (loading) return <div style={{ padding:40, color:"rgba(80,60,140,0.5)", fontSize:14 }}>Loading…</div>;
  if (!mentor) return <div style={{ padding:40, color:"rgba(80,60,140,0.5)", fontSize:14 }}>Mentor profile not found.</div>;

  const slots = mentor.availableSlots || [];
  const availablePresets = PRESET_SLOTS.filter(s => !slots.includes(s));

  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"40px 24px" }}>
      <div style={{ marginBottom:32 }} className="fade-up">
        <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:36, color:"#2d1a6e", margin:"0 0 6px", letterSpacing:"-0.02em" }}>Manage Availability</h1>
        <p style={{ color:"rgba(80,60,140,0.6)", fontSize:15, margin:0 }}>Add time slots that students can book sessions in.</p>
      </div>

      {/* Bio */}
      <div className="glass fade-up-2" style={{ borderRadius:24, padding:28, marginBottom:20 }}>
        <h2 style={{ fontWeight:600, fontSize:16, color:"#2d1a6e", margin:"0 0 16px" }}>Your Bio</h2>
        <textarea value={bioEdit} onChange={e=>setBioEdit(e.target.value)} rows={3} placeholder="Tell students about yourself…"
          className="glass-input" style={{ resize:"none", fontFamily:"'DM Sans',sans-serif", lineHeight:1.6, marginBottom:12 }} />
        <button onClick={handleBioSave} disabled={bioSaving} className="btn-primary" style={{ fontSize:13 }}>{bioSaving?"Saving…":"Save Bio"}</button>
      </div>

      {/* Active slots */}
      <div className="glass fade-up-3" style={{ borderRadius:24, padding:28, marginBottom:20 }}>
        <h2 style={{ fontWeight:600, fontSize:16, color:"#2d1a6e", margin:"0 0 16px" }}>Active Slots <span style={{ color:"rgba(80,60,140,0.4)", fontWeight:400, fontSize:14 }}>({slots.length})</span></h2>
        {slots.length===0 ? <p style={{ color:"rgba(80,60,140,0.5)", fontSize:13, margin:0 }}>No slots added yet.</p> : (
          <div style={{ display:"flex", flexWrap:"wrap", gap:9 }}>
            {slots.map(s => (
              <div key={s} style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(52,211,153,0.12)", border:"1px solid rgba(52,211,153,0.3)", borderRadius:12, padding:"7px 14px" }}>
                <span style={{ fontSize:13, fontWeight:500, color:"#059669" }}>{s}</span>
                <button onClick={()=>handleRemoveSlot(s)} disabled={saving===s} style={{ background:"none",border:"none",cursor:"pointer",color:"rgba(5,150,105,0.5)",fontSize:12,padding:0,lineHeight:1,fontFamily:"'DM Sans',sans-serif" }}>{saving===s?"…":"✕"}</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Presets */}
      <div className="glass fade-up-4" style={{ borderRadius:24, padding:28, marginBottom:20 }}>
        <h2 style={{ fontWeight:600, fontSize:16, color:"#2d1a6e", margin:"0 0 16px" }}>Quick Add Slots</h2>
        {availablePresets.length===0 ? <p style={{ color:"rgba(80,60,140,0.5)", fontSize:13, margin:0 }}>All preset slots already added.</p> : (
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {availablePresets.map(s => (
              <button key={s} onClick={()=>handleAddSlot(s)} disabled={saving===s} className="btn-ghost" style={{ fontSize:12, padding:"6px 14px" }}>
                {saving===s?"Adding…":`+ ${s}`}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Custom */}
      <div className="glass fade-up-5" style={{ borderRadius:24, padding:28 }}>
        <h2 style={{ fontWeight:600, fontSize:16, color:"#2d1a6e", margin:"0 0 16px" }}>Add Custom Slot</h2>
        <div style={{ display:"flex", gap:10 }}>
          <input ref={inputRef} type="text" value={customSlot} onChange={e=>setCustomSlot(e.target.value)} placeholder="e.g. 8:30 AM" className="glass-input" style={{ flex:1 }} />
          <button onClick={()=>handleAddSlot(customSlot)} disabled={!customSlot.trim()} className="btn-primary" style={{ fontSize:13, whiteSpace:"nowrap" }}>Add</button>
        </div>
      </div>
    </div>
  );
}
