import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle2, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { personal } from "../data/portfolioData";
import Reveal from "../components/Reveal";

// TODO: create a free account at emailjs.com and drop your own
// service/template/public keys here (or in a .env file) before
// the form can actually send email.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const socials = [
  { icon: FaGithub, href: personal.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: personal.instagram, label: "Instagram" },
  { icon: FaWhatsapp, href: personal.whatsapp, label: "WhatsApp" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toast, setToast] = useState(null);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) {
        throw new Error("EmailJS is not configured yet.");
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      showToast("success", "Message sent — thanks for reaching out!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      showToast(
        "error",
        "Couldn't send right now — email me directly instead."
      );
    } finally {
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl bg-white/5 border px-4 py-3 text-sm placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors ${
      errors[field] ? "border-red-500/60" : "border-white/10 focus:border-primary/40"
    }`;

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-sm text-secondary mb-3">07 · Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">build something</span>
          </h2>
          <p className="mt-4 text-text-muted">
            Have a role, project, or question in mind? My inbox is open.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <Reveal delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">Email</p>
              <a href={`mailto:${personal.email}`} className="mt-2 block text-sm hover:text-primary transition-colors">
                {personal.email}
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">Phone</p>
              <p className="mt-2 text-sm">{personal.phone}</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">Location</p>
              <p className="mt-2 text-sm">{personal.location}</p>
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-11 w-11 grid place-items-center rounded-xl glass text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-text-muted">Name</label>
                  <input
                    className={`mt-1.5 ${inputClass("name")}`}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-mono text-text-muted">Email</label>
                  <input
                    className={`mt-1.5 ${inputClass("email")}`}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-text-muted">Subject</label>
                <input
                  className={`mt-1.5 ${inputClass("subject")}`}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label className="text-xs font-mono text-text-muted">Message</label>
                <textarea
                  rows={5}
                  className={`mt-1.5 resize-none ${inputClass("message")}`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a bit about the opportunity or project…"
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
              >
                <Send size={15} />
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 glass rounded-full px-5 py-3 flex items-center gap-2 text-sm shadow-xl"
          >
            {toast.type === "success" ? (
              <CheckCircle2 size={16} className="text-secondary" />
            ) : (
              <XCircle size={16} className="text-red-400" />
            )}
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
