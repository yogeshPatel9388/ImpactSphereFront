import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      toast.success("Logged in");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <section className="min-h-screen flex items-start justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="p-3 border rounded"
            required
          />

          <input
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Password"
            type="password"
            className="p-3 border rounded"
            required
          />

          <button className="px-4 py-2 bg-indigo-600 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
