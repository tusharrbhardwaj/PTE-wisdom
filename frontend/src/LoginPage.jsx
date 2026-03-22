import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', { email, password: pass });
      alert('Welcome ' + res.data.user.name);
    } catch (err) { alert('Login Failed'); }
  };

  return (
    <div className="auth-page">
      <h1 className="text-4xl font-bold mb-8">Sign In</h1>
      <form onSubmit={handleLogin} className="max-w-md">
        <input className="auth-input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="auth-input" type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
        <button className="bg-black text-white px-8 py-3 uppercase font-bold">Login</button>
      </form>
      <Link to="/signup" className="mt-4 block text-sm">Create an account</Link>
    </div>
  );
}