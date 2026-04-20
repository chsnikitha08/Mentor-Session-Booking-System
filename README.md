# MentorSpace — Mentor Booking Platform

> A centralized platform where students can discover mentors, book sessions, and manage their learning journey — while mentors control their own availability.

---

## 🧠 Problem Statement

Students struggle to connect with mentors in a structured way. Communication usually happens informally via messages, making it difficult to schedule sessions, manage availability, and track upcoming meetings.

**MentorSpace** solves this with a dual-role platform where:
- **Students** browse mentors by expertise, book time slots, and manage their sessions
- **Mentors** manage their availability, view incoming bookings, and update their profile

---

## ✨ Features

### 👤 Student
- Sign up / Login
- Browse all mentors with expertise tags and availability
- Filter mentors by skill (React, DSA, Python, etc.)
- View mentor profile with bio and available slots
- Book a session (date + time slot)
- Double-booking prevention
- View upcoming & cancelled sessions
- Cancel a session

### 🧑‍🏫 Mentor
- Sign up as a mentor with bio and expertise selection
- Manage availability (add/remove time slots)
- View all student bookings
- Update bio anytime
- Role-based protected dashboard

---

## ⚛️ React Concepts Used

| Concept | Where |
|---|---|
| `useState` | All forms, loading states, slot selection |
| `useEffect` | Fetching mentors, bookings on mount |
| `useContext` + Context API | Auth (AuthContext), Bookings (BookingContext) |
| `useMemo` | Filtering mentors by expertise in `useMentors` hook |
| `useCallback` | Stable fetch functions in contexts |
| `useRef` | Custom slot input focus |
| Custom Hooks | `useMentors.js` — encapsulates fetch + filter logic |
| `React.lazy` + `Suspense` | All pages are lazy-loaded (performance optimization) |
| Controlled Components | All forms are fully controlled |
| Conditional Rendering | Loading skeletons, empty states, success screens |
| Lists & Keys | Mentor grid, session cards, slot lists |
| Lifting State Up | Bookings refreshed via `onRefresh` callback prop |
| React Router v6 | Full routing with protected routes and role redirects |
| Component Composition | Reusable `MentorCard`, `SessionCard`, `ProtectedRoute` |

---

## 🏗️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, React Router v6 |
| Styling | Tailwind CSS |
| Auth | Firebase Authentication (Email/Password) |
| Database | Firebase Firestore |
| Deployment | Vercel / Netlify |

---

## 📁 Folder Structure

```
/src
  /components
    Navbar.jsx          # Sticky nav with role-aware links
    MentorCard.jsx      # Reusable mentor display card
    SessionCard.jsx     # Reusable session card with cancel/delete
    ProtectedRoute.jsx  # Auth + role-based route guard
  /pages
    Login.jsx           # Sign in page
    Signup.jsx          # Sign up with role selection
    Dashboard.jsx       # Student dashboard
    Mentors.jsx         # Browse + filter mentors
    MentorDetail.jsx    # Mentor profile + booking form
    MySessions.jsx      # Student's sessions (tabbed)
    MentorDashboard.jsx # Mentor overview
    ManageSlots.jsx     # Mentor slot management + bio edit
    MentorBookings.jsx  # Mentor view of student bookings
  /context
    AuthContext.jsx     # Global auth state + signup/login/logout
    BookingContext.jsx  # Global booking state + CRUD
  /services
    firebase.js         # Firebase init (fill in your config)
    mentorService.js    # All Firestore mentor operations
  /hooks
    useMentors.js       # Custom hook: fetch + useMemo filter
  App.jsx               # Routes + lazy loading
  index.js              # Entry point
  index.css             # Tailwind directives
```

---

## 🔐 Firebase Setup (Required)

### Step 1 — Create a Firebase Project
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → give it a name → Continue
3. Click **Web** icon (`</>`) → Register app → Copy config

### Step 2 — Fill in your config
Open `src/services/firebase.js` and replace the placeholder values:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### Step 3 — Enable Authentication
- Firebase Console → **Authentication** → Get Started
- Enable **Email/Password** provider

### Step 4 — Enable Firestore
- Firebase Console → **Firestore Database** → Create database
- Start in **test mode** (for development)

### Step 5 — Firestore Security Rules (for production)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    match /mentors/{mentorId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null &&
        resource.data.userId == request.auth.uid;
    }
    match /bookings/{bookingId} {
      allow read, write: if request.auth != null &&
        (resource.data.studentId == request.auth.uid ||
         resource.data.mentorId != null);
    }
  }
}
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Fill in Firebase config in src/services/firebase.js

# 3. Start dev server
npm run dev
```

App runs at `http://localhost:5173`

---

## 🗄️ Firestore Collections

### `users`
```json
{
  "uid": "abc123",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "student | mentor",
  "createdAt": "2026-04-20T..."
}
```

### `mentors`
```json
{
  "userId": "abc123",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "bio": "Expert React developer with 5 years experience",
  "expertise": ["React", "JavaScript", "System Design"],
  "availableSlots": ["10:00 AM", "2:00 PM", "5:00 PM"]
}
```

### `bookings`
```json
{
  "mentorId": "mentor_doc_id",
  "mentorName": "Jane Smith",
  "studentId": "student_uid",
  "studentName": "John Doe",
  "date": "2026-05-01",
  "slot": "10:00 AM",
  "status": "booked | cancelled",
  "createdAt": "Firestore Timestamp"
}
```

---

## 🌐 Deployment (Vercel)

```bash
npm run build
# Then drag the /build folder to vercel.com
# OR: connect your GitHub repo on vercel.com for auto-deploy
```

---

## ✅ End-Term Project Checklist

| Requirement | Status |
|---|---|
| Real-world problem statement | ✅ |
| User Authentication (Email/Password) | ✅ |
| Protected Routes | ✅ |
| Role-based access (Student / Mentor) | ✅ |
| CRUD operations | ✅ Create booking, Read mentors/bookings, Update slots/bio/status, Delete booking |
| Persistent storage (Firestore) | ✅ |
| Routing (React Router v6) | ✅ |
| Context API (global state) | ✅ AuthContext + BookingContext |
| useState | ✅ Throughout |
| useEffect | ✅ Throughout |
| useMemo | ✅ Mentor filtering |
| useCallback | ✅ Fetch functions in context |
| useRef | ✅ Custom slot input |
| Custom Hook | ✅ useMentors.js |
| React.lazy + Suspense | ✅ All pages lazy-loaded |
| Controlled Components | ✅ All forms |
| Conditional Rendering | ✅ Loading, empty states, success screens |
| Reusable Components | ✅ MentorCard, SessionCard, ProtectedRoute |
| Responsive UI (Tailwind) | ✅ |
| Loading states & error handling | ✅ |
| Double-booking prevention | ✅ |
| Clean folder structure | ✅ |
| README | ✅ |

---

## 👨‍💻 Author

Built as an end-term project for **Building Web Applications with React** — Batch 2029.
