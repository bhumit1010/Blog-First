import React, { useState } from "react";
import ScrollToTop from "../../fetures/scrollup";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add emailjs, supabase, or backend API here
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-[80vh] mt-20 text-white px-6 py-16">
<ScrollToTop/>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-white/70">
            Have a question or want to work together? Fill out the form or reach out directly.
          </p>
          <div className="space-y-3 text-white/80 text-sm">
            <p><strong>Email:</strong> hello@blogfirst.com</p>
            <p><strong>instagram:</strong><a href="">Bhumit.Sachaniya</a></p>
            <p><strong>Location:</strong> Rajkot, Gujarat, India</p>
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:ring focus:ring-blue-400/40"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:ring focus:ring-blue-400/40"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white resize-none focus:outline-none focus:ring focus:ring-blue-400/40"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
