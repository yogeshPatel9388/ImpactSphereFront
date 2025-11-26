import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import api from "../api/axios";
import { motion } from "framer-motion";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let mounted = true;
    api
      .get("/api/courses")
      .then((res) => {
        if (mounted) setCourses(res.data || []);
      })
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  const handleEnroll = (course) => {
    // handle enrollment UI (calls protected API) - simplified
    alert(`Enroll clicked for ${course.title}`);
  };

  return (
    <div>
      <Hero />

      <section className="container py-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Course Highlights</h2>
          <a href="/courses" className="text-indigo-600">
            View all
          </a>
        </div>

        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {courses.slice(0, 3).map((c) => (
            <CourseCard
              key={c._id || c.id}
              course={c}
              onEnroll={handleEnroll}
            />
          ))}
        </motion.div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container">
          <h3 className="text-xl font-semibold">What students say</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded bg-white">
              "Impact Sphere helped me speak confidently" — Riya
            </div>
            <div className="p-4 border rounded bg-white">
              "Small batches, personalised feedback" — Akash
            </div>
            <div className="p-4 border rounded bg-white">
              "Practical tasks made the difference" — Priya
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
