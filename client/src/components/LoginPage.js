// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', { email, password });
      if (res.data.token) {
        onLoginSuccess();  // This triggers the success action
      }
    } catch (err) {
      console.log(err);
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Log In
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}

export default LoginPage;
