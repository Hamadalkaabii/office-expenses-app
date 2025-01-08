import React from 'react';
    import netlifyIdentity from 'netlify-identity-widget';

    function LoginPage() {
      const handleLogin = () => {
        netlifyIdentity.open();
      };

      return (
        <div className="login-container">
          <h2>Login</h2>
          <button onClick={handleLogin}>Login with Netlify</button>
        </div>
      );
    }

    export default LoginPage;
