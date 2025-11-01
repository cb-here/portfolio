import { MapPin } from "lucide-react";
import Input from "./common/Input";
import Textarea from "./common/Textarea";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccess(null);

    try {
      const serviceId = "service_spoxrlu";
      const templateId = "template_ojb0qir";
      const publicKey = "JDXZ7z-6V3BOkne6x";

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
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
    <section id="contact" className="w-full py-12 border-t border-grey">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg mb-2 shiny-text">Let's talk</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-white mb-6">
          Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white-icon">
            <p className="mb-4 text-lg">
              Have a question or a project in mind? Feel free to reach out.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-white-icon" />
              <span className="shiny-text text-lg">India, Mumbai</span>
            </div>
          </div>
          <div className="-mt-6">
            <form
              id="contact-form"
              className="flex flex-col"
              onSubmit={handleSubmit}
            >
              <Input
                label="Name"
                name="name"
                placeholder="Enter your name"
                required
                fullWidth
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                disabled={loading}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                fullWidth
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                disabled={loading}
              />
              <Textarea
                label="Message"
                name="message"
                placeholder="Write your message here..."
                rows={6}
                required
                fullWidth
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 bg-white-icon-tr text-white rounded-lg transition-all border border-white-icon-tr hover:opacity-100 hover:bg-white-icon-tr mt-4 ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
            {success === true && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
            {success === false && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <p className="text-red-400">
                  Failed to send message. Please try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
