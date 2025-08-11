import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  X,
  Loader2,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // EmailJS configuration - তোমার EmailJS থেকে নেয়া আইডি গুলো বসাও
  const EMAILJS_SERVICE_ID = "service_sqxr7cj";
  const EMAILJS_TEMPLATE_ID = "template_lg13zop";
  const EMAILJS_PUBLIC_KEY = "tRBVY_VWuGZLwDQgj";

  // Real-time validation (form fields)
  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case "from_name":
        if (!value.trim()) {
          newErrors.from_name = "Name is required";
        } else if (value.trim().length < 2) {
          newErrors.from_name = "Name must be at least 2 characters";
        } else {
          delete newErrors.from_name;
        }
        break;

      case "from_email":
        if (!value.trim()) {
          newErrors.from_email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.from_email = "Please enter a valid email";
        } else {
          delete newErrors.from_email;
        }
        break;

      case "message":
        if (!value.trim()) {
          newErrors.message = "Message is required";
        } else if (value.trim().length < 10) {
          newErrors.message = "Message must be at least 10 characters";
        } else {
          delete newErrors.message;
        }
        break;
    }

    setErrors(newErrors);
    return !newErrors[fieldName];
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateForm = () => {
    if (!form.current) return false;
    const formElements = form.current.elements;

    const nameValid = validateField("from_name", formElements.from_name.value);
    const emailValid = validateField("from_email", formElements.from_email.value);
    const messageValid = validateField("message", formElements.message.value);

    setTouched({
      from_name: true,
      from_email: true,
      message: true,
    });

    return nameValid && emailValid && messageValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setIsLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
          setTouched({});
          setErrors({});
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setStatus("error");
        }
      )
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  const StatusMessage = () => {
    if (!status) return null;

    const messages = {
      success: {
        icon: <Check className="w-5 h-5" />,
        text: "Message sent successfully! Will reply soon",
        bgColor: "bg-green-50",
        textColor: "text-green-800",
        borderColor: "border-green-200",
      },
      error: {
        icon: <X className="w-5 h-5" />,
        text: "Please fill all fields correctly",
        bgColor: "bg-red-50",
        textColor: "text-red-800",
        borderColor: "border-red-200",
      },
    };

    const currentStatus = messages[status];

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`${currentStatus.bgColor} ${currentStatus.borderColor} ${currentStatus.textColor} border rounded-lg p-4 flex items-center gap-3 mb-6`}
      >
        {currentStatus.icon}
        <span className="font-medium">{currentStatus.text}</span>
      </motion.div>
    );
  };

  return (
    <section id="contact" className="bg-[#f5f5f7] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Feel free to reach out if you want to collaborate, ask questions, or
            just say hello!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: <Mail />,
              label: "Email",
              value: "abirhasan5208@gmail.com",
              action: () => window.open("mailto:abirhasan5208@gmail.com"),
            },
            {
              icon: <MessageCircle />,
              label: "WhatsApp",
              value: "+880 1639-448792",
              action: () => window.open("https://wa.me/8801639448792"),
            },
            {
              icon: <MapPin />,
              label: "Location",
              value: "Dhaka, Bangladesh",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 ${
                item.action ? "cursor-pointer hover:shadow-lg" : ""
              }`}
              onClick={item.action}
            >
              <div className="text-blue-600 text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-lg text-gray-900">{item.label}</h4>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <StatusMessage />

            <form ref={form} onSubmit={sendEmail} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter Your Name"
                    disabled={isLoading}
                    onBlur={handleBlur}
                    className={`w-full p-4 rounded-lg border ${
                      errors.from_name && touched.from_name
                        ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                    } bg-transparent focus:ring-2 transition-all duration-300 disabled:opacity-50`}
                  />
                  {errors.from_name && touched.from_name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-start gap-2 bg-red-50 p-2 rounded"
                    >
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{errors.from_name}</span>
                    </motion.p>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Enter Your Email"
                    disabled={isLoading}
                    onBlur={handleBlur}
                    className={`w-full p-4 rounded-lg border ${
                      errors.from_email && touched.from_email
                        ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                    } bg-transparent focus:ring-2 transition-all duration-300 disabled:opacity-50`}
                  />
                  {errors.from_email && touched.from_email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-start gap-2 bg-red-50 p-2 rounded"
                    >
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{errors.from_email}</span>
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  rows="6"
                  disabled={isLoading}
                  onBlur={handleBlur}
                  className={`w-full p-4 rounded-lg border ${
                    errors.message && touched.message
                      ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  } bg-transparent focus:ring-2 transition-all duration-300 disabled:opacity-50 resize-vertical`}
                ></textarea>
                {errors.message && touched.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2 flex items-start gap-2 bg-red-50 p-2 rounded"
                  >
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errors.message}</span>
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.05 } : {}}
                whileTap={!isLoading ? { scale: 0.97 } : {}}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Setup Instructions */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                📧 EmailJS Setup Required
              </h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p>
                  <strong>1.</strong> Create account at{" "}
                  <a href="https://emailjs.com" target="_blank" rel="noreferrer" className="underline">
                    emailjs.com
                  </a>
                </p>
                <p>
                  <strong>2.</strong> Create email service (Gmail/Outlook/etc)
                </p>
                <p>
                  <strong>3.</strong> Create email template with variables:
                  from_name, from_email, message, to_name
                </p>
                <p>
                  <strong>4.</strong> Replace the configuration values in the code:
                </p>
                <div className="bg-blue-100 p-3 rounded mt-2 font-mono text-xs">
                  <p>EMAILJS_SERVICE_ID = 'your_service_id'</p>
                  <p>EMAILJS_TEMPLATE_ID = 'your_template_id'</p>
                  <p>EMAILJS_PUBLIC_KEY = 'your_public_key'</p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
