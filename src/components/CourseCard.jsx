import React from "react";

export default function CourseCard({ course, onEnroll }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{course.title}</h3>
      <p className="text-sm mt-2 text-gray-600">{course.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">{course.duration}</span>
        <button
          onClick={() => onEnroll(course)}
          className="px-3 py-1 bg-indigo-600 text-white rounded"
        >
          Enroll
        </button>
      </div>
    </div>
  );
}
