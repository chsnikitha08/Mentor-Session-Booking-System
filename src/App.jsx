// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy loading — demonstrates React.lazy + Suspense
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Mentors = lazy(() => import("./pages/Mentors"));
const MentorDetail = lazy(() => import("./pages/MentorDetail"));
const MySessions = lazy(() => import("./pages/MySessions"));
const MentorDashboard = lazy(() => import("./pages/MentorDashboard"));
const ManageSlots = lazy(() => import("./pages/ManageSlots"));
const MentorBookings = lazy(() => import("./pages/MentorBookings"));

function RoleRedirect() {
  const { currentUser, userProfile } = useAuth();
  if (!currentUser) return <Navigate to="/login" replace />;
  if (userProfile?.role === "mentor") return <Navigate to="/mentor-dashboard" replace />;
  return <Navigate to="/dashboard" replace />;
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#fbf0d9] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#d4893b] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#9d6d40] text-sm">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <div className="min-h-screen bg-[#fbf0d9]">
            <Navbar />
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* Public */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Root redirect based on role */}
                <Route path="/" element={<RoleRedirect />} />

                {/* Student Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute requiredRole="student"><Dashboard /></ProtectedRoute>
                } />
                <Route path="/mentors" element={
                  <ProtectedRoute requiredRole="student"><Mentors /></ProtectedRoute>
                } />
                <Route path="/mentor/:id" element={
                  <ProtectedRoute requiredRole="student"><MentorDetail /></ProtectedRoute>
                } />
                <Route path="/my-sessions" element={
                  <ProtectedRoute requiredRole="student"><MySessions /></ProtectedRoute>
                } />

                {/* Mentor Routes */}
                <Route path="/mentor-dashboard" element={
                  <ProtectedRoute requiredRole="mentor"><MentorDashboard /></ProtectedRoute>
                } />
                <Route path="/manage-slots" element={
                  <ProtectedRoute requiredRole="mentor"><ManageSlots /></ProtectedRoute>
                } />
                <Route path="/mentor-bookings" element={
                  <ProtectedRoute requiredRole="mentor"><MentorBookings /></ProtectedRoute>
                } />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </div>
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
