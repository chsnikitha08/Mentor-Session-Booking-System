// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, name, role) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const profile = { uid: cred.user.uid, name, email, role, createdAt: new Date().toISOString() };
    await setDoc(doc(db, "users", cred.user.uid), profile);
    setUserProfile(profile);
    return cred;
  };

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const fetchUserProfile = useCallback(async (uid) => {
    const snap = await getDoc(doc(db, "users", uid));
    if (snap.exists()) {
      setUserProfile(snap.data());
    }
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) await fetchUserProfile(user.uid);
      else setUserProfile(null);
      setLoading(false);
    });
    return unsub;
  }, [fetchUserProfile]);

  const value = { currentUser, userProfile, signup, login, logout, fetchUserProfile };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
