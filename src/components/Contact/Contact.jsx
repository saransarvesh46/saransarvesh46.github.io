import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');
    try {
      // Simulate form submission to backend/formspree/etc.
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const contactLinks = [
    { name: 'GitHub', href: 'https://github.com/saran887', icon: <FiGithub className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saransarvesh/', icon: <FiLinkedin className="w-5 h-5" /> },
    { name: 'LeetCode', href: 'https://leetcode.com/u/saransarvesh_51', icon: <SiLeetcode className="w-5 h-5" /> },
    { name: 'Email', href: 'mailto:saransarvesh213@gmail.com', icon: <FiMail className="w-5 h-5" /> },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="micro-label text-accent mb-4 block">Discussion</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Get In Touch
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-12 items-start">
          
          {/* Left Column: Coordinates */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-zinc-100">
              Connect Channels
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-body">
              Let&apos;s talk about Edge AI optimization, Deep Learning pipelines, or university research collaborations.
            </p>
            
            <div className="space-y-3 font-mono text-xs">
              <p className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300">
                <FiMail className="text-accent w-4 h-4" />
                <a href="mailto:saransarvesh213@gmail.com" className="hover:text-accent transition-colors">
                  saransarvesh213@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-[#0c0c14] border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent shadow-sm hover:shadow-md transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Accessible Form */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Status Banners */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm font-medium font-body"
                    >
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Thank you! Your message was submitted successfully.</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center gap-3 text-sm font-medium font-body"
                    >
                      <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>An error occurred. Please try reloading or mail me directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border transition-all duration-300 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/50 dark:bg-zinc-950/20 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 ${
                      errors.name ? 'border-rose-500/50' : 'border-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                  />
                  {errors.name && (
                    <span id="err-name" role="alert" className="text-xs text-rose-500 font-medium block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border transition-all duration-300 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/50 dark:bg-zinc-950/20 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 ${
                      errors.email ? 'border-rose-500/50' : 'border-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                  />
                  {errors.email && (
                    <span id="err-email" role="alert" className="text-xs text-rose-500 font-medium block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="form-subject" className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border transition-all duration-300 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/50 dark:bg-zinc-950/20 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 ${
                      errors.subject ? 'border-rose-500/50' : 'border-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                    aria-describedby={errors.subject ? 'err-subject' : undefined}
                  />
                  {errors.subject && (
                    <span id="err-subject" role="alert" className="text-xs text-rose-500 font-medium block">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border transition-all duration-300 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/50 dark:bg-zinc-950/20 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 resize-none ${
                      errors.message ? 'border-rose-500/50' : 'border-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                  />
                  {errors.message && (
                    <span id="err-message" role="alert" className="text-xs text-rose-500 font-medium block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold shadow-glow hover:bg-accent-hover disabled:bg-zinc-400 dark:disabled:bg-zinc-800 transition-all duration-300 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
