import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Dashboard component for MindHaven
 * 
 * Displays basic user dashboard with logout functionality
 */
function Dashboard() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  // Get current user from localStorage
  const getCurrentUser = () => {
    return window.localStorage.getItem('mh-current-user');
  };

  // Clear user data from localStorage
  const clearUserFromLocalStorage = () => {
    window.localStorage.removeItem('mh-user');
    window.localStorage.removeItem('mh-current-user');
  };

  // Load user data on component mount
  useEffect(() => {
    const email = getCurrentUser();
    setUserEmail(email);
    
    // If no user is logged in, redirect to login
    if (!email) {
      navigate('/login');
    }
  }, [navigate]);

  // Logout and navigate to home
  const logoutAndGoHome = () => {
    clearUserFromLocalStorage();
    navigate('/');
  };

  // Logout and navigate to login
  const logoutAndGoLogin = () => {
    clearUserFromLocalStorage();
    navigate('/login');
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--mh-primary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "var(--mh-font)"
      }}
    >
      <div style={{
        background: "var(--mh-secondary)",
        borderRadius: 8,
        boxShadow: "0 2px 10px 0 rgba(80,120,110,0.09)",
        padding: "40px 42px",
        minWidth: 310,
        textAlign: "center"
      }}>
        <div style={{ fontWeight: 700, fontSize: "1.4rem", color: "#2e6851", marginBottom: 10 }}>Dashboard</div>
        <div style={{ fontSize: ".99rem", color: "#425C4E" }}>
          You are signed in as<br/>
          <span style={{ fontWeight: 600, color: "#20683a" }}>{userEmail}</span>
        </div>
        <div style={{ margin: "19px 0 0 0", display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            className="btn"
            style={{
              background: "var(--mh-accent)",
              color: "#523000",
              fontWeight: 600,
              width: 113,
              borderRadius: 4,
            }}
            onClick={logoutAndGoLogin}
          >Log Out</button>
          <button
            className="btn"
            style={{
              background: "var(--mh-primary)",
              color: "#3d5946",
              border: "1.4px solid #e4e4e4",
              fontWeight: 500,
              width: 113,
              borderRadius: 4,
            }}
            onClick={logoutAndGoHome}
          >Home</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
