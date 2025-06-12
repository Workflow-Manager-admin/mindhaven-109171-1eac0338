import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * NotFound component for MindHaven
 * 
 * Displays a 404 error page when a route doesn't exist
 */
function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--mh-secondary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "var(--mh-font)",
        padding: "0 20px"
      }}
    >
      <div
        style={{
          background: "var(--mh-primary)",
          borderRadius: 10,
          boxShadow: "0 3px 18px 0 rgba(80,120,110,0.08)",
          padding: "38px 34px 30px 34px",
          minWidth: 295,
          maxWidth: 450,
          textAlign: "center"
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: 16 }}>😕</div>
        <h1 style={{ 
          color: "#2e6851", 
          fontWeight: 700,
          fontSize: "1.8rem",
          margin: "0 0 12px 0"
        }}>
          Page Not Found
        </h1>
        <p style={{ 
          color: "#41534C", 
          fontSize: "1.05rem", 
          marginBottom: 24 
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="btn"
          style={{
            background: "var(--mh-accent)",
            color: "#523000",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-block"
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
