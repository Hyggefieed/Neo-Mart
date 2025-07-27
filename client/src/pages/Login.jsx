import React, { useState } from 'react';
import { loginUser } from '../services/authService';

const PRIMARY = "#2f3f50";

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
    <div className="min-h-screen flex items-center justify-center bg-[#f6f8fa]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-[#e3e6e9]">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#2f3f50] tracking-tight">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#2f3f50] mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-[#e3e6e9] rounded px-4 py-2 outline-none focus:ring-2 focus:ring-[#2f3f50] transition text-[#2f3f50] bg-[#f6f8fa]"
              name="email"
              type="email"
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
              autoComplete="current-password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2f3f50] hover:bg-[#223042] text-white font-bold py-2 rounded transition mt-2"
            style={{ letterSpacing: "0.03em" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
