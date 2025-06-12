import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Login component for MindHaven
 * 
 * Provides user authentication form with:
 * - Email and password inputs with validation
 * - Error handling and display
 * - Navigation to Sign Up and Dashboard
 */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Validates email format
  const isValidEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  };

  // Get user from localStorage 
  const loadUserFromLocalStorage = () => {
    const data = window.localStorage.getItem('mh-user');
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  };

  // Set current user session
  const setCurrentUser = (email) => {
    if (email) {
      window.localStorage.setItem('mh-current-user', email);
    } else {
      window.localStorage.removeItem('mh-current-user');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setGlobalError("");
    
    // Validate inputs
    let errs = {};
    if (!email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(email)) errs.email = "Invalid email address";
    if (!password) errs.password = "Password is required";
    
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    setIsSubmitting(true);

    // Simulate authentication check
    setTimeout(() => {
      const storedUser = loadUserFromLocalStorage();
      if (
        !storedUser ||
        storedUser.email !== email ||
        storedUser.password !== password
      ) {
        setGlobalError("Incorrect email or password.");
        setIsSubmitting(false);
      } else {
        setCurrentUser(email);
        setIsSubmitting(false);
        navigate('/dashboard');
      }
    }, 600); // Simulate delay
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--mh-secondary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "var(--mh-font)"
      }}
    >
      <div
        style={{
          background: "var(--mh-primary)",
          borderRadius: 10,
          boxShadow: "0 3px 18px 0 rgba(80,120,110,0.08)",
          padding: "38px 34px 30px 34px",
          minWidth: 295,
          maxWidth: 350,
        }}
      >
        <div style={{
          fontWeight: 700,
          fontSize: "1.37rem",
          color: "#2e6851",
          marginBottom: 5,
          textAlign: 'center'
        }}>Login</div>
        <div style={{ height: 12 }} />
        
        <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <label style={{ fontWeight: 500, fontSize: ".97rem", color: "#425C4E", marginBottom: 2 }}>
            Email
          </label>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            style={{
              border: errors.email ? "1.2px solid #e57c62" : "1px solid #E6F4EA",
              borderRadius: 5,
              padding: "9px 12px",
              fontSize: "1rem",
              fontFamily: "inherit",
              marginBottom: 2,
            }}
          />
          {errors.email && <span style={{ color: "#d24242", fontSize: ".93rem", marginBottom: 2 }}>{errors.email}</span>}

          <label style={{ fontWeight: 500, fontSize: ".97rem", color: "#425C4E", marginTop: 6, marginBottom: 2 }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              border: errors.password ? "1.2px solid #e57c62" : "1px solid #E6F4EA",
              borderRadius: 5,
              padding: "9px 12px",
              fontSize: "1rem",
              fontFamily: "inherit",
              marginBottom: 2,
            }}
            minLength={6}
            autoComplete="current-password"
          />
          {errors.password && <span style={{ color: "#d24242", fontSize: ".93rem", marginBottom: 5 }}>{errors.password}</span>}

          {globalError && <div style={{
            background: "#fff3f2",
            color: "#c13c3c",
            padding: "7.5px 11px",
            borderRadius: 6,
            fontWeight: 500,
            fontSize: ".98rem",
            margin: "8px 0 2px 0"
          }}>{globalError}</div>}

          <button
            className="btn"
            style={{
              background: "var(--mh-accent)",
              color: "#523000",
              fontWeight: 600,
              marginTop: 12,
              borderRadius: 4,
              width: "100%",
              fontSize: "1.08rem"
            }}
            disabled={isSubmitting}
            type="submit"
          >{isSubmitting ? "Logging in..." : "Login"}</button>
        </form>
        
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span style={{ color: "#5a8881", fontSize: ".97rem" }}>Don't have an account?</span>
          <Link
            to="/signup"
            style={{
              marginLeft: 10,
              color: "#ba760a",
              fontWeight: 600,
              fontSize: ".99rem",
              textDecoration: "underline"
            }}
          >Sign Up</Link>
        </div>
        
        <div style={{ textAlign: "center", marginTop: 13 }}>
          <Link
            to="/"
            style={{
              fontSize: ".93rem",
              color: "#497568",
              fontWeight: 500,
            }}
          >← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
