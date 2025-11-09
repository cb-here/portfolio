import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import Input from "./common/Input";
import Textarea from "./common/Textarea";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";

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
    <>
      <div className="space-y-2">
        <h1 className="text-title font-semibold text-black tracking-tight">
          Get In Touch
        </h1>
        <p className="text-subtitle text-gray-500 font-medium mb-3">
          Have a project in mind? Let's talk.
        </p>
      </div>
      <div className="h-px bg-gray-200" />
      <p className="text-body text-gray-600 leading-relaxed mb-4 mt-4">
        Let's build something amazing together
      </p>
      <div className="mb-6">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-4 max-w-[450px]">
          <form className="space-y-3" onSubmit={handleSubmit}>
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
            <div className="pt-1">
              <button
                type="submit"
                disabled={loading}
                className="group w-full inline-flex items-center justify-center gap-2 font-sans font-light min-w-[44px] min-h-[44px] rounded-full transition-[colors,box-shadow,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none select-none hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)] active:shadow-[0_1px_2px_rgba(0,0,0,0.12)] active:scale-[0.98] will-change-transform bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-400 px-3 py-1 text-sm disabled:opacity-50 cursor-pointer subpixel-antialiased"
              >
                {loading ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 className="size-4 animate-spin" />
                  </>
                ) : success === true ? (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle2 className="size-4" />
                  </>
                ) : success === false ? (
                  <>
                    <span>Failed to Send</span>
                    <XCircle className="size-4" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="size-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 " />
                  </>
                )}
              </button>
            </div>
          </form>
          {success === true && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-900">
                  Message sent successfully!
                </p>
                <p className="text-xs text-green-700 mt-0.5">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          )}
          {success === false && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <XCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-900">
                  Failed to send message
                </p>
                <p className="text-xs text-red-700 mt-0.5">
                  Please try again or contact me directly via email.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-heading font-medium text-black">
          Other Ways to Reach Me
        </h2>
        <ul className="space-y-2 list-disc ml-6 mb-4">
          <li className="text-body text-gray-600">
            Email:{" "}
            <a
              href="mailto:cbv934@gmail.com"
              className="text-black hover:underline"
            >
              cbv934@gmail.com
            </a>
          </li>
          <li className="text-body text-gray-600">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/chandrabhushan-vishwakarma-323347352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              /chandrabhushan
            </a>
          </li>
          <li className="text-body text-gray-600">
            GitHub:{" "}
            <a
              href="https://github.com/cb-here"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              /cb-here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
