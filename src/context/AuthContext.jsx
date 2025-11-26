import React, { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try fetch current user via secure cookie
    const fetchMe = async () => {
      try {
        const { data } = await api.get("/api/auth/me");
        setUser(data.user || null);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  const login = async (creds) => {
    const { data } = await api.post("/api/auth/login", creds);
    setUser(data.user);
    return data;
  };

  const register = async (payload) => {
    const { data } = await api.post("/api/auth/register", payload);
    setUser(data.user);
    return data;
  };

  const logout = async () => {
    await api.post("/api/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
