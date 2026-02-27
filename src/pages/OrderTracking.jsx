import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import OrderRoadmap from '../components/OrderRoadmap'

const demoOrders = {
  'RF-2024-001': {
    service: 'Discord Scraping',
    tier: 'Standard',
    date: 'Feb 20, 2026',
    steps: [
      { title: 'Order Placed', description: 'Your order has been received and confirmed.', status: 'completed', date: 'Feb 20, 2026' },
      { title: 'Requirements Gathered', description: 'We\'ve reviewed your requirements and have all the info needed to proceed.', status: 'completed', date: 'Feb 21, 2026' },
      { title: 'Work In Progress', description: 'Our team is actively working on your Discord scraping task.', status: 'in-progress', date: 'Feb 22, 2026' },
      { title: 'Quality Review', description: 'Final review and data validation before delivery.', status: 'pending' },
      { title: 'Delivered', description: 'Your completed work is ready for download.', status: 'pending' },
    ],
  },
  'RF-2024-002': {
    service: 'n8n Automation',
    tier: 'Premium',
    date: 'Feb 18, 2026',
    steps: [
      { title: 'Order Placed', description: 'Your order has been received and confirmed.', status: 'completed', date: 'Feb 18, 2026' },
      { title: 'Requirements Gathered', description: 'Workflow requirements documented and confirmed.', status: 'completed', date: 'Feb 18, 2026' },
      { title: 'Work In Progress', description: 'Building your custom n8n workflows.', status: 'completed', date: 'Feb 19, 2026' },
      { title: 'Quality Review', description: 'Testing all automations end-to-end.', status: 'review', date: 'Feb 22, 2026' },
      { title: 'Delivered', description: 'Your completed workflows are ready.', status: 'pending' },
    ],
  },
}

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('')
  const [activeOrder, setActiveOrder] = useState(null)
  const [error, setError] = useState('')

  const handleTrack = (e) => {
    e.preventDefault()
    const order = demoOrders[orderId.trim().toUpperCase()]
    if (order) {
      setActiveOrder({ id: orderId.trim().toUpperCase(), ...order })
      setError('')
    } else {
      setError('Order not found. Try RF-2024-001 or RF-2024-002 for demo.')
      setActiveOrder(null)
    }
  }

  return (
    <div className="track-page">
      <section className="track-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Package size={14} /> Order Tracking
          </motion.span>
          <motion.h1
            className="track-hero__title gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Track Your Order
          </motion.h1>
          <motion.p
            className="track-hero__sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Enter your order ID to see real-time progress of your project.
          </motion.p>

          <motion.form
            className="track-search"
            onSubmit={handleTrack}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="track-search__input-wrap">
              <Search size={18} className="track-search__icon" />
              <input
                type="text"
                placeholder="Enter Order ID  (e.g. RF-2024-001)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="track-search__input"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Track <ArrowRight size={16} />
            </button>
          </motion.form>
          {error && <p className="track-error">{error}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {activeOrder ? (
            <motion.div
              className="track-result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="track-result__header glass-card">
                <div className="track-result__info">
                  <h3>Order {activeOrder.id}</h3>
                  <div className="track-result__meta">
                    <span>{activeOrder.service}</span>
                    <span className="track-result__dot">•</span>
                    <span>{activeOrder.tier} Plan</span>
                    <span className="track-result__dot">•</span>
                    <span>Placed {activeOrder.date}</span>
                  </div>
                </div>
              </div>

              <div className="track-result__roadmap glass-card">
                <h3 style={{ marginBottom: '1.5rem', fontSize: 'var(--font-size-lg)', fontWeight: 700 }}>
                  Order Roadmap
                </h3>
                <OrderRoadmap steps={activeOrder.steps} />
              </div>
            </motion.div>
          ) : (
            <div className="track-empty">
              <div className="track-empty__inner glass-card">
                <Package size={48} strokeWidth={1} />
                <h3>No Order Selected</h3>
                <p>Enter your order ID above to view your project's progress.</p>
                <div className="track-empty__demo">
                  <p className="track-empty__demo-label">Demo Order IDs:</p>
                  <div className="track-empty__demo-ids">
                    <button onClick={() => { setOrderId('RF-2024-001'); }} className="btn btn-secondary">RF-2024-001</button>
                    <button onClick={() => { setOrderId('RF-2024-002'); }} className="btn btn-secondary">RF-2024-002</button>
                  </div>
                </div>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: '1rem' }}>
                  Don't have an order yet? <Link to="/checkout" style={{ color: 'var(--color-white)', textDecoration: 'underline' }}>Place one now</Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .track-hero {
          padding: 10rem 0 2rem;
          text-align: center;
        }
        .track-hero__title {
          font-size: var(--font-size-6xl);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin: 0.75rem 0;
        }
        .track-hero__sub {
          font-size: var(--font-size-lg);
          color: var(--color-gray-400);
          max-width: 480px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .track-search {
          display: flex;
          gap: 0.75rem;
          max-width: 520px;
          margin: 0 auto;
        }
        .track-search__input-wrap {
          flex: 1;
          position: relative;
        }
        .track-search__icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-gray-500);
        }
        .track-search__input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.75rem;
          font-size: var(--font-size-sm);
          font-family: var(--font-family);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--color-accent-border);
          border-radius: var(--radius-lg);
          color: var(--color-white);
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .track-search__input:focus {
          border-color: var(--color-gray-500);
        }
        .track-search__input::placeholder {
          color: var(--color-gray-600);
        }

        .track-error {
          color: var(--color-error);
          font-size: var(--font-size-sm);
          margin-top: 0.75rem;
        }

        .track-result {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 700px;
          margin: 0 auto;
        }
        .track-result__header {
          padding: 1.5rem 2rem;
        }
        .track-result__info h3 {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .track-result__meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
          flex-wrap: wrap;
        }
        .track-result__dot {
          color: var(--color-gray-700);
        }
        .track-result__roadmap {
          padding: 2rem;
        }

        .track-empty {
          max-width: 500px;
          margin: 0 auto;
        }
        .track-empty__inner {
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .track-empty__inner svg {
          color: var(--color-gray-600);
          margin-bottom: 0.5rem;
        }
        .track-empty__inner h3 {
          font-size: var(--font-size-xl);
          font-weight: 700;
        }
        .track-empty__inner > p {
          font-size: var(--font-size-sm);
          color: var(--color-gray-400);
        }
        .track-empty__demo {
          margin-top: 1rem;
          width: 100%;
        }
        .track-empty__demo-label {
          font-size: var(--font-size-xs);
          color: var(--color-gray-500);
          margin-bottom: 0.5rem;
        }
        .track-empty__demo-ids {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .track-hero__title {
            font-size: var(--font-size-4xl);
          }
          .track-search {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
