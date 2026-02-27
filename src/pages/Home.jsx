import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  Server,
  Workflow,
  Terminal,
  Shield,
  Zap,
  Star,
  Users,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: Bot,
    title: 'Discord Scraping',
    description: 'Advanced Discord member scraping, data extraction, and analysis with custom filtering and export options.',
    price: '25',
    fiverr: 'https://fiverr.com',
  },
  {
    icon: Workflow,
    title: 'n8n Automation',
    description: 'Build powerful workflow automations with n8n — connect your apps, APIs, and databases seamlessly.',
    price: '40',
    fiverr: 'https://fiverr.com',
  },
  {
    icon: Terminal,
    title: 'OpenClawd Setup',
    description: 'Full OpenClawd deployment, configuration, and optimization for your AI infrastructure needs.',
    price: '50',
    fiverr: 'https://fiverr.com',
  },
  {
    icon: Server,
    title: 'VPS & Linux Fixes',
    description: 'Server setup, troubleshooting, security hardening, and performance optimization for any Linux distribution.',
    price: '30',
    fiverr: 'https://fiverr.com',
  },
]

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '5★', label: 'Average Rating' },
  { value: '50+', label: 'Happy Clients' },
  { value: '24h', label: 'Avg Response Time' },
]

const steps = [
  { num: '01', title: 'Describe Your Need', desc: 'Tell us what you need — we\'ll scope it out.' },
  { num: '02', title: 'Get a Quote', desc: 'Transparent pricing with no hidden fees.' },
  { num: '03', title: 'We Build It', desc: 'Our experts deliver quality work, fast.' },
  { num: '04', title: 'You Review', desc: 'Test, verify, and request revisions if needed.' },
]

const testimonials = [
  { name: 'Alex M.', role: 'Startup Founder', text: 'RapidFreelancin set up my entire n8n automation pipeline in 48 hours. Absolutely phenomenal work.', rating: 5 },
  { name: 'Sarah K.', role: 'Community Manager', text: 'The Discord scraping service saved me weeks of manual work. Clean data, delivered fast.', rating: 5 },
  { name: 'James T.', role: 'DevOps Engineer', text: 'Fixed my VPS issues that I\'d been struggling with for days. Professional and knowledgeable team.', rating: 5 },
]

export default function Home() {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grid-overlay" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>
        <div className="container hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Star size={12} fill="currentColor" />
            Trusted by 100+ clients on Fiverr & beyond
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Premium Freelancing,
            <br />
            <span className="gradient-text">Delivered Rapidly.</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From Discord scraping to Linux server management — we handle the technical
            heavy lifting so you can focus on growing your business.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="/checkout" className="btn btn-primary btn-lg">
              Place an Order <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title gradient-text">Our Core Services</h2>
            <p className="section-subtitle">
              Specialized technical services delivered by experienced professionals.
              Order directly or through Fiverr — your choice.
            </p>
          </div>
          <div className="grid-4">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 className="section-title gradient-text">How It Works</h2>
            <p className="section-subtitle">
              A simple, transparent process from start to finish.
            </p>
          </div>
          <div className="grid-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="step-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="step-card__num">{step.num}</span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
                {i < steps.length - 1 && <ChevronRight className="step-card__arrow" size={20} />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST / SOCIAL PROOF ===== */}
      <section className="section trust">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Social Proof</span>
            <h2 className="section-title gradient-text">Trusted Worldwide</h2>
            <p className="section-subtitle">
              Don't take our word for it — here's what our clients say.
            </p>
          </div>

          <div className="grid-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="testimonial__stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <p className="testimonial__text">"{t.text}"</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial__name">{t.name}</p>
                    <p className="testimonial__role">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="trust__badges"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="trust__badge">
              <Shield size={20} />
              <span>Secure Payments</span>
            </div>
            <div className="trust__badge">
              <Zap size={20} />
              <span>Fast Delivery</span>
            </div>
            <div className="trust__badge">
              <Users size={20} />
              <span>Fiverr Verified</span>
            </div>
            <div className="trust__badge">
              <CheckCircle2 size={20} />
              <span>Money-Back Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-banner glass-card"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="cta-banner__glow" />
            <h2 className="cta-banner__title">Ready to Get Started?</h2>
            <p className="cta-banner__desc">
              Place your order now and let our experts handle the rest.
              Available via Fiverr or directly through our platform.
            </p>
            <div className="cta-banner__actions">
              <Link to="/checkout" className="btn btn-primary btn-lg">
                Place Order <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ===== HERO ===== */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 0 4rem;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero__grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%);
        }
        .hero__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
        }
        .hero__glow--1 {
          width: 600px;
          height: 600px;
          background: white;
          top: -200px;
          right: -100px;
        }
        .hero__glow--2 {
          width: 400px;
          height: 400px;
          background: white;
          bottom: -100px;
          left: -100px;
          opacity: 0.08;
        }
        .hero__content {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--font-size-xs);
          font-weight: 500;
          color: var(--color-gray-400);
          padding: 0.4rem 1rem;
          border: 1px solid var(--color-accent-border);
          border-radius: var(--radius-full);
          background: var(--color-accent-muted);
          margin-bottom: var(--spacing-xl);
        }
        .hero__title {
          font-size: var(--font-size-7xl);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: var(--spacing-lg);
          max-width: 800px;
        }
        .hero__subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-gray-400);
          max-width: 580px;
          line-height: 1.7;
          margin-bottom: var(--spacing-2xl);
        }
        .hero__actions {
          display: flex;
          gap: 1rem;
          margin-bottom: var(--spacing-3xl);
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero__stats {
          display: flex;
          gap: 3rem;
          padding: 1.5rem 2.5rem;
          border: 1px solid var(--color-accent-border);
          border-radius: var(--radius-2xl);
          background: var(--color-accent-muted);
          backdrop-filter: blur(10px);
        }
        .hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }
        .hero__stat-value {
          font-size: var(--font-size-2xl);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .hero__stat-label {
          font-size: var(--font-size-xs);
          color: var(--color-gray-500);
          font-weight: 500;
        }

        /* ===== STEPS ===== */
        .step-card {
          padding: 2rem;
          position: relative;
          text-align: center;
        }
        .step-card__num {
          font-size: var(--font-size-3xl);
          font-weight: 900;
          color: var(--color-gray-800);
          letter-spacing: -0.02em;
          display: block;
          margin-bottom: 1rem;
        }
        .step-card__title {
          font-size: var(--font-size-lg);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .step-card__desc {
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
          line-height: 1.6;
        }
        .step-card__arrow {
          display: none;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonial {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .testimonial__stars {
          display: flex;
          gap: 0.25rem;
        }
        .testimonial__text {
          font-size: var(--font-size-sm);
          color: var(--color-gray-300);
          line-height: 1.7;
          flex: 1;
          font-style: italic;
        }
        .testimonial__author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--color-accent-border);
        }
        .testimonial__avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-gray-800);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: var(--font-size-sm);
          color: var(--color-gray-300);
        }
        .testimonial__name {
          font-size: var(--font-size-sm);
          font-weight: 600;
        }
        .testimonial__role {
          font-size: var(--font-size-xs);
          color: var(--color-gray-500);
        }

        /* ===== TRUST BADGES ===== */
        .trust__badges {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: var(--spacing-3xl);
          flex-wrap: wrap;
        }
        .trust__badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-gray-400);
          padding: 0.75rem 1.25rem;
          border: 1px solid var(--color-accent-border);
          border-radius: var(--radius-full);
          background: var(--color-accent-muted);
        }

        /* ===== CTA BANNER ===== */
        .cta-section {
          padding: var(--spacing-4xl) 0;
        }
        .cta-banner {
          padding: 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-banner__glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: white;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.05;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
        }
        .cta-banner__title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          margin-bottom: var(--spacing-md);
          letter-spacing: -0.03em;
          position: relative;
        }
        .cta-banner__desc {
          font-size: var(--font-size-lg);
          color: var(--color-gray-400);
          max-width: 500px;
          margin: 0 auto var(--spacing-xl);
          line-height: 1.7;
          position: relative;
        }
        .cta-banner__actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          position: relative;
          flex-wrap: wrap;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .hero__title {
            font-size: var(--font-size-4xl);
          }
          .hero__stats {
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            padding: 1.25rem 1.5rem;
          }
          .cta-banner {
            padding: 2.5rem 1.5rem;
          }
          .cta-banner__title {
            font-size: var(--font-size-2xl);
          }
        }
      `}</style>
    </div>
  )
}
