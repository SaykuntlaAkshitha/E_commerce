import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './Header.css';

export default function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const navigate = useNavigate();

  const fadeInOut = useSpring({
    opacity: showLoginForm ? 1 : 0,
    display: showLoginForm ? 'block' : 'none',
  });

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
      setLoggedInUsername(username);
      setUsername('');
      setPassword('');
      setShowLoginForm(false);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleNavigateHome = () => {
    if (isLoggedIn) {
      navigate('/Home');
    } else {
      setShowLoginForm(true);
    }
  };

  return (
    <div className='website-container' style={{ backgroundColor: '#DB7093', padding: '10px', color: '#fff' }}>
      <img src='logo.png' alt='' width={"120px"} />
      <nav style={styles.nav}>
        <NavLink to='/Home' style={styles.navLink} onClick={handleNavigateHome}>
          Home
        </NavLink>
       
        <NavLink to='/Review' style={styles.navLink}>
          Review
        </NavLink>
        <NavLink to='/Product' style={styles.navLink}>
          Product
        </NavLink>
       
      </nav>
      <div className='user-section'>
        {isLoggedIn ? (
          <div>Welcome, {loggedInUsername}!</div>
        ) : (
          <button className='login-button' onClick={() => setShowLoginForm(!showLoginForm)}>
            {showLoginForm ? 'Close' : 'Login'}
          </button>
        )}
      </div>

      <animated.div style={fadeInOut}>
        {showLoginForm && (
          <div className="login-form-container">
            <div className="login-form">
              <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <button onClick={handleLogin}>Submit</button>
            </div>
          </div>
        )}
      </animated.div>

      <Outlet />
    </div>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '10px',
    fontSize: '16px',
  },
};
