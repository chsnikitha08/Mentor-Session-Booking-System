// src/context/BookingContext.jsx
import { createContext, useContext, useState, useCallback } from "react";
import {
  collection, addDoc, getDocs, query, where,
  updateDoc, doc, deleteDoc, getDoc, serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStudentBookings = useCallback(async (userId) => {
    setLoading(true);
    const q = query(collection(db, "bookings"), where("studentId", "==", userId));
    const snap = await getDocs(q);
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    setBookings(list);
    setLoading(false);
    return list;
  }, []);

  const fetchMentorBookings = useCallback(async (mentorId) => {
    setLoading(true);
    const q = query(collection(db, "bookings"), where("mentorId", "==", mentorId));
    const snap = await getDocs(q);
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    setBookings(list);
    setLoading(false);
    return list;
  }, []);

  const createBooking = async ({ mentorId, mentorName, studentId, studentName, date, slot }) => {
    // Check for double booking
    const q = query(
      collection(db, "bookings"),
      where("mentorId", "==", mentorId),
      where("date", "==", date),
      where("slot", "==", slot),
      where("status", "==", "booked")
    );
    const existing = await getDocs(q);
    if (!existing.empty) throw new Error("This slot is already booked. Please choose another.");

    const booking = {
      mentorId, mentorName, studentId, studentName,
      date, slot, status: "booked",
      createdAt: serverTimestamp(),
    };
    const ref = await addDoc(collection(db, "bookings"), booking);
    return { id: ref.id, ...booking };
  };

  const cancelBooking = async (bookingId) => {
    await updateDoc(doc(db, "bookings", bookingId), { status: "cancelled" });
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "cancelled" } : b))
    );
  };

  const deleteBooking = async (bookingId) => {
    await deleteDoc(doc(db, "bookings", bookingId));
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  return (
    <BookingContext.Provider value={{
      bookings, loading,
      fetchStudentBookings, fetchMentorBookings,
      createBooking, cancelBooking, deleteBooking,
    }}>
      {children}
    </BookingContext.Provider>
  );
}
