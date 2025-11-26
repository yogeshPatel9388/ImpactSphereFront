import React, { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/contact", form, {
        headers: { "x-csrf-token": getCsrfToken() },
      });
      toast.success("Message sent — we will contact you soon");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  function getCsrfToken() {
    const match = document.cookie.match(new RegExp("(^| )csrfToken=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : "";
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl w-full">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          className="p-3 border rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="p-3 border rounded"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (Whatsapp)"
          className="p-3 border rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="p-3 border rounded h-32"
          required
        />

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
