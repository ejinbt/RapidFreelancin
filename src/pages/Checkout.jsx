import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  CreditCard,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Check,
  Bot,
  Workflow,
  Terminal,
  Server,
} from 'lucide-react'

const serviceOptions = [
  { id: 'discord-scraping', icon: Bot, name: 'Discord Scraping', tiers: [
    { name: 'Basic', price: 25 },
    { name: 'Standard', price: 50 },
    { name: 'Premium', price: 100 },
  ]},
  { id: 'n8n-automation', icon: Workflow, name: 'n8n Automation', tiers: [
    { name: 'Basic', price: 40 },
    { name: 'Standard', price: 80 },
    { name: 'Premium', price: 150 },
  ]},
  { id: 'openclawd-setup', icon: Terminal, name: 'OpenClawd Setup', tiers: [
    { name: 'Basic', price: 50 },
    { name: 'Standard', price: 100 },
    { name: 'Premium', price: 200 },
  ]},
  { id: 'vps-linux-fixes', icon: Server, name: 'VPS & Linux Fixes', tiers: [
    { name: 'Basic', price: 30 },
    { name: 'Standard', price: 60 },
    { name: 'Premium', price: 120 },
  ]},
]

export default function Checkout() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedTier, setSelectedTier] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo: In production, this would redirect to Stripe Checkout
    setSubmitted(true)
  }

  const selectedServiceData = serviceOptions.find(s => s.id === selectedService)
  const selectedTierData = selectedServiceData?.tiers.find(t => t.name === selectedTier)

  if (submitted) {
    return (
      <div className="checkout-page">
        <section className="checkout-success">
          <div className="container">
            <motion.div
              className="checkout-success__inner glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="checkout-success__icon">
                <Check size={40} />
              </div>
              <h2>Order Submitted!</h2>
              <p>
                Thank you, {form.name}! Your order for <strong>{selectedServiceData?.name}</strong> ({selectedTier}) has been received.
                We'll contact you at <strong>{form.email}</strong> within 24 hours.
              </p>
              <p className="checkout-success__id">
                Order ID: <strong>RF-{Date.now().toString().slice(-7)}</strong>
              </p>
              <div className="checkout-success__actions">
                <Link to="/track" className="btn btn-primary">
                  Track Your Order <ArrowRight size={16} />
                </Link>
                <Link to="/" className="btn btn-secondary">
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <style>{checkoutStyles}</style>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <section className="checkout-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CreditCard size={14} /> Checkout
          </motion.span>
          <motion.h1
            className="checkout-hero__title gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Place Your Order
          </motion.h1>
          <motion.p
            className="checkout-hero__sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Select a service, choose your plan, and get started.
            Zero Fiverr commission when you order directly.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="checkout-grid">
            {/* Left: Service Selection */}
            <motion.div
              className="checkout-config"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Step 1: Service */}
              <div className="checkout-step">
                <div className="checkout-step__header">
                  <span className="checkout-step__num">1</span>
                  <h3>Choose Service</h3>
                </div>
                <div className="checkout-step__options">
                  {serviceOptions.map(svc => {
                    const Icon = svc.icon
                    return (
                      <button
                        key={svc.id}
                        className={`checkout-option glass-card ${selectedService === svc.id ? 'checkout-option--selected' : ''}`}
                        onClick={() => { setSelectedService(svc.id); setSelectedTier(null) }}
                      >
                        <Icon size={20} />
                        <span>{svc.name}</span>
                        {selectedService === svc.id && <Check size={16} className="checkout-option__check" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step 2: Tier */}
              {selectedServiceData && (
                <motion.div
                  className="checkout-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="checkout-step__header">
                    <span className="checkout-step__num">2</span>
                    <h3>Select Plan</h3>
                  </div>
                  <div className="checkout-step__tiers">
                    {selectedServiceData.tiers.map(tier => (
                      <button
                        key={tier.name}
                        className={`checkout-tier glass-card ${selectedTier === tier.name ? 'checkout-tier--selected' : ''}`}
                        onClick={() => setSelectedTier(tier.name)}
                      >
                        <span className="checkout-tier__name">{tier.name}</span>
                        <span className="checkout-tier__price">${tier.price}</span>
                        {selectedTier === tier.name && <Check size={14} className="checkout-option__check" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Details */}
              {selectedTier && (
                <motion.div
                  className="checkout-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="checkout-step__header">
                    <span className="checkout-step__num">3</span>
                    <h3>Your Details</h3>
                  </div>
                  <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="checkout-name">Full Name</label>
                      <input
                        id="checkout-name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-email">Email</label>
                      <input
                        id="checkout-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-details">Project Details</label>
                      <textarea
                        id="checkout-details"
                        name="details"
                        placeholder="Describe what you need..."
                        rows={4}
                        value={form.details}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                      <CreditCard size={18} /> Pay ${selectedTierData?.price} — Place Order
                    </button>
                    <p className="checkout-form__note">
                      <Shield size={12} /> Secure payment via Stripe. 100% money-back guarantee.
                    </p>
                  </form>
                </motion.div>
              )}
            </motion.div>

            {/* Right: Summary */}
            <motion.div
              className="checkout-summary"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="checkout-summary__card glass-card">
                <h3 className="checkout-summary__title">Order Summary</h3>

                {selectedServiceData ? (
                  <>
                    <div className="checkout-summary__row">
                      <span>Service</span>
                      <span>{selectedServiceData.name}</span>
                    </div>
                    {selectedTier && (
                      <>
                        <div className="checkout-summary__row">
                          <span>Plan</span>
                          <span>{selectedTier}</span>
                        </div>
                        <div className="checkout-summary__row checkout-summary__row--total">
                          <span>Total</span>
                          <span>${selectedTierData?.price}</span>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <p className="checkout-summary__empty">Select a service to begin.</p>
                )}

                <div className="checkout-summary__divider" />

                <div className="checkout-summary__alt">
                  <p>Prefer Fiverr's buyer protection?</p>
                  <a
                    href="https://fiverr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}
                  >
                    Order via Fiverr <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="checkout-summary__trust">
                  <div className="checkout-summary__trust-item">
                    <Shield size={14} />
                    <span>Secure Payment</span>
                  </div>
                  <div className="checkout-summary__trust-item">
                    <Check size={14} />
                    <span>Money-Back Guarantee</span>
                  </div>
                  <div className="checkout-summary__trust-item">
                    <CreditCard size={14} />
                    <span>Stripe Protected</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{checkoutStyles}</style>
    </div>
  )
}

const checkoutStyles = `
  .checkout-hero {
    padding: 10rem 0 2rem;
    text-align: center;
  }
  .checkout-hero__title {
    font-size: var(--font-size-6xl);
    font-weight: 900;
    letter-spacing: -0.04em;
    margin: 0.75rem 0;
  }
  .checkout-hero__sub {
    font-size: var(--font-size-lg);
    color: var(--color-gray-400);
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .checkout-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .checkout-step {
    margin-bottom: 2rem;
  }
  .checkout-step__header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  .checkout-step__num {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--color-white);
    color: var(--color-black);
    font-size: var(--font-size-xs);
    font-weight: 700;
  }
  .checkout-step__header h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
  }

  .checkout-step__options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
  .checkout-option {
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-gray-300);
    background: rgba(255, 255, 255, 0.03);
    cursor: pointer;
    position: relative;
    text-align: left;
  }
  .checkout-option--selected {
    border-color: rgba(255, 255, 255, 0.3) !important;
    background: rgba(255, 255, 255, 0.08) !important;
    color: var(--color-white);
  }
  .checkout-option__check {
    margin-left: auto;
    color: var(--color-success);
  }

  .checkout-step__tiers {
    display: flex;
    gap: 0.75rem;
  }
  .checkout-tier {
    flex: 1;
    padding: 1.25rem;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-family);
    color: var(--color-gray-300);
    position: relative;
  }
  .checkout-tier--selected {
    border-color: rgba(255, 255, 255, 0.3) !important;
    background: rgba(255, 255, 255, 0.08) !important;
  }
  .checkout-tier__name {
    font-size: var(--font-size-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-gray-400);
  }
  .checkout-tier__price {
    font-size: var(--font-size-2xl);
    font-weight: 900;
    color: var(--color-white);
  }

  .checkout-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .checkout-form .form-group label {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-gray-300);
    margin-bottom: 0.5rem;
  }
  .checkout-form .form-group input,
  .checkout-form .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: var(--font-size-sm);
    font-family: var(--font-family);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--color-accent-border);
    border-radius: var(--radius-md);
    color: var(--color-white);
    outline: none;
    transition: border-color var(--transition-fast);
  }
  .checkout-form .form-group input:focus,
  .checkout-form .form-group textarea:focus {
    border-color: var(--color-gray-500);
  }
  .checkout-form .form-group input::placeholder,
  .checkout-form .form-group textarea::placeholder {
    color: var(--color-gray-600);
  }
  .checkout-form .form-group textarea {
    resize: vertical;
  }
  .checkout-form__note {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: var(--font-size-xs);
    color: var(--color-gray-500);
    justify-content: center;
  }

  .checkout-summary__card {
    padding: 2rem;
    position: sticky;
    top: 100px;
  }
  .checkout-summary__title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .checkout-summary__row {
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-sm);
    padding: 0.5rem 0;
    color: var(--color-gray-400);
  }
  .checkout-summary__row span:last-child {
    color: var(--color-white);
    font-weight: 600;
  }
  .checkout-summary__row--total {
    border-top: 1px solid var(--color-accent-border);
    margin-top: 0.5rem;
    padding-top: 0.75rem;
  }
  .checkout-summary__row--total span:last-child {
    font-size: var(--font-size-xl);
    font-weight: 900;
  }
  .checkout-summary__empty {
    font-size: var(--font-size-sm);
    color: var(--color-gray-500);
    text-align: center;
    padding: 1rem 0;
  }
  .checkout-summary__divider {
    height: 1px;
    background: var(--color-accent-border);
    margin: 1.5rem 0;
  }
  .checkout-summary__alt p {
    font-size: var(--font-size-sm);
    color: var(--color-gray-400);
    margin-bottom: 0.75rem;
    text-align: center;
  }
  .checkout-summary__trust {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .checkout-summary__trust-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--font-size-xs);
    color: var(--color-gray-500);
  }
  .checkout-summary__trust-item svg {
    color: var(--color-success);
  }

  .checkout-success {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8rem 0;
  }
  .checkout-success__inner {
    padding: 3rem;
    text-align: center;
    max-width: 520px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .checkout-success__icon {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(34, 197, 94, 0.15);
    border: 2px solid var(--color-success);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-success);
    margin-bottom: 0.5rem;
  }
  .checkout-success__inner h2 {
    font-size: var(--font-size-3xl);
    font-weight: 800;
  }
  .checkout-success__inner p {
    font-size: var(--font-size-sm);
    color: var(--color-gray-400);
    line-height: 1.7;
  }
  .checkout-success__id {
    font-size: var(--font-size-base) !important;
    color: var(--color-gray-300) !important;
    padding: 0.75rem 1.5rem;
    background: var(--color-accent-muted);
    border: 1px solid var(--color-accent-border);
    border-radius: var(--radius-lg);
  }
  .checkout-success__actions {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    .checkout-hero__title {
      font-size: var(--font-size-4xl);
    }
    .checkout-grid {
      grid-template-columns: 1fr;
    }
    .checkout-step__options {
      grid-template-columns: 1fr;
    }
    .checkout-step__tiers {
      flex-direction: column;
    }
  }
`
