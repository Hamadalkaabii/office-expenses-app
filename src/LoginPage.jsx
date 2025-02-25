import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function LoginPage({ onLogin }) {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        const authorizedUsers = import.meta.env.VITE_AUTHORIZED_USERS
          ? import.meta.env.VITE_AUTHORIZED_USERS.split(',')
          : [];

        if (
          authorizedUsers.includes(username) &&
          password === 'password'
        ) {
          onLogin();
          navigate('/');
        } else {
          setError('Invalid username or password');
        }
      };

      return (
        <div className="login-container">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

    export default LoginPage;
