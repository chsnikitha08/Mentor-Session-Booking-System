// src/pages/Mentors.jsx
import { useState } from "react";
import MentorCard from "../components/MentorCard";
import { useMentors } from "../hooks/useMentors";

const FILTERS = ["React","JavaScript","Python","DSA","System Design","Node.js","SQL","Machine Learning"];

export default function Mentors() {
  const [filter, setFilter] = useState("");
  const { mentors, loading, error } = useMentors(filter);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ marginBottom: 32 }} className="fade-up">
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "#8f2d5d", margin: "0 0 6px", letterSpacing: "-0.02em" }}>Find a Mentor</h1>
        <p style={{ color: "rgba(143,45,93,0.62)", fontSize: 15, margin: 0 }}>Browse expert mentors and book a session that fits your schedule.</p>
      </div>

      {/* Search + filters */}
      <div style={{ marginBottom: 32 }} className="fade-up-2">
        <input type="text" placeholder="Search by expertise (e.g. React, Python…)" value={filter} onChange={e => setFilter(e.target.value)}
          className="glass-input" style={{ maxWidth: 420, marginBottom: 14 }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          <button onClick={() => setFilter("")} className="tab-pill" style={{ background: !filter ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)", color: !filter ? "#db2777" : "rgba(143,45,93,0.54)", border: "1px solid rgba(255,255,255,0.7)" }}>All</button>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(filter === f ? "" : f)} className="tab-pill"
              style={{ background: filter===f ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)", color: filter===f ? "#db2777" : "rgba(143,45,93,0.54)", border: "1px solid rgba(255,255,255,0.7)" }}>{f}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20 }}>
          {[1,2,3].map(i => (
            <div key={i} className="glass" style={{ borderRadius: 20, padding: 24, animation: "pulse 1.5s ease-in-out infinite" }}>
              <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(200,190,240,0.3)" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: 14, background: "rgba(200,190,240,0.3)", borderRadius: 7, marginBottom: 8, width: "70%" }} />
                  <div style={{ height: 10, background: "rgba(200,190,240,0.2)", borderRadius: 5, width: "50%" }} />
                </div>
              </div>
              <div style={{ height: 9, background: "rgba(200,190,240,0.2)", borderRadius: 5, marginBottom: 6 }} />
              <div style={{ height: 9, background: "rgba(200,190,240,0.2)", borderRadius: 5, width: "80%", marginBottom: 20 }} />
              <div style={{ height: 38, background: "rgba(200,190,240,0.25)", borderRadius: 14 }} />
            </div>
          ))}
        </div>
      ) : error ? (
        <div style={{ background: "rgba(255,200,200,0.3)", border: "1px solid rgba(255,150,150,0.4)", borderRadius: 16, padding: 20 }}>
          <p style={{ color: "#b91c1c", margin: 0 }}>{error}</p>
        </div>
      ) : mentors.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 24px" }}>
          <p style={{ color: "rgba(143,45,93,0.52)", marginBottom: 12 }}>No mentors found{filter ? ` for "${filter}"` : ""}.</p>
          {filter && <button onClick={() => setFilter("")} style={{ color: "#db2777", background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600 }}>Clear filter</button>}
        </div>
      ) : (
        <>
          <p style={{ fontSize: 13, color: "rgba(143,45,93,0.52)", marginBottom: 20 }} className="fade-up-3">{mentors.length} mentor{mentors.length !== 1 ? "s" : ""} found</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20 }}>
            {mentors.map((m, i) => <MentorCard key={m.id} mentor={m} index={i} />)}
          </div>
        </>
      )}
    </div>
  );
}
