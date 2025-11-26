import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-12">
      <div className="container text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Impact Sphere. All rights reserved.
      </div>
      <div className="container text-center text-sm text-gray-600">
        Made with ❤️ by YOGI
      </div>
    </footer>
  );
}
