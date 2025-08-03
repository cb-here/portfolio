import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = "service_spoxrlu";
      const templateId = "template_ojb0qir";
      const publicKey = "JDXZ7z-6V3BOkne6x";

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error: " + error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => setSuccess(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };


  return (
    <div
      id="contact"
      onMouseMove={handleMouseMove}
      className="mt-4 sm:mt-6 relative z-10 flex flex-col md:flex-row w-full backdrop-blur-md rounded-2xl p-6 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 group">
      <div
        className="absolute inset-0 rounded-2xl opacity-100 transition duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
          maskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
        }}></div>

      <div className="w-full md:w-[35%] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <MessageCircle size={40} className="text-purple-500 mb-4" />
          </div>
          <h3 className="text-2xl font-bold text-white">Let’s Connect</h3>
          <p className="text-sm text-gray-400 mt-2">
            Feel free to drop a message!
          </p>
        </div>
      </div>

      <div className="hidden md:block w-px bg-white/10 mx-4"></div>

      <div className="w-full md:w-[65%] flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full bg-white/10 text-sm text-white placeholder-white/60 px-3 py-2 rounded-lg border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="text-xs text-white mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-white/10 text-sm text-white placeholder-white/60 px-3 py-2 rounded-lg  border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-white mb-1 block">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="w-full bg-white/10 text-sm text-white placeholder-white/60 px-3 py-2 rounded-lg  border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-xs text-white mb-1 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Your message..."
              className="w-full bg-white/10 text-sm text-white placeholder-white/60 px-3 py-2 rounded-lg  border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success === true && (
            <p className="text-green-400 text-center mt-2">
              Message sent successfully!
            </p>
          )}
          {success === false && (
            <p className="text-red-400 text-center mt-2">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
