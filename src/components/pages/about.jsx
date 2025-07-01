import React from "react";
import ScrollToTop from "../../fetures/scrollup";
import {
  FaReact,
  FaMobileAlt,
  FaMagic,
  FaCode,
  FaUserShield,
  FaCogs,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen mt-10 text-white py-16 px-6">
<ScrollToTop/>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Blog-first</h1>
        <p className="text-white/70 text-lg">
          Blog-first is a modern, fast, and responsive blog platform built with
          React, Redux Toolkit, Tailwind CSS, and Framer Motion.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <FaReact className="text-blue-400 text-2xl" />
            <h2 className="text-xl font-semibold">Modern Tech Stack</h2>
          </div>
          <p className="text-sm text-white/70">
            Built using React, Redux Toolkit, and Tailwind for speed and
            maintainability.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <FaMobileAlt className="text-green-400 text-2xl" />
            <h2 className="text-xl font-semibold">Responsive Design</h2>
          </div>
          <p className="text-sm text-white/70">
            Fully responsive UI that works across all screen sizes — from mobile
            to desktop.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <FaMagic className="text-pink-400 text-2xl" />
            <h2 className="text-xl font-semibold">Interactive Animations</h2>
          </div>
          <p className="text-sm text-white/70">
            Smooth animations and transitions powered by Framer Motion.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <FaCode className="text-yellow-400 text-2xl" />
            <h2 className="text-xl font-semibold">Clean Code</h2>
          </div>
          <p className="text-sm text-white/70">
            Component-based structure with clean and scalable architecture.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <FaUserShield className="text-red-400 text-2xl" />
            <h2 className="text-xl font-semibold">Authentication Ready</h2>
          </div>
          <p className="text-sm text-white/70">
            Includes login and protected routes using Redux and conditional
            routing.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-3">
            <FaCogs className="text-purple-400 text-2xl" />
            <h2 className="text-xl font-semibold">Customizable</h2>
          </div>
          <p className="text-sm text-white/70">
            Easy to extend with your own features: posts, categories, comments,
            and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
