import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/track', label: 'Track Order' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="RapidFreelancin" className="navbar__logo-img" />
          <span className="navbar__logo-text">RapidFreelancin</span>
        </Link>

        <div className="navbar__links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/checkout" className="navbar__cta btn btn-primary">
          Get Started
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all var(--transition-base);
        }
        .navbar--scrolled {
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--color-accent-border);
          padding: 0.75rem 0;
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: var(--font-size-lg);
          z-index: 10;
        }
        .navbar__logo-img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
        .navbar__logo-text {
          letter-spacing: -0.02em;
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .navbar__link {
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-gray-400);
          transition: color var(--transition-fast);
          position: relative;
        }
        .navbar__link:hover,
        .navbar__link--active {
          color: var(--color-white);
        }
        .navbar__link--active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-white);
          border-radius: 1px;
        }
        .navbar__cta {
          font-size: var(--font-size-sm) !important;
          padding: 0.6rem 1.4rem !important;
        }
        .navbar__toggle {
          display: none;
          background: none;
          color: var(--color-white);
          z-index: 10;
        }
        .navbar__mobile {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--color-accent-border);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .navbar__mobile-link {
          font-size: var(--font-size-lg);
          font-weight: 500;
          color: var(--color-gray-400);
          padding: 0.5rem 0;
          transition: color var(--transition-fast);
        }
        .navbar__mobile-link:hover,
        .navbar__mobile-link--active {
          color: var(--color-white);
        }
        @media (max-width: 768px) {
          .navbar__links,
          .navbar__cta {
            display: none;
          }
          .navbar__toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  )
}
