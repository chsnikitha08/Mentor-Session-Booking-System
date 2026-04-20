// src/components/SessionCard.jsx
import { useBooking } from "../context/BookingContext";

export default function SessionCard({ booking, role = "student", onRefresh }) {
  const { cancelBooking, deleteBooking } = useBooking();

  const handleCancel = async () => {
    if (window.confirm("Cancel this session?")) { await cancelBooking(booking.id); onRefresh?.(); }
  };
  const handleDelete = async () => {
    if (window.confirm("Remove this record?")) { await deleteBooking(booking.id); onRefresh?.(); }
  };

  const isBooked = booking.status === "booked";
  const displayName = role === "mentor" ? booking.studentName : booking.mentorName;
  const displayLabel = role === "mentor" ? "Student" : "Mentor";

  return (
    <div className="glass" style={{ borderRadius: 18, padding: 20, position: "relative", overflow: "hidden" }}>
      {/* Status stripe */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3, borderRadius: "18px 18px 0 0",
        background: isBooked ? "linear-gradient(90deg, #f472b6, #fb7185)" : "rgba(200,180,180,0.4)"
      }} />

      <div style={{ marginTop: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(143,45,93,0.5)", fontWeight: 500, marginBottom: 2 }}>{displayLabel}</div>
            <div style={{ fontWeight: 600, color: "#8f2d5d", fontSize: 15 }}>{displayName}</div>
          </div>
          <span style={{
            fontSize: 11, padding: "3px 10px", borderRadius: 999, fontWeight: 500,
            background: isBooked ? "rgba(244,143,177,0.16)" : "rgba(200,180,180,0.2)",
            color: isBooked ? "#db2777" : "#9f7070",
            border: `1px solid ${isBooked ? "rgba(236,112,160,0.3)" : "rgba(200,180,180,0.3)"}`,
          }}>{booking.status}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
          {[["Date", booking.date], ["Time", booking.slot]].map(([label, val]) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.5)", borderRadius: 12, padding: "10px 14px", border: "1px solid rgba(255,255,255,0.7)" }}>
              <div style={{ fontSize: 10, color: "rgba(143,45,93,0.5)", fontWeight: 500, marginBottom: 3 }}>{label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#a63368" }}>{val}</div>
            </div>
          ))}
        </div>

        {isBooked ? (
          <button onClick={handleCancel} className="btn-danger" style={{ width: "100%", fontSize: 13 }}>Cancel Session</button>
        ) : (
          <button onClick={handleDelete} className="btn-ghost" style={{ width: "100%", fontSize: 13, color: "rgba(143,45,93,0.62)" }}>Remove</button>
        )}
      </div>
    </div>
  );
}
