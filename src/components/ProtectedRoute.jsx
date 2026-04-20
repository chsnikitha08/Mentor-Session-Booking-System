// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiredRole }) {
  const { currentUser, userProfile } = useAuth();

  if (!currentUser) return <Navigate to="/login" replace />;

  if (requiredRole && userProfile?.role !== requiredRole) {
    const redirect = userProfile?.role === "mentor" ? "/mentor-dashboard" : "/dashboard";
    return <Navigate to={redirect} replace />;
  }

  return children;
}
