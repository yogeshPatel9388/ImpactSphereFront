// src/pages/Dashboard.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [enrolled, setEnrolled] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchEnrollments = async () => {
      try {
        const res = await api.get("/api/me/enrollments");
        if (mounted) setEnrolled(res.data || []);
      } catch (err) {
        // ignore
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchEnrollments();
    return () => (mounted = false);
  }, []);

  return (
    <section className="container py-12">
      <h2 className="text-2xl">Welcome{user ? `, ${user.name}` : ""}</h2>

      <div className="mt-6">
        <h3 className="font-semibold">Enrolled Courses</h3>
        {loading ? (
          <div className="mt-4">Loading...</div>
        ) : (
          <ul className="mt-4 list-disc list-inside">
            {enrolled.length === 0 ? (
              <li>No enrollments yet</li>
            ) : (
              enrolled.map((c) => <li key={c._id || c.id}>{c.title}</li>)
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
