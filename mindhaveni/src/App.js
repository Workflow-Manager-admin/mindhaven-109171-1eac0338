import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Import components
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

// PUBLIC_INTERFACE
/**
 * Main App component for MindHaven
 * 
 * Implements routing for all pages and authentication logic
 */
function App() {
  // Check if user is authenticated
  const getCurrentUser = () => {
    return window.localStorage.getItem('mh-current-user');
  };
  
  // Check for user on initial load
  useEffect(() => {
    // If coming directly to a route, respect the URL
    const currentPath = window.location.pathname;
    // Add any initialization code here if needed
  }, []);
  
  // AuthRoute component for protected routes
  const AuthRoute = ({ children }) => {
    const userIsAuthenticated = !!getCurrentUser();
    
    if (!userIsAuthenticated) {
      return <Navigate to="/login" />;
    }
    
    return children;
  };

  return (
    <Router>
      <div className="app" style={{ background: "var(--mh-bg)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/dashboard" 
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
