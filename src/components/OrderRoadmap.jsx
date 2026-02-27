import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock, Loader2 } from 'lucide-react'

const statusConfig = {
  completed: { icon: CheckCircle2, color: '#22c55e', label: 'Completed' },
  'in-progress': { icon: Loader2, color: '#eab308', label: 'In Progress' },
  pending: { icon: Circle, color: '#525252', label: 'Pending' },
  review: { icon: Clock, color: '#6366f1', label: 'Under Review' },
}

export default function OrderRoadmap({ steps = [] }) {
  return (
    <div className="roadmap">
      {steps.map((step, i) => {
        const config = statusConfig[step.status] || statusConfig.pending
        const Icon = config.icon
        const isLast = i === steps.length - 1

        return (
          <motion.div
            key={i}
            className="roadmap__step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="roadmap__indicator">
              <div
                className={`roadmap__dot ${step.status === 'in-progress' ? 'roadmap__dot--pulse' : ''}`}
                style={{ borderColor: config.color, color: config.color }}
              >
                <Icon size={18} className={step.status === 'in-progress' ? 'spin' : ''} />
              </div>
              {!isLast && (
                <div
                  className="roadmap__line"
                  style={{
                    background: step.status === 'completed'
                      ? config.color
                      : 'var(--color-gray-800)'
                  }}
                />
              )}
            </div>
            <div className="roadmap__content">
              <div className="roadmap__header">
                <h4 className="roadmap__title">{step.title}</h4>
                <span
                  className="roadmap__badge"
                  style={{ color: config.color, borderColor: config.color + '33' }}
                >
                  {config.label}
                </span>
              </div>
              <p className="roadmap__desc">{step.description}</p>
              {step.date && <span className="roadmap__date">{step.date}</span>}
            </div>
          </motion.div>
        )
      })}

      <style>{`
        .roadmap {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .roadmap__step {
          display: flex;
          gap: 1.25rem;
          min-height: 100px;
        }
        .roadmap__indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .roadmap__dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-gray-950);
          z-index: 1;
          flex-shrink: 0;
        }
        .roadmap__dot--pulse {
          animation: pulse-glow 2s infinite;
        }
        .roadmap__line {
          width: 2px;
          flex: 1;
          min-height: 30px;
        }
        .roadmap__content {
          padding-bottom: 2rem;
          flex: 1;
        }
        .roadmap__header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        .roadmap__title {
          font-size: var(--font-size-base);
          font-weight: 600;
        }
        .roadmap__badge {
          font-size: var(--font-size-xs);
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid;
          background: rgba(0, 0, 0, 0.3);
        }
        .roadmap__desc {
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
          line-height: 1.6;
        }
        .roadmap__date {
          font-size: var(--font-size-xs);
          color: var(--color-gray-600);
          margin-top: 0.5rem;
          display: block;
        }
        .spin {
          animation: spin 1.5s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
