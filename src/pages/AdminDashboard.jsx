// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const [uRes, cRes, mRes] = await Promise.all([
          api.get("/api/admin/users"),
          api.get("/api/courses"),
          api.get("/api/admin/messages"),
        ]);
        if (mounted) {
          setUsers(uRes.data || []);
          setCourses(cRes.data || []);
          setMessages(mRes.data || []);
        }
      } catch (err) {
        toast.error("Failed to load admin data");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => (mounted = false);
  }, []);

  const deleteCourse = async (id) => {
    if (!confirm("Delete course?")) return;
    try {
      await api.delete(`/api/admin/courses/${id}`);
      setCourses((cs) => cs.filter((c) => (c._id || c.id) !== id));
      toast.success("Deleted");
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  if (loading)
    return <div className="p-8 text-center">Loading admin data...</div>;

  return (
    <section className="container py-12">
      <h2 className="text-2xl">Admin Dashboard</h2>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-4 border rounded bg-white">
          <h4 className="font-semibold">Users</h4>
          <ul className="mt-2 text-sm">
            {users.map((u) => (
              <li key={u._id || u.id}>
                {u.name} — {u.email}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border rounded bg-white">
          <h4 className="font-semibold">Courses</h4>
          <ul className="mt-2 text-sm">
            {courses.map((c) => (
              <li
                key={c._id || c.id}
                className="flex justify-between items-center"
              >
                <span>{c.title}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => deleteCourse(c._id || c.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border rounded bg-white">
          <h4 className="font-semibold">Messages</h4>
          <ul className="mt-2 text-sm">
            {messages.map((m) => (
              <li key={m._id || m.id}>
                <strong>{m.name}:</strong> {m.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
