import React from "react";

export default function About() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">About Impact Sphere</h2>
      <p className="mt-4 text-gray-700">
        Our mission is to empower students to speak English confidently through
        practice-driven learning, small classes and friendly mentors.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold">Mission</h4>
          <p className="mt-2 text-sm text-gray-600">
            To make spoken English accessible for everyone and boost career,
            academic and social confidence.
          </p>
        </div>
        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold">Vision</h4>
          <p className="mt-2 text-sm text-gray-600">
            Become the most trusted English speaking institute for practical
            fluency.
          </p>
        </div>
      </div>
    </section>
  );
}
