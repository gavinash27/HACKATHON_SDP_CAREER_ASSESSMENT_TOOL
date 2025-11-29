import { Routes, Route } from "react-router-dom";

// Auth pages
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// Admin pages
import AdminDashboard from "./admin/AdminDashboard";
import ManageTests from "./admin/ManageTests";
import CareerRecommendations from "./admin/CareerRecommendations";

// User pages
import UserDashboard from "./user/UserDashboard";
import MyResults from "./user/MyResults";

// Assessment pages
import CareerAssessment from "./assessments/CareerAssessment";
import PersonalityTest from "./assessments/PersonalityTest";
import SkillsEvaluation from "./assessments/SkillsEvaluation";
import TestResult from "./assessments/TestResult";

// Career pages
import CareerList from "./careers/CareerList";
import CareerDetails from "./careers/CareerDetails";

import ViewStudents from "./admin/ViewStudents";
import StudentResults from "./admin/StudentResults";

import StudentChat from "./chat/StudentChat";
import AdminChat from "./chat/AdminChat";


function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>PathFinder – Career Assessment Platform</h1>
      </div>

      <Routes>

        {/* AUTH SCREENS (inside card layout) */}
        <Route
          path="/"
          element={
            <div className="card">
              <SignIn />
            </div>
          }
        />

        <Route
          path="/signin"
          element={
            <div className="card">
              <SignIn />
            </div>
          }
        />

        <Route
          path="/signup"
          element={
            <div className="card">
              <SignUp />
            </div>
          }
        />

        <Route path="/student/chat" element={<StudentChat />} />
        <Route path="/admin/chat" element={<AdminChat />} />


        {/* ADMIN ROUTES */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-tests" element={<ManageTests />} />
        <Route path="/admin/recommendations" element={<CareerRecommendations />} />

<Route path="/admin/students" element={<ViewStudents />} />
<Route path="/admin/student-results" element={<StudentResults />} />


        {/* USER ROUTES */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/results" element={<MyResults />} />

        {/* ASSESSMENT ROUTES */}
        <Route path="/career-assessment" element={<CareerAssessment />} />
        <Route path="/personality-test" element={<PersonalityTest />} />
        <Route path="/skills-evaluation" element={<SkillsEvaluation />} />
        <Route path="/test-result" element={<TestResult />} />

        {/* CAREER ROUTES */}
      {/* CAREER ROUTES */}
<Route path="/careers" element={<CareerList />} />
<Route path="/career-details/:id" element={<CareerDetails />} />

      </Routes>
    </div>
  );
}

export default App;
