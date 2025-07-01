import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../fetures/authslice";
import { Navigate, useNavigate } from "react-router-dom";
import Authservice from "../../appwrite/auth";


const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.status);

  const [form, setForm] = useState({email: "", password: "" , name: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Newuser= await Authservice.createacc(form.email , form.password, form.name)
    console.log(Newuser)

    if (Newuser) {
      dispatch(login(Newuser));
      await Authservice.login(form.email, form.password)

      navigate("/")
    }
    else{
      dispatch(logout())
      await Authservice.logout()
    }
  };
  const navigate = useNavigate();


  if (auth) return <Navigate to="/" />;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-aurora">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-white/70"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-white/70"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-white/70"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 rounded-lg font-semibold bg-gray-900 hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white/70">
          Already have an account?{" "}
          <span  onClick={() => navigate("/login")} className="underline cursor-pointer text-gray-200">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
