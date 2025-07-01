import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../fetures/authslice";
import { Navigate, useNavigate } from "react-router-dom";
import Authservice from "../../appwrite/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./bg.css"
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.status);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const session = await Authservice.login(form.email, form.password);
      if (session) {
        dispatch(login(session));
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      dispatch(logout());
      await Authservice.logout();
      setForm({ email: "", password: "" });
    }
  };

  if (auth) return <Navigate to="/" />;

  return (
    <div className="min-h-screen backdrop-blur-lg w-full flex items-center justify-center px-4 bg-aurora">
      <div className="w-full max-w-md bg-white/5  border border-gray-400/40 rounded-2xl shadow-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-white/70"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-white/70 pr-12"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white/80 hover:text-white"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold bg-gray-800 hover:bg-gray-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white/70">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="underline cursor-pointer text-gray-200"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
