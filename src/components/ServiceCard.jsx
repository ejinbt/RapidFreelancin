import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, description, price, fiverr, index = 0 }) {
  return (
    <motion.div
      className="service-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="service-card__icon">
        <Icon size={28} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      {price && <div className="service-card__price">Starting at <strong>${price}</strong></div>}
      <div className="service-card__actions">
        <Link to="/checkout" className="btn btn-primary btn--sm">
          Order Now <ArrowRight size={14} />
        </Link>
        {fiverr && (
          <a href={fiverr} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn--sm">
            Via Fiverr
          </a>
        )}
      </div>

      <style>{`
        .service-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .service-card__icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--color-accent-border);
          color: var(--color-white);
          margin-bottom: 0.5rem;
        }
        .service-card__title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .service-card__desc {
          color: var(--color-gray-400);
          font-size: var(--font-size-sm);
          line-height: 1.7;
          flex: 1;
        }
        .service-card__price {
          font-size: var(--font-size-sm);
          color: var(--color-gray-300);
        }
        .service-card__price strong {
          font-size: var(--font-size-2xl);
          color: var(--color-white);
          font-weight: 800;
        }
        .service-card__actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .btn--sm {
          padding: 0.55rem 1.2rem !important;
          font-size: var(--font-size-xs) !important;
        }
      `}</style>
    </motion.div>
  )
}
