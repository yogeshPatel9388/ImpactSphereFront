import React, { useEffect, useState } from "react";
import api from "../api/axios";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api
      .get("/api/courses")
      .then((res) => setCourses(res.data || []))
      .catch(() => {});
  }, []);

// useEffect(() => {
//   setCourses([
//     {
//       _id: "1",
//       title: "Spoken English",
//       description: "Improve your daily communication skills.",
//       duration: "4 weeks",
//     },
//     {
//       _id: "2",
//       title: "IELTS Preparation",
//       description: "Crack IELTS with confidence.",
//       duration: "6 weeks",
//     },
//   ]);
// }, []);

  const handleEnroll = (course) => {
    // Post to enroll endpoint; requires auth
    alert("Please login to enroll");
  };

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">All Courses</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard key={c._id || c.id} course={c} onEnroll={handleEnroll} />
        ))}
      </div>
    </section>
  );
}
