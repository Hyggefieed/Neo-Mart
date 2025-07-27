import React, { useState } from 'react';
import { registerUser } from '../services/authService';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      localStorage.setItem("token", data.token);
      alert("Registered successfully!");
      // redirect or navigate
    } catch (err) {
      alert(err.response?.data?.message || "Error during registration");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8fa]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-[#e3e6e9]">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#2f3f50] tracking-tight">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#2f3f50] mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-[#e3e6e9] rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#2f3f50] transition text-[#2f3f50] bg-[#f6f8fa]"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              autoComplete="name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2f3f50] mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-[#e3e6e9] rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#2f3f50] transition text-[#2f3f50] bg-[#f6f8fa]"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="username"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2f3f50] mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border border-[#e3e6e9] rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#2f3f50] transition text-[#2f3f50] bg-[#f6f8fa]"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2f3f50] hover:bg-[#223042] text-white font-bold py-2 rounded transition mt-2"
            style={{ letterSpacing: "0.03em" }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
