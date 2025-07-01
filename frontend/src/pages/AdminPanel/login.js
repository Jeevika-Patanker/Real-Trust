import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@flipr.com" && password === "flipr#123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Admin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
