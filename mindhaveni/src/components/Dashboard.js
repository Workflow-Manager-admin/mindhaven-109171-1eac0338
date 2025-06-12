import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Dashboard component for MindHaven
 * 
 * Displays the user dashboard with:
 * - Psychology test cards
 * - AI Therapist chat option
 * - Past test results
 * - Logout functionality
 */
function Dashboard() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  // Mock data for past test results
  const mockTestResults = [
    { id: 1, testType: 'ADHD Screening', date: '2023-08-15', score: '28/100', interpretation: 'Low likelihood' },
    { id: 2, testType: 'Anxiety Assessment', date: '2023-09-03', score: '42/100', interpretation: 'Moderate' },
    { id: 3, testType: 'Depression Screening', date: '2023-09-10', score: '16/100', interpretation: 'Minimal' },
  ];

  // Psychology test data
  const psychTests = [
    { id: 'adhd', name: 'ADHD', description: 'Assess attention deficit and hyperactivity symptoms', icon: '🌀' },
    { id: 'anxiety', name: 'Anxiety', description: 'Measure anxiety levels and symptoms', icon: '🌫️' },
    { id: 'depression', name: 'Depression', description: 'Screen for symptoms of depression', icon: '🌧️' },
    { id: 'stress', name: 'Stress', description: 'Evaluate your stress levels', icon: '🔥' },
    { id: 'ptsd', name: 'PTSD Screening', description: 'Post-traumatic stress disorder assessment', icon: '🛡️' },
    { id: 'personality', name: 'Personality', description: 'Discover your personality traits', icon: '💎' },
    { id: 'eq', name: 'Emotional Intelligence', description: 'Assess your emotional awareness and skills', icon: '💡' },
  ];

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

  // Logout and redirect to login page
  const handleLogout = () => {
    clearUserFromLocalStorage();
    navigate('/login');
  };

  // Start a new test
  const startTest = (testId) => {
    // In a real app, this would navigate to the specific test
    alert(`Starting ${testId} test... This feature will be implemented in the future.`);
  };

  // Start AI Therapist chat
  const startAIChat = () => {
    // In a real app, this would open the chat interface
    alert('Starting AI Therapist chat... This feature will be implemented in the future.');
  };

  return (
    <div className="dashboard-container" style={{
      minHeight: '100vh',
      background: 'var(--mh-primary)',
      fontFamily: 'var(--mh-font)',
      paddingTop: '64px',
    }}>
      {/* Header */}
      <header style={{
        background: 'var(--mh-header-bg)',
        padding: '15px 0',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        borderBottom: '1px solid #e5eee9',
        zIndex: 100,
        boxShadow: '0 2px 10px 0 rgba(45,65,80,0.04)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div className="logo" style={{ color: 'var(--mh-accent)', fontFamily: 'var(--mh-font-bold)', display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span style={{ fontWeight: 900, fontSize: 26 }}>🧠</span>
            <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>MindHaven</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#497568', fontWeight: 500 }}>
              Hello, <span style={{ color: '#184033', fontWeight: 600 }}>{userEmail}</span>
            </span>
            <button 
              className="btn" 
              style={{
                background: 'var(--mh-accent)',
                color: '#523000',
                fontWeight: 600,
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}>
        {/* Welcome Section */}
        <section style={{ marginBottom: '10px' }}>
          <h1 style={{ color: '#184033', fontWeight: 700, fontSize: '2rem', margin: '0 0 5px 0' }}>
            Dashboard
          </h1>
          <p style={{ color: '#41534C', fontSize: '1.1rem', margin: '0' }}>
            Welcome to MindHaven. Explore your well-being through our tests and AI Therapist.
          </p>
        </section>
        
        {/* Psychology Tests Section */}
        <section>
          <h2 style={{ color: '#25614f', fontWeight: 600, fontSize: '1.4rem', marginBottom: '15px' }}>
            Psychology Tests
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
            gap: '20px',
          }}>
            {psychTests.map(test => (
              <div key={test.id} style={{
                background: 'var(--mh-secondary)',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(100,180,140,0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                height: '100%',
              }} 
              onClick={() => startTest(test.id)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(100,180,140,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(100,180,140,0.08)';
              }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{test.icon}</span>
                <h3 style={{ color: '#184033', fontSize: '1.2rem', fontWeight: 600, margin: '0 0 5px 0' }}>
                  {test.name}
                </h3>
                <p style={{ color: '#475A51', fontSize: '0.95rem', margin: '0', flex: '1' }}>
                  {test.description}
                </p>
                <button className="btn" style={{
                  background: 'var(--mh-primary)',
                  color: '#184033',
                  padding: '8px 15px',
                  marginTop: '15px',
                  width: '100%',
                  fontWeight: 600,
                }}>
                  Start Test
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* AI Therapist Section */}
        <section>
          <h2 style={{ color: '#25614f', fontWeight: 600, fontSize: '1.4rem', marginBottom: '15px' }}>
            AI Therapist
          </h2>
          <div style={{
            background: 'var(--mh-secondary)',
            borderRadius: '10px',
            padding: '25px',
            boxShadow: '0 2px 8px rgba(100,180,140,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <h3 style={{ color: '#184033', fontSize: '1.2rem', fontWeight: 600, margin: '0 0 10px 0' }}>
                Chat with our AI Therapist
              </h3>
              <p style={{ color: '#475A51', fontSize: '1rem', margin: '0 0 15px 0' }}>
                Talk about your feelings, get insights, or just have a supportive conversation. Our AI Therapist is here to help.
              </p>
              <button 
                className="btn" 
                style={{
                  background: 'var(--mh-accent)',
                  color: '#523000',
                  padding: '10px 20px',
                  fontWeight: 600,
                }}
                onClick={startAIChat}
              >
                Start Chatting
              </button>
            </div>
            <div style={{ fontSize: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
              🤖
            </div>
          </div>
        </section>

        {/* Past Results Section */}
        <section>
          <h2 style={{ color: '#25614f', fontWeight: 600, fontSize: '1.4rem', marginBottom: '15px' }}>
            Your Past Results
          </h2>
          {mockTestResults.length > 0 ? (
            <div style={{ 
              background: 'var(--mh-secondary)', 
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(100,180,140,0.08)',
              overflow: 'hidden',
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ 
                    background: 'var(--mh-primary)', 
                    color: '#184033', 
                    fontWeight: 600,
                    textAlign: 'left',
                  }}>
                    <th style={{ padding: '12px 15px', borderBottom: '1px solid #E6F4EA' }}>Test Type</th>
                    <th style={{ padding: '12px 15px', borderBottom: '1px solid #E6F4EA' }}>Date</th>
                    <th style={{ padding: '12px 15px', borderBottom: '1px solid #E6F4EA' }}>Score</th>
                    <th style={{ padding: '12px 15px', borderBottom: '1px solid #E6F4EA' }}>Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTestResults.map(result => (
                    <tr key={result.id} style={{ borderBottom: '1px solid #E6F4EA' }}>
                      <td style={{ padding: '12px 15px', color: '#184033', fontWeight: 500 }}>{result.testType}</td>
                      <td style={{ padding: '12px 15px', color: '#475A51' }}>{result.date}</td>
                      <td style={{ padding: '12px 15px', color: '#475A51' }}>{result.score}</td>
                      <td style={{ padding: '12px 15px', color: '#475A51' }}>{result.interpretation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ 
              background: 'var(--mh-secondary)', 
              borderRadius: '10px', 
              padding: '20px',
              textAlign: 'center',
              color: '#475A51',
            }}>
              You haven't taken any tests yet. Start a test above to see your results here.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
