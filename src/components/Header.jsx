import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Impact Sphere
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              {user.role === "admin" && <Link to="/admin">Admin</Link>}
              <button onClick={logout} className="text-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link
                to="/register"
                className="px-3 py-1 bg-indigo-600 text-white rounded"
              >
                Join
              </Link>
            </>
          )}
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            // X (close) icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 6h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 12h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t shadow-sm transition-max-h duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <Link to="/courses" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
              {user.role === "admin" && (
                <Link to="/admin" onClick={() => setOpen(false)}>
                  Admin
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="px-3 py-1 bg-indigo-600 text-white rounded text-center"
              >
                Join
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
