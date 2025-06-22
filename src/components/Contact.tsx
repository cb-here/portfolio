import React, { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Sparkles,
  MessageCircle,
  User,
  AtSign,
} from "lucide-react";
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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* ... decorations unchanged ... */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
            <MessageCircle size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up delay-200">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-up delay-400">
            {/* Intro Card */}
            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Let's Connect
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "cbv934@gmail.com",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "India",
                  color: "from-purple-500 to-violet-500",
                },
              ].map((contact) => (
                <div
                  key={contact.title}
                  className="group relative flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/20 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  <div
                    className={`relative w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <contact.icon className="text-white" size={20} />
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {contact.title}
                    </p>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center space-x-2">
                <Sparkles size={18} className="text-blue-400" />
                <span>Follow Me</span>
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/cb-here",
                    color: "from-gray-700 to-gray-900",
                    hoverColor: "hover:from-gray-600 hover:to-gray-800",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/chandrabhushan-vishwakarma-323347352",
                    color: "from-blue-600 to-blue-800",
                    hoverColor: "hover:from-blue-500 hover:to-blue-700",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-14 h-14 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-2xl flex items-center justify-center transition-all duration-500 transform hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-2xl overflow-hidden`}>
                    <social.icon
                      size={22}
                      className="group-hover:scale-110 transition-transform duration-300 relative z-10"
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 animate-fade-in-up delay-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Send Message
                </h3>
                <p className="text-gray-600">Let's start a conversation</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                      <User size={16} />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group relative">
                    <label
                      htmlFor="email"
                      className=" text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                      <AtSign size={16} />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group relative">
                  <label
                    htmlFor="subject"
                    className=" text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                    <MessageCircle size={16} />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group relative">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                    <Mail size={16} />
                    <span>Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                    placeholder="Tell me about your project or just say hello!"></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-blue-500/25">
                  <Send
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
                {success === true && (
                  <p className="text-green-600 text-center mt-4">
                    Message sent successfully!
                  </p>
                )}
                {success === false && (
                  <p className="text-red-600 text-center mt-4">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
