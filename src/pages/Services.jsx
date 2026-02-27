import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Bot,
  Server,
  Workflow,
  Terminal,
  ArrowRight,
  Check,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Discord Scraping',
    slug: 'discord-scraping',
    tagline: 'Extract valuable data from Discord servers',
    description: 'Our advanced Discord scraping service lets you extract member lists, messages, channel data, and server analytics. We use safe, reliable methods with custom filtering, data cleaning, and export to your preferred format (CSV, JSON, Excel).',
    features: [
      'Member scraping with role/join-date filters',
      'Message history extraction',
      'Server analytics & insights',
      'Custom data formatting & export',
      'Scheduled / recurring scrapes',
    ],
    tiers: [
      { name: 'Basic', price: 25, details: 'Up to 5K members, basic filters' },
      { name: 'Standard', price: 50, details: 'Up to 50K members, advanced filters, formatted export' },
      { name: 'Premium', price: 100, details: 'Unlimited members, recurring, priority support' },
    ],
    fiverr: 'https://fiverr.com',
  },
  {
    icon: Workflow,
    title: 'n8n Automation',
    slug: 'n8n-automation',
    tagline: 'Automate your workflows end-to-end',
    description: 'We design and deploy custom n8n workflows that connect your tools, APIs, and databases. From lead generation pipelines to data synchronization — we automate the tedious work so your team can focus on what matters.',
    features: [
      'Custom workflow design & deployment',
      'API integrations (CRM, email, Slack, etc.)',
      'Database sync & data pipelines',
      'Error handling & monitoring setup',
      'Documentation & handover',
    ],
    tiers: [
      { name: 'Basic', price: 40, details: 'Single workflow, up to 5 nodes' },
      { name: 'Standard', price: 80, details: 'Up to 3 workflows, 15 nodes each' },
      { name: 'Premium', price: 150, details: 'Unlimited workflows, complex logic, monitoring' },
    ],
    fiverr: 'https://fiverr.com',
  },
  {
    icon: Terminal,
    title: 'OpenClawd Setup',
    slug: 'openclawd-setup',
    tagline: 'Full AI infrastructure deployment',
    description: 'Get OpenClawd running on your infrastructure with optimal configuration. We handle installation, model setup, API configuration, and performance tuning — so you get a production-ready AI backend instantly.',
    features: [
      'Full installation & configuration',
      'Model selection & optimization',
      'API endpoint setup & security',
      'Performance tuning & monitoring',
      'Documentation & usage guide',
    ],
    tiers: [
      { name: 'Basic', price: 50, details: 'Standard setup on your VPS' },
      { name: 'Standard', price: 100, details: 'Optimized setup + API config + docs' },
      { name: 'Premium', price: 200, details: 'Multi-model, load balancing, full support' },
    ],
    fiverr: 'https://fiverr.com',
  },
  {
    icon: Server,
    title: 'VPS & Linux Fixes',
    slug: 'vps-linux-fixes',
    tagline: 'Server issues solved, fast',
    description: 'Whether it\'s a broken server, security vulnerability, or performance bottleneck — we diagnose and fix Linux server issues quickly. We also offer proactive server hardening and setup for new deployments.',
    features: [
      'Server troubleshooting & diagnostics',
      'Security hardening (SSH, firewall, fail2ban)',
      'Performance optimization',
      'Docker & container setup',
      'Cron jobs, backups, monitoring',
    ],
    tiers: [
      { name: 'Basic', price: 30, details: 'Single issue fix' },
      { name: 'Standard', price: 60, details: 'Full server audit + fixes' },
      { name: 'Premium', price: 120, details: 'Complete setup, hardening + ongoing support' },
    ],
    fiverr: 'https://fiverr.com',
  },
]

export default function Services() {
  return (
    <div className="services-page">
      {/* Header */}
      <section className="services-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.span>
          <motion.h1
            className="services-hero__title gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            What We Offer
          </motion.h1>
          <motion.p
            className="services-hero__sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Specialized technical services, transparent pricing, &amp; reliable delivery.
            Choose Fiverr for buyer protection, or order directly for zero commission.
          </motion.p>
        </div>
      </section>

      {/* Service Detail Blocks */}
      {services.map((service, idx) => {
        const Icon = service.icon
        const isEven = idx % 2 === 0
        return (
          <section
            key={service.slug}
            className="section service-detail"
            id={service.slug}
          >
            <div className="container">
              <motion.div
                className="service-detail__wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`service-detail__grid ${isEven ? '' : 'service-detail__grid--reverse'}`}>
                  {/* Info */}
                  <div className="service-detail__info">
                    <div className="service-detail__icon-wrap">
                      <Icon size={28} />
                    </div>
                    <h2 className="service-detail__title">{service.title}</h2>
                    <p className="service-detail__tagline">{service.tagline}</p>
                    <p className="service-detail__desc">{service.description}</p>
                    <ul className="service-detail__features">
                      {service.features.map((f, i) => (
                        <li key={i}><Check size={14} /> {f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="service-detail__pricing">
                    {service.tiers.map((tier, i) => (
                      <div key={i} className={`tier-card glass-card ${i === 1 ? 'tier-card--popular' : ''}`}>
                        {i === 1 && <span className="tier-card__badge">Most Popular</span>}
                        <h4 className="tier-card__name">{tier.name}</h4>
                        <div className="tier-card__price">
                          <span className="tier-card__currency">$</span>
                          <span className="tier-card__amount">{tier.price}</span>
                        </div>
                        <p className="tier-card__details">{tier.details}</p>
                        <div className="tier-card__actions">
                          <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', fontSize: '0.8rem' }}>
                            Order Now <ArrowRight size={14} />
                          </Link>
                          <a
                            href={service.fiverr}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost"
                            style={{ width: '100%', fontSize: '0.75rem', justifyContent: 'center' }}
                          >
                            Order via Fiverr <ArrowUpRight size={12} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}

      <style>{`
        .services-hero {
          padding: 10rem 0 4rem;
          text-align: center;
        }
        .services-hero__title {
          font-size: var(--font-size-6xl);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin: 0.75rem 0;
        }
        .services-hero__sub {
          font-size: var(--font-size-lg);
          color: var(--color-gray-400);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .service-detail {
          border-bottom: 1px solid var(--color-accent-border);
        }
        .service-detail:last-of-type {
          border-bottom: none;
        }
        .service-detail__grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .service-detail__grid--reverse {
          direction: rtl;
        }
        .service-detail__grid--reverse > * {
          direction: ltr;
        }
        .service-detail__icon-wrap {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--color-accent-border);
          margin-bottom: 1.25rem;
        }
        .service-detail__title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }
        .service-detail__tagline {
          font-size: var(--font-size-base);
          color: var(--color-gray-400);
          margin-bottom: 1rem;
        }
        .service-detail__desc {
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .service-detail__features {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .service-detail__features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--font-size-sm);
          color: var(--color-gray-300);
        }
        .service-detail__features li svg {
          color: var(--color-success);
          flex-shrink: 0;
        }

        .service-detail__pricing {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .tier-card {
          padding: 1.5rem;
          position: relative;
        }
        .tier-card--popular {
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.06);
        }
        .tier-card__badge {
          position: absolute;
          top: -10px;
          right: 16px;
          font-size: var(--font-size-xs);
          font-weight: 600;
          padding: 0.2rem 0.75rem;
          background: var(--color-white);
          color: var(--color-black);
          border-radius: var(--radius-full);
        }
        .tier-card__name {
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--color-gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
        }
        .tier-card__price {
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
          margin-bottom: 0.5rem;
        }
        .tier-card__currency {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--color-gray-400);
        }
        .tier-card__amount {
          font-size: var(--font-size-4xl);
          font-weight: 900;
          letter-spacing: -0.03em;
        }
        .tier-card__details {
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .tier-card__actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .services-hero__title {
            font-size: var(--font-size-4xl);
          }
          .service-detail__grid,
          .service-detail__grid--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
        }
      `}</style>
    </div>
  )
}
