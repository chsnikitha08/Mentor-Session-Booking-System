// src/components/MentorCard.jsx
import { useNavigate } from "react-router-dom";

const TAG_COLORS = {
  "React": "tag-react", "JavaScript": "tag-js", "Python": "tag-python",
  "DSA": "tag-dsa", "System Design": "tag-system", "Node.js": "tag-node",
  "SQL": "tag-sql", "Machine Learning": "tag-ml",
};

const CARD_ACCENTS = [
  "rgba(249,168,212,0.35)", "rgba(255,216,230,0.35)", "rgba(255,200,230,0.35)",
  "rgba(180,240,220,0.35)", "rgba(255,230,180,0.35)",
];

export default function MentorCard({ mentor, index = 0 }) {
  const navigate = useNavigate();
  const slots = mentor.availableSlots || [];
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

  return (
    <div className="glass glass-hover" style={{ borderRadius: 20, padding: 24, position: "relative", overflow: "hidden", cursor: "default" }}>
      {/* Accent blob */}
      <div style={{
        position: "absolute", top: -20, right: -20, width: 100, height: 100,
        borderRadius: "50%", background: accent, filter: "blur(20px)", zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Avatar + name */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14, flexShrink: 0,
            background: "linear-gradient(135deg, #f472b6, #fb7185)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: 700, fontSize: 20,
            boxShadow: "0 4px 16px rgba(236,72,153,0.26)"
          }}>{mentor.name?.[0]?.toUpperCase()}</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 15, color: "#8f2d5d", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{mentor.name}</div>
            <div style={{ fontSize: 12, color: "rgba(143,45,93,0.55)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mentor.email}</div>
          </div>
        </div>

        {/* Bio */}
        {mentor.bio && (
          <p style={{ fontSize: 13, color: "rgba(143,45,93,0.66)", marginBottom: 14, lineHeight: 1.6 }} className="line-clamp-2">{mentor.bio}</p>
        )}

        {/* Tags */}
        {mentor.expertise?.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {mentor.expertise.map((e) => (
              <span key={e} className={`tag ${TAG_COLORS[e] || "tag-default"}`}>{e}</span>
            ))}
          </div>
        )}

        {/* Availability */}
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 18 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: slots.length > 0 ? "#22c55e" : "rgba(244,143,177,0.35)", boxShadow: slots.length > 0 ? "0 0 6px rgba(34,197,94,0.5)" : "none" }} />
          <span style={{ fontSize: 12, color: "rgba(143,45,93,0.62)", fontWeight: 500 }}>
            {slots.length > 0 ? `${slots.length} slot${slots.length > 1 ? "s" : ""} available` : "No slots available"}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate(`/mentor/${mentor.id}`)}
          disabled={slots.length === 0}
          className="btn-primary"
          style={{ width: "100%", fontSize: 13, padding: "10px 0",
            background: slots.length === 0 ? "rgba(248,187,208,0.35)" : undefined,
            color: slots.length === 0 ? "rgba(143,45,93,0.52)" : undefined,
            boxShadow: slots.length === 0 ? "none" : undefined,
          }}
        >
          {slots.length > 0 ? "Book a Session" : "No Availability"}
        </button>
      </div>
    </div>
  );
}
