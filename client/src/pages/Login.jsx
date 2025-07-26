import React, { useState } from 'react';
import { loginUser } from '../services/authService';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      // redirect or update state
    } catch (err) {
      alert(err.response.data.message || "Error during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
    <form onSubmit={handleSubmit}>
      <input className="" name="email" placeholder="Email" onChange={handleChange} /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
      <button type="submit">Login</button>
    </form>
    </div>
    </div>
  );
};

export default Login;
