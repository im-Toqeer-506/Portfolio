import React, { useState } from "react";
import { Mail, Github, Code, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      emailjs.init("xrpQ66J81GhRkIOPR");

      const result = await emailjs.send("service_4pjs2w1", "template_8mh7wwt", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "muhammadtoqeerzia18@gmail.com",
      });

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build your next MERN stack application? Let's discuss your
            project!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always excited to work on new MERN stack projects and help
              bring your ideas to life. Whether you need a full-stack web
              application or want to discuss your project requirements, feel
              free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-100">Email</p>
                  <p className="text-emerald-400">
                    muhammadtoqeerzia18@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Github size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-100">GitHub</p>
                  <p className="text-emerald-400">github.com/im-Toqeer-506</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Code size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-100">LeetCode</p>
                  <p className="text-emerald-400">leetcode.com/u/im_toqeer</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/im-Toqeer-506"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/m-toqeer-zia-202845297/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/im_toqeer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Code size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-emerald-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-500/20 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-500/20 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-500/20 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter Some Valueable text"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 px-4 py-3 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-400/40 text-red-400 px-4 py-3 rounded-lg">
                    Failed to send message. Please try again or contact me
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
