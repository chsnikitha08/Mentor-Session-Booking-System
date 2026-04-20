// src/services/mentorService.js
import {
  collection, doc, addDoc, getDocs, getDoc,
  updateDoc, query, where, arrayUnion, arrayRemove,
} from "firebase/firestore";
import { db } from "./firebase";

export const getMentors = async () => {
  const snap = await getDocs(collection(db, "mentors"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getMentorById = async (id) => {
  const snap = await getDoc(doc(db, "mentors", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const getMentorByUserId = async (userId) => {
  const q = query(collection(db, "mentors"), where("userId", "==", userId));
  const snap = await getDocs(q);
  return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() };
};

export const createMentorProfile = async (data) => {
  const ref = await addDoc(collection(db, "mentors"), {
    ...data,
    availableSlots: [],
    expertise: data.expertise || [],
    bio: data.bio || "",
    createdAt: new Date().toISOString(),
  });
  return ref.id;
};

export const updateMentorProfile = async (mentorId, data) => {
  await updateDoc(doc(db, "mentors", mentorId), data);
};

export const addSlot = async (mentorId, slot) => {
  await updateDoc(doc(db, "mentors", mentorId), {
    availableSlots: arrayUnion(slot),
  });
};

export const removeSlot = async (mentorId, slot) => {
  await updateDoc(doc(db, "mentors", mentorId), {
    availableSlots: arrayRemove(slot),
  });
};
