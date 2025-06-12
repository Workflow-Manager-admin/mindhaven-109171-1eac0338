import React, { useRef, useState } from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  // Refs for scroll navigation
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  // Routing: page state ("/"=home, "/login", "/dashboard")
  const [route, setRoute] = useState(window.location.pathname);

  // PUBLIC_INTERFACE
  function handleNav(section) {
    // If navigating to special pages, change route
    if (section === "login") {
      setRoute("/login");
      window.history.pushState({}, "", "/login");
      return;
    }
    if (section === "dashboard") {
      setRoute("/dashboard");
      window.history.pushState({}, "", "/dashboard");
      return;
    }
    // Otherwise, scroll to ref and stay on main page
    setRoute("/");
    window.history.pushState({}, "", "/");
    const refs = {
      about: aboutRef,
      mission: missionRef,
      features: featuresRef,
      contact: contactRef,
    };
    setTimeout(() => {
      // Prevents navigation from missing due to render
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (refs[section]?.current) {
        refs[section].current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }

  // PUBLIC_INTERFACE
  function handleSubmitContact(e) {
    e.preventDefault();
    // Placeholding actual handling
    alert("Thank you for contacting MindHaven! We'll get back to you soon.");
    e.target.reset();
  }

  // Stick main content here
  function MainLandingPage() {
    return (
      <>
        {/* Sticky Header */}
        <nav
          className="navbar"
          style={{
            background: "var(--mh-header-bg)",
            fontFamily: "var(--mh-font)",
            boxShadow: "0 2px 10px 0 rgba(45,65,80,0.04)",
          }}
        >
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="logo" style={{ color: "var(--mh-accent)", fontFamily: "var(--mh-font-bold)" }}>
              <span style={{ fontWeight: 900, fontSize: 26 }}>🧠</span>
              MindHaven
            </div>
            <div style={{ display: "flex", gap: "24px", fontSize: "1.08rem", fontWeight: 500 }}>
              <button className="mh-navlink" onClick={() => handleNav("home")}>Home</button>
              <button className="mh-navlink" onClick={() => handleNav("about")}>About</button>
              <button className="mh-navlink" onClick={() => handleNav("mission")}>Our Mission</button>
              <button className="mh-navlink" onClick={() => handleNav("features")}>Features</button>
              <button className="mh-navlink" onClick={() => handleNav("contact")}>Contact</button>
              <button className="mh-navlink"
                style={{
                  background: "var(--mh-accent)",
                  color: "#523000",
                  borderRadius: 4,
                  fontWeight: 600,
                }}
                onClick={() => handleNav("login")}
              >Login
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className="mh-hero"
          style={{
            background: "linear-gradient(120deg, var(--mh-primary) 60%, var(--mh-accent-light))",
            minHeight: "55vh",
            paddingTop: 132,
            paddingBottom: 64,
            textAlign: "center",
            fontFamily: "var(--mh-font-bold)",
          }}
        >
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <div className="mh-hero-headline" style={{ color: "#202c1c", fontWeight: 700, fontSize: "2.45rem", marginBottom: 14 }}>
              Your Personal Mental Wellness Companion
            </div>
            <div style={{ color: "#53645F", fontSize: "1.15rem", lineHeight: 1.5, maxWidth: 600, marginBottom: 18 }}>
              InnerEase by MindHaven makes mental health support simple, free, and friendly—
              take psychology self-assessments and explore with our AI Therapist chat. No barriers, just wellness.
            </div>
            <button
              className="btn btn-large"
              style={{
                background: "var(--mh-accent)",
                color: "#523000",
                fontWeight: 600,
              }}
              onClick={() => handleNav("features")}
            >
              Get Started
            </button>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          style={{
            background: "var(--mh-secondary)",
            padding: "64px 0 52px 0",
            fontFamily: "var(--mh-font)",
          }}
        >
          <div className="container" style={{ maxWidth: 740 }}>
            <h2 style={{ color: "#25614f", fontWeight: 700, fontSize: "2rem", marginBottom: 14 }}>
              About InnerEase
            </h2>
            <div style={{ color: "#41534C", fontSize: "1.07rem", lineHeight: 1.57 }}>
              InnerEase is a <b>safe, friendly platform</b> making mental wellness tools accessible to all.
              Explore your well-being through scientifically-informed self-assessments and chat with our AI Therapist for support and guidance.
              <br /><br />
              We focus on privacy, encouragement, and simplicity. Whether you're searching for insight or support,
              MindHaven is your companion along the journey.
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section
          ref={missionRef}
          style={{
            background: "var(--mh-primary)",
            padding: "64px 0 48px 0",
            fontFamily: "var(--mh-font)",
            textAlign: "center",
          }}
        >
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ color: "#184033", fontWeight: 700, marginBottom: 18 }}>
              Our Vision & Mission
            </h2>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              justifyContent: "center",
              marginBottom: 10,
            }}>
              <div style={{
                flex: "1 1 230px",
                background: "var(--mh-secondary)",
                borderRadius: 10,
                padding: 28,
                boxShadow: "0 1px 4px rgba(160,200,180,0.13)",
                minWidth: 220,
              }}>
                <span style={{
                  color: "var(--mh-accent)",
                  fontWeight: 600,
                  fontSize: "1.13rem"
                }}>Vision</span>
                <div style={{
                  fontWeight: 500,
                  color: "#23584A",
                  marginTop: 10,
                  fontSize: "1.1rem"
                }}>
                  Make <b>mental wellness accessible</b> to all, everywhere, always.
                </div>
              </div>
              <div style={{
                flex: "1 1 230px",
                background: "var(--mh-secondary)",
                borderRadius: 10,
                padding: 28,
                boxShadow: "0 1px 4px rgba(160,200,180,0.11)",
                minWidth: 220
              }}>
                <span style={{
                  color: "var(--mh-accent)",
                  fontWeight: 600,
                  fontSize: "1.13rem"
                }}>Mission</span>
                <div style={{
                  fontWeight: 500,
                  color: "#23584A",
                  marginTop: 10,
                  fontSize: "1.1rem"
                }}>
                  Provide <b>free tools</b> to help people better understand themselves and nurture their mental health.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={featuresRef}
          style={{
            background: "#fffefb",
            padding: "56px 0 50px 0",
            fontFamily: "var(--mh-font)",
          }}
        >
          <div className="container">
            <h2 style={{ color: "#25614f", fontWeight: 700, fontSize: "2rem", marginBottom: 22 }}>
              Features
            </h2>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 22,
              justifyContent: "center",
            }}>
              {/* Self-assessment test cards */}
              {[
                { name: "ADHD", desc: "Screen for symptoms of ADHD", icon: "🌀" },
                { name: "Anxiety", desc: "Gauge anxiety levels", icon: "🌫️" },
                { name: "Depression", desc: "Assess for depressive patterns", icon: "🌧️" },
                { name: "Stress", desc: "Understand your stress", icon: "🔥" },
                { name: "PTSD", desc: "PTSD risk screening", icon: "🛡️" },
                { name: "Personality", desc: "Discover personality strengths", icon: "💎" },
                { name: "Emotional IQ", desc: "Test emotional intelligence", icon: "💡" },
                { name: "AI Therapist", desc: "Chat for friendly support", icon: "🤖" },
              ].map((f) => (
                <div key={f.name}
                  style={{
                    flex: "1 1 160px",
                    background: "var(--mh-primary)",
                    borderRadius: 9,
                    minWidth: 155,
                    maxWidth: 190,
                    padding: "24px 14px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 1.5px 4px rgba(100,189,130,0.13)",
                    marginBottom: 5,
                  }}
                >
                  <span style={{ fontSize: "1.5rem", marginBottom: 7 }}>{f.icon}</span>
                  <span style={{ fontWeight: 600, color: "#184033", fontSize: "1.07rem" }}>{f.name}</span>
                  <span style={{
                    color: "#475A51",
                    fontWeight: 400,
                    fontSize: ".93rem",
                    marginTop: 8,
                    textAlign: "center"
                  }}>{f.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          style={{
            background: "var(--mh-secondary)",
            padding: "56px 0 52px 0",
            fontFamily: "var(--mh-font)",
          }}
        >
          <div className="container" style={{ maxWidth: 570 }}>
            <h2 style={{ color: "#25614f", fontWeight: 700, fontSize: "2rem", marginBottom: 14 }}>
              Contact Us
            </h2>
            <form onSubmit={handleSubmitContact} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input
                required
                placeholder="Your Name"
                name="name"
                minLength={2}
                style={{
                  border: "1px solid #E6F4EA",
                  borderRadius: 6,
                  padding: "10px 13px",
                  fontSize: "1rem",
                  fontFamily: "inherit"
                }}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                style={{
                  border: "1px solid #E6F4EA",
                  borderRadius: 6,
                  padding: "10px 13px",
                  fontSize: "1rem",
                  fontFamily: "inherit"
                }}
              />
              <textarea
                required
                name="message"
                placeholder="How can we help you?"
                rows={4}
                style={{
                  border: "1px solid #E6F4EA",
                  borderRadius: 6,
                  padding: "10px 13px",
                  fontSize: "1rem",
                  fontFamily: "inherit"
                }}
              />
              <button
                type="submit"
                className="btn btn-large"
                style={{
                  background: "var(--mh-accent)",
                  color: "#523000",
                  alignSelf: "flex-end",
                  fontWeight: 600,
                }}
              >Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            background: "var(--mh-primary)",
            padding: "32px 0 18px 0",
            color: "#497568",
            fontSize: "0.99rem",
            textAlign: "center",
            fontFamily: "var(--mh-font)",
            boxShadow: "0 -2px 18px #e1f3e2",
          }}
        >
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            <div>
              &copy; {new Date().getFullYear()} MindHaven • InnerEase
            </div>
            <div>
              <a href="#" style={{ color: "#497568", marginRight: 14, textDecoration: "underline" }}>Privacy Policy</a>
              <a href="#" style={{ color: "#497568", textDecoration: "underline" }}>Terms</a>
            </div>
          </div>
        </footer>
      </>
    );
  }

  // AUTH UTILITIES
  // --- store user (mock) in localStorage under 'mh-user'
  // --- user shape: { email, password }
  function saveUserToLocalStorage(user) {
    window.localStorage.setItem('mh-user', JSON.stringify(user));
  }
  function loadUserFromLocalStorage() {
    const data = window.localStorage.getItem('mh-user');
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }
  function clearUserFromLocalStorage() {
    window.localStorage.removeItem('mh-user');
    window.localStorage.removeItem('mh-current-user');
  }

  // Set current session (so reload preserves login)
  function setCurrentUser(email) {
    if (email) {
      window.localStorage.setItem('mh-current-user', email);
    } else {
      window.localStorage.removeItem('mh-current-user');
    }
  }
  function getCurrentUser() {
    return window.localStorage.getItem('mh-current-user');
  }

  // LoginPage and SignUpPage use the same base styling
  function AuthCard({ title, children }) {
    return (
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
        }}>{title}</div>
        <div style={{ height: 12 }} />
        {children}
      </div>
    );
  }

  // Email validator
  function isValidEmail(email) {
    // Simple but effective regex
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  }

  // PUBLIC_INTERFACE
  function LoginPage({ goToSignUp, goToDashboard, goHome }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const [globalError, setGlobalError] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    // For demo: check localStorage credentials
    function handleLoginSubmit(e) {
      e.preventDefault();
      setErrors({});
      setGlobalError("");
      let errs = {};
      if (!email.trim()) errs.email = "Email is required";
      else if (!isValidEmail(email)) errs.email = "Invalid email address";
      if (!password) errs.password = "Password is required";
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setIsSubmitting(true);

      // Check localStorage
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
          goToDashboard();
        }
      }, 600); // simulate delay
    }

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
        <AuthCard title="Login">
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
            <button
              className="mh-navlink"
              style={{
                marginLeft: 10,
                color: "#ba760a",
                fontWeight: 600,
                fontSize: ".99rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline"
              }}
              onClick={goToSignUp}
              type="button"
            >Sign Up</button>
          </div>
          <div style={{ textAlign: "center", marginTop: 13 }}>
            <button
              className="mh-navlink"
              style={{
                fontSize: ".93rem",
                color: "#497568",
                fontWeight: 500,
              }}
              onClick={goHome}
              type="button"
            >← Back to Home</button>
          </div>
        </AuthCard>
      </div>
    );
  }

  // PUBLIC_INTERFACE
  function SignUpPage({ goToLogin, goToDashboard, goHome }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const [globalError, setGlobalError] = React.useState("");
    const [successMsg, setSuccessMsg] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    function handleSignUpSubmit(e) {
      e.preventDefault();
      setErrors({});
      setGlobalError("");
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
        // For demo: only allow one user to be set in localStorage
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
            goToDashboard();
          }, 700);
        }
      }, 700);
    }

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
        <AuthCard title="Sign Up">
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
            <button
              className="mh-navlink"
              style={{
                marginLeft: 10,
                color: "#ba760a",
                fontWeight: 600,
                fontSize: ".99rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline"
              }}
              onClick={goToLogin}
              type="button"
            >Log In</button>
          </div>
          <div style={{ textAlign: "center", marginTop: 13 }}>
            <button
              className="mh-navlink"
              style={{
                fontSize: ".93rem",
                color: "#497568",
                fontWeight: 500,
              }}
              onClick={goHome}
              type="button"
            >← Back to Home</button>
          </div>
        </AuthCard>
      </div>
    );
  }

  // Placeholder Dashboard page, add LOGOUT
  function DashboardPage() {
    const [userEmail, setUserEmail] = React.useState(getCurrentUser());

    function logoutAndGoHome() {
      clearUserFromLocalStorage();
      setUserEmail(null);
      setRoute("/");
      window.history.pushState({}, "", "/");
    }
    function logoutAndGoLogin() {
      clearUserFromLocalStorage();
      setUserEmail(null);
      setRoute("/login");
      window.history.pushState({}, "", "/login");
    }

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
            <span style={{ fontWeight: 600, color: "#20683a" }}>{userEmail || getCurrentUser()}</span>
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

  // Routing logic
  // Route can be: "/" (home), "/login", "/signup", "/dashboard"
  // Session persists (user stays logged in unless logs out)

  // If already signed in, redirect login/signup to dashboard
  const [authRoute, setAuthRoute] = React.useState(route); // include "/signup"
  React.useEffect(() => {
    // On direct load, support deep linking for /signup, /login or /dashboard
    if (["/login", "/signup", "/dashboard"].includes(window.location.pathname)) {
      setAuthRoute(window.location.pathname);
    }
  }, []);

  function goTo(path) {
    setAuthRoute(path);
    setRoute(path);
    window.history.pushState({}, "", path);
  }

  // Session: if already "signed in" and trying to go to login/signup, redirect
  const userIsAuthenticated = !!getCurrentUser();
  let content;
  if (authRoute === "/login") {
    if (userIsAuthenticated) {
      content = <DashboardPage />;
    } else {
      content = <LoginPage
        goToSignUp={() => goTo("/signup")}
        goToDashboard={() => goTo("/dashboard")}
        goHome={() => goTo("/")}
      />;
    }
  } else if (authRoute === "/signup") {
    if (userIsAuthenticated) {
      content = <DashboardPage />;
    } else {
      content = <SignUpPage
        goToLogin={() => goTo("/login")}
        goToDashboard={() => goTo("/dashboard")}
        goHome={() => goTo("/")}
      />;
    }
  } else if (authRoute === "/dashboard") {
    if (!userIsAuthenticated) {
      content = <LoginPage
        goToSignUp={() => goTo("/signup")}
        goToDashboard={() => goTo("/dashboard")}
        goHome={() => goTo("/")}
      />;
    } else {
      content = <DashboardPage />;
    }
  } else {
    content = <MainLandingPage />;
  }

  return (
    <div className="app" style={{ background: "var(--mh-bg)" }}>
      {content}
    </div>
  );
}

export default App;
