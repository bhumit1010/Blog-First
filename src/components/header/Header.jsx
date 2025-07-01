import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { logout } from "../../fetures/authslice";
import ShinyText from "../../../bits/ShinyText/ShinyText";
import Authservice from "../../appwrite/auth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl backdrop-blur-md  border border-gray-700 rounded-full shadow-lg px-6 py-3 flex items-center justify-between text-white text-sm font-medium"
      >
        {/* Logo */}
        <div className="text-xl font-bold">
          <NavLink to="/">
            <ShinyText
              text="Blog-first"
              disabled={false}
              speed={5}
              className="text-gray-300"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["/", "/about", "/services", "/contact"].map((path, idx) => {
            const labels = ["Home", "About", "Services", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `transition w-[70px] text-center py-2 rounded-4xl font-semibold ${
                    isActive
                      ? "text-white bg-gray-700"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block">
          {auth.status ? (
            <button
              onClick={async () => {
                await Authservice.logout();
                dispatch(logout());
              }}
              className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full"
            >
              Login
            </button>
          )}
        </div>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 1, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[85px] left-1/2 -translate-x-1/2 w-[95%] max-w-4xl  backdrop-blur-md border border-gray-700 rounded-xl px-6 py-4 shadow-md flex flex-col text-white md:hidden text-center z-50"
          >
            {["/", "/about", "/services", "/contact"].map((path, idx) => {
              const labels = ["Home", "About", "Services", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-2 border-b border-gray-600 hover:bg-gray-700 hover:scale-105 transition-all duration-200 rounded-md ${
                      isActive ? "text-white font-semibold" : "text-gray-400"
                    }`
                  }
                >
                  {labels[idx]}
                </NavLink>
              );
            })}

            {/* Mobile Auth Button */}
            {auth.status ? (
              <button
                onClick={async () => {
                  await Authservice.logout();
                  dispatch(logout());
                  setIsOpen(false);
                }}
                className="py-2 mt-1  hover:scale-105 transition-all duration-200 rounded-md"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="py-2 mt-1 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-200 rounded-md"
              >
                Login
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
