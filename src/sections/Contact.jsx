import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Section from "../components/Section";
import { personal } from "../data/portfolioData";

// EmailJS is optional. Without environment keys, the form opens the
// visitor's email client with everything pre-filled.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

const emailjsReady =
  Boolean(EMAILJS_SERVICE_ID) &&
  Boolean(EMAILJS_TEMPLATE_ID) &&
  Boolean(EMAILJS_PUBLIC_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const socials = [
  { icon: FaGithub, href: personal.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: personal.whatsapp, label: "WhatsApp" },
];

const EMPTY_FORM = {
  name: "",
  email: "",
  message: "",
  // Honeypot: hidden from humans, irresistible to bots.
  company: "",
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toast, setToast] = useState(null);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!EMAIL_RE.test(form.email.trim()))
      next.email = "That email doesn't look right.";
    if (form.message.trim().length < 10)
      next.message = "A little more detail, please.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot tripped — a bot filled the hidden field. Bail out quietly
    // with a success message so the bot doesn't learn it was blocked.
    if (form.company.trim()) {
      setForm(EMPTY_FORM);
      showToast("success", "Message sent.");
      return;
    }

    if (!validate()) return;

    setStatus("sending");
    try {
      if (!emailjsReady) {
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
        const body = encodeURIComponent(
          `${form.message}\n\n— ${form.name} (${form.email})`,
        );
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        showToast("success", "Opening your email app — hit send there.");
        setForm(EMPTY_FORM);
        setErrors({});
        return;
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `Portfolio enquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString("en-GB", {
            dateStyle: "full",
            timeStyle: "short",
          }),
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          to_email: personal.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      showToast("success", "Message sent. I'll get back to you soon.");
      setForm(EMPTY_FORM);
      setErrors({});
    } catch (err) {
      console.error("Contact form failed:", err);
      setStatus("error");
      showToast("error", "That didn't go through — try emailing me directly.");
    } finally {
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const inputClass = (field) =>
    `w-full border-b bg-transparent px-0 py-2.5 text-[15px] placeholder:text-faint focus:outline-none transition-colors ${
      errors[field] ? "border-red-500/60" : "border-border focus:border-accent"
    }`;

  const buttonLabel = {
    idle: "Send message",
    sending: "Sending…",
    success: "Sent",
    error: "Try again",
  }[status];

  const fieldProps = (field) => ({
    id: `contact-${field}`,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  const FieldError = ({ field }) =>
    errors[field] ? (
      <p
        id={`contact-${field}-error`}
        role="alert"
        className="mt-1.5 text-xs text-red-400"
      >
        {errors[field]}
      </p>
    ) : null;

  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Say hello"
      intro="I'm open to full-time roles and to freelance work I can do well. Tell me what you're building and I'll reply as soon as I can."
    >
      <div className="grid gap-x-14 gap-y-14 sm:grid-cols-[1fr_1.6fr]">
        <div className="space-y-7 text-sm">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Email
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="u-link mt-1 inline-block [overflow-wrap:anywhere] transition-colors hover:text-accent"
            >
              {personal.email}
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Phone
            </p>
            <a
              href={`tel:${personal.phone.replace(/[^+\d]/g, "")}`}
              className="u-link mt-1 inline-block transition-colors hover:text-accent"
            >
              {personal.phone}
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Elsewhere
            </p>
            <div className="mt-2 flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="min-w-0 max-w-xl space-y-7" noValidate>
          {/* Honeypot — visually hidden, skipped by keyboard/screen readers */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-company">Company (leave empty)</label>
            <input
              id="contact-company"
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className={`mt-1 ${inputClass("name")}`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                {...fieldProps("name")}
              />
              <FieldError field="name" />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={`mt-1 ${inputClass("email")}`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                {...fieldProps("email")}
              />
              <FieldError field="email" />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint"
            >
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="What are you working on?"
              className={`mt-1 resize-none ${inputClass("message")}`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              {...fieldProps("message")}
            />
            <FieldError field="message" />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            aria-live="polite"
            className="group inline-flex items-center gap-2 text-sm text-accent disabled:opacity-50"
          >
            <span className="u-link">{buttonLabel}</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border border-border bg-surface px-4 py-2.5 text-sm shadow-lg"
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
