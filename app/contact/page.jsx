"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To display success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate API call
    try {
      // In a real application, you would send formData to your backend here
      // Example: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      // const data = await response.json();
      // if (response.ok) {
      //   setStatus("Message sent successfully!");
      //   setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      // } else {
      //   setStatus(`Failed to send message: ${data.error || 'Unknown error'}`);
      // }

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // For demonstration, always show success
      setStatus("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-8">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full bg-gray-800/70 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 p-8 sm:p-10 lg:p-12"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a question, a project idea, or need support? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400 transition-all duration-200"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400 transition-all duration-200 appearance-none"
              >
                <option value="" disabled>Select a subject</option>
                <option value="Website Inquiry">Website Inquiry</option>
                <option value="Complaint">Complaint</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support Request">Support Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400 transition-all duration-200 resize-y"
                placeholder="Tell us more about your needs or question..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-center text-lg ${
                  status.includes("successfully") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}