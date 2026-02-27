import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MessageCircle, MapPin, Clock, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would POST to a backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="contact-hero__title gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="contact-hero__sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have a question, need a custom quote, or want to discuss a project?
            We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.form
              className="contact-form glass-card"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="contact-form__title">Send Us a Message</h3>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="discord-scraping">Discord Scraping</option>
                  <option value="n8n-automation">n8n Automation</option>
                  <option value="openclawd-setup">OpenClawd Setup</option>
                  <option value="vps-linux-fixes">VPS & Linux Fixes</option>
                  <option value="custom">Custom / Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project or question..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                {submitted ? '✓ Message Sent!' : <>Send Message <Send size={16} /></>}
              </button>
            </motion.form>

            {/* Info Cards */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="contact-info__card glass-card">
                <Mail size={22} />
                <div>
                  <h4>Email Us</h4>
                  <p>contact@rapidfreelancin.com</p>
                </div>
              </div>

              <div className="contact-info__card glass-card">
                <MessageCircle size={22} />
                <div>
                  <h4>Discord</h4>
                  <p>Join our support server</p>
                  <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="contact-info__link">
                    Open Discord <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              <div className="contact-info__card glass-card">
                <Clock size={22} />
                <div>
                  <h4>Response Time</h4>
                  <p>Usually within 24 hours</p>
                </div>
              </div>

              <div className="contact-info__card glass-card">
                <MapPin size={22} />
                <div>
                  <h4>Available</h4>
                  <p>Worldwide, remote-first</p>
                </div>
              </div>

              <div className="contact-info__fiverr glass-card">
                <p>Prefer Fiverr?</p>
                <a
                  href="https://fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Visit Our Fiverr Profile <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero {
          padding: 10rem 0 2rem;
          text-align: center;
        }
        .contact-hero__title {
          font-size: var(--font-size-6xl);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin: 0.75rem 0;
        }
        .contact-hero__sub {
          font-size: var(--font-size-lg);
          color: var(--color-gray-400);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        .contact-form {
          padding: 2.5rem;
        }
        .contact-form__title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-gray-300);
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: var(--font-size-sm);
          font-family: var(--font-family);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--color-accent-border);
          border-radius: var(--radius-md);
          color: var(--color-white);
          transition: border-color var(--transition-fast);
          outline: none;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--color-gray-500);
          background: rgba(255, 255, 255, 0.06);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--color-gray-600);
        }
        .form-group select {
          appearance: none;
          cursor: pointer;
        }
        .form-group select option {
          background: var(--color-gray-900);
          color: var(--color-white);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-info__card {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .contact-info__card svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--color-gray-400);
        }
        .contact-info__card h4 {
          font-size: var(--font-size-sm);
          font-weight: 600;
          margin-bottom: 0.15rem;
        }
        .contact-info__card p {
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
        }
        .contact-info__link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: var(--font-size-xs);
          color: var(--color-white);
          margin-top: 0.35rem;
          font-weight: 500;
        }
        .contact-info__fiverr {
          padding: 1.5rem;
          text-align: center;
        }
        .contact-info__fiverr p {
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
          margin-bottom: 0.75rem;
        }

        @media (max-width: 768px) {
          .contact-hero__title {
            font-size: var(--font-size-4xl);
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}
