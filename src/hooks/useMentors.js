// src/hooks/useMentors.js
import { useState, useEffect, useMemo } from "react";
import { getMentors } from "../services/mentorService";

export function useMentors(filterExpertise = "") {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getMentors()
      .then((data) => { if (!cancelled) { setMentors(data); setLoading(false); } })
      .catch((err) => { if (!cancelled) { setError(err.message); setLoading(false); } });
    return () => { cancelled = true; };
  }, []);

  // useMemo for filtering — demonstrates optimization
  const filtered = useMemo(() => {
    if (!filterExpertise) return mentors;
    return mentors.filter((m) =>
      m.expertise?.some((e) => e.toLowerCase().includes(filterExpertise.toLowerCase()))
    );
  }, [mentors, filterExpertise]);

  return { mentors: filtered, allMentors: mentors, loading, error, setMentors };
}
