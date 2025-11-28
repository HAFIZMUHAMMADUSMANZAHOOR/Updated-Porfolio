import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../context/ThemeProvider';

export default function Contact() {
  const { mode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="py-12 px-4 max-w-6xl mx-auto">

        {/* CONTACT CARD */}
        <div className={`p-8 shadow-lg rounded-lg ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <h3 className="text-2xl font-semibold mb-6 text-center">Contact Me </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`px-4 py-3 rounded border w-full outline-none transition 
                ${mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} 
                focus:ring-2 focus:ring-green-500`}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`px-4 py-3 rounded border w-full outline-none transition 
                ${mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} 
                focus:ring-2 focus:ring-green-500`}
              />
            </div>

            {/* Service Select */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`px-4 py-3 rounded border w-full outline-none transition 
              ${mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} 
              focus:ring-2 focus:ring-green-500`}
            >
              <option value="">Select a service package...</option>
              <option>Website Design</option>
              <option>Web App Development</option>
              <option>Mobile App UI/UX</option>
              <option>Backend API Integration</option>
            </select>

            {/* Message Box */}
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className={`px-4 py-3 rounded border w-full outline-none transition resize-none
              ${mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} 
              focus:ring-2 focus:ring-green-500`}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded font-semibold shadow"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}
