import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Github, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.png" alt="RapidFreelancin" className="footer__logo-img" />
              <span className="footer__logo-text">RapidFreelancin</span>
            </div>
            <p className="footer__desc">
              Premium freelancing services — from automation to server management.
              Trusted by 100+ clients worldwide.
            </p>
            <div className="footer__socials">
              <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Fiverr">
                <ArrowUpRight size={18} />
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Discord">
                <MessageCircle size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="mailto:contact@rapidfreelancin.com" className="footer__social" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <Link to="/services" className="footer__link">Discord Scraping</Link>
            <Link to="/services" className="footer__link">n8n Automation</Link>
            <Link to="/services" className="footer__link">OpenClawd Setup</Link>
            <Link to="/services" className="footer__link">VPS / Linux Fixes</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/track" className="footer__link">Track Order</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <Link to="/checkout" className="footer__link">Place Order</Link>
            <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" className="footer__link">
              Order via Fiverr <ArrowUpRight size={12} style={{ marginLeft: 4 }} />
            </a>
            <Link to="/contact" className="footer__link">Support</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} RapidFreelancin. All rights reserved.</p>
          <p className="footer__bottom-sub">Built with precision & passion.</p>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--color-accent-border);
          padding: var(--spacing-3xl) 0 var(--spacing-xl);
          background: var(--color-gray-950);
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
        }
        .footer__brand {
          max-width: 320px;
        }
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: var(--spacing-md);
        }
        .footer__logo-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .footer__logo-text {
          font-weight: 700;
          font-size: var(--font-size-lg);
        }
        .footer__desc {
          color: var(--color-gray-500);
          font-size: var(--font-size-sm);
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
        }
        .footer__socials {
          display: flex;
          gap: 0.75rem;
        }
        .footer__social {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-accent-border);
          border-radius: var(--radius-md);
          color: var(--color-gray-400);
          transition: all var(--transition-fast);
        }
        .footer__social:hover {
          color: var(--color-white);
          border-color: var(--color-gray-500);
          background: var(--color-accent-muted);
        }
        .footer__heading {
          font-size: var(--font-size-sm);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gray-300);
          margin-bottom: var(--spacing-lg);
        }
        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer__link {
          font-size: var(--font-size-sm);
          color: var(--color-gray-500);
          transition: color var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .footer__link:hover {
          color: var(--color-white);
        }
        .footer__bottom {
          border-top: 1px solid var(--color-accent-border);
          padding-top: var(--spacing-xl);
          text-align: center;
        }
        .footer__bottom p {
          font-size: var(--font-size-sm);
          color: var(--color-gray-500);
        }
        .footer__bottom-sub {
          margin-top: 0.25rem;
          font-size: var(--font-size-xs) !important;
          color: var(--color-gray-700) !important;
        }
        @media (max-width: 768px) {
          .footer__grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer__brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
