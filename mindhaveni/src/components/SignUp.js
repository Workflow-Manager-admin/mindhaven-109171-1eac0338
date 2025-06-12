import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * SignUp component for MindHaven
 * 
 * Provides user registration form with:
 * - Email and password inputs with validation
 * - Error handling and display
 * - Navigation to Login and Dashboard
 */
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Validates email format
  const isValidEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  };

  // Save user to localStorage
  const saveUserToLocalStorage = (user) => {
    window.localStorage.setItem('mh-user', JSON.stringify(user));
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

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setGlobalError("");
    
    // Validate inputs
    let errs = {};
    if (!email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(email)) errs.email = "Invalid email address";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Password must be at least 6 characters";
    
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    setIsSubmitting(true);

    setTimeout(() => {
      // Check if user already exists
      const existingUser = loadUserFromLocalStorage();
      if (existingUser && existingUser.email === email) {
        setGlobalError("An account with this email already exists. Try logging in.");
        setIsSubmitting(false);
      } else {
        saveUserToLocalStorage({ email, password });
        setSuccessMsg("Account created! Logging you in...");
        setCurrentUser(email);
        setTimeout(() => {
          setIsSubmitting(false);
          navigate('/dashboard');
        }, 700);
      }
    }, 700);
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
        }}>Sign Up</div>
        <div style={{ height: 12 }} />
        
        <form onSubmit={handleSignUpSubmit} style={{ display: "flex", flexDirection: "column", gap: 9 }}>
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
            placeholder="Password (min 6 chars)"
            style={{
              border: errors.password ? "1.2px solid #e57c62" : "1px solid #E6F4EA",
              borderRadius: 5,
              padding: "9px 12px",
              fontSize: "1rem",
              fontFamily: "inherit",
              marginBottom: 2,
            }}
            minLength={6}
            autoComplete="new-password"
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
          
          {successMsg && <div style={{
            background: "#ebfff5",
            color: "#26815f",
            padding: "7.5px 11px",
            borderRadius: 6,
            fontWeight: 500,
            fontSize: ".98rem",
            margin: "8px 0 2px 0"
          }}>{successMsg}</div>}
          
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
            disabled={isSubmitting || !!successMsg}
            type="submit"
          >{isSubmitting || !!successMsg ? "Creating..." : "Sign Up"}</button>
        </form>
        
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span style={{ color: "#5a8881", fontSize: ".97rem" }}>Already have an account?</span>
          <Link
            to="/login"
            style={{
              marginLeft: 10,
              color: "#ba760a",
              fontWeight: 600,
              fontSize: ".99rem",
              textDecoration: "underline"
            }}
          >Log In</Link>
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

export default SignUp;
