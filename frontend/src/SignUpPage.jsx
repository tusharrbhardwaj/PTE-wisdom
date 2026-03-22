import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/register', form);
      alert('Account Created!');
    } catch (err) { alert('Error'); }
  };

  return (
    <div className="auth-page">
      <h1 className="text-4xl font-bold mb-8">Create Account</h1>
      <form onSubmit={handleSignup} className="max-w-md">
        <input className="auth-input" placeholder="Full Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input className="auth-input" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
        <input className="auth-input" type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
        <button className="bg-black text-white px-8 py-3 uppercase font-bold">Sign Up</button>
      </form>
    </div>
  );
}