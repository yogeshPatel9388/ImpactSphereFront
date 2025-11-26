import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="container text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Speak English with Confidence — Join Impact Sphere.
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Practical speaking practice, motivated teachers, and small batches to
          build your fluency.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <Link
            to="/register"
            className="px-6 py-3 bg-white text-indigo-700 rounded font-semibold"
          >
            Join Now
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-white rounded">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
