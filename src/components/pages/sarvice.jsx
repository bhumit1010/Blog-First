import React from "react";
import {
  FaBlog,
  FaPencilRuler,
  FaRocket,
  FaUserLock,
  FaPlug,
  FaServer,
} from "react-icons/fa";
import ScrollToTop from "../../fetures/scrollup";

const services = [
  {
    title: "Custom Blog Development",
    icon: <FaBlog className="text-2xl text-blue-400" />,
    description:
    "We build personalized blog platforms using React, Redux, Tailwind, and modern tech stacks tailored to your needs.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler className="text-2xl text-pink-400" />,
    description:
      "Our team designs clean, responsive, and animated user interfaces using Tailwind CSS and Framer Motion.",
    },
    {
      title: "Performance Optimization",
      icon: <FaRocket className="text-2xl text-green-400" />,
      description:
      "We ensure your app loads fast, runs efficiently, and performs well on all devices with optimized code.",
    },
    {
      title: "Auth Integration",
    icon: <FaUserLock className="text-2xl text-yellow-400" />,
    description:
    "Secure user authentication with Redux state management, routing guards, and login/signup flows.",
  },
  {
    title: "API Integration",
    icon: <FaPlug className="text-2xl text-purple-400" />,
    description:
    "Seamlessly connect your frontend to any backend or headless CMS like Supabase, Firebase, or Express.",
  },
  {
    title: "Deployment & Hosting",
    icon: <FaServer className="text-2xl text-red-400" />,
    description:
    "Get your React app deployed on Netlify, Vercel, or your custom server with GitHub CI/CD workflows.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen mt-10 text-white px-6 py-16">
        <ScrollToTop/>
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-white/70 text-lg">
          We offer a wide range of services to build, design, and optimize your web experience.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {service.icon}
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
            <p className="text-sm text-white/70">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
