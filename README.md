# RapidFreelancin

![RapidFreelancin](public/logo.png)

A premium freelancing services website built with **React + Vite**. RapidFreelancin offers specialized technical services including Discord Scraping, n8n Automation, OpenClawd Setup, and VPS/Linux Server Fixes — with the flexibility to order directly (zero commission) or through Fiverr.

## ✨ Features

- **Modern B&W Design** — Glassmorphism cards, gradient text, smooth animations (Framer Motion)
- **5 Pages** — Home, Services, Checkout, Order Tracking, Contact
- **Dual Ordering** — Order standalone (no commission) or via Fiverr
- **Order Tracking** — Animated roadmap/timeline showing real-time project status
- **Multi-Step Checkout** — Service selection → plan → details → payment
- **Trust Signals** — Testimonials, stats, secure payment badges, money-back guarantee
- **Responsive** — Mobile-first with hamburger menu and adaptive grids
- **SEO Ready** — Meta tags, semantic HTML, proper heading hierarchy

## 🛠 Tech Stack

| Technology     | Purpose                                 |
| -------------- | --------------------------------------- |
| React 18       | UI framework                            |
| Vite 6         | Build tool & dev server                 |
| React Router 6 | Client-side routing                     |
| Framer Motion  | Animations & transitions                |
| Lucide React   | Icons                                   |
| Vanilla CSS    | Custom design system with CSS variables |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/ejinbt/RapidFreelancin.git
cd RapidFreelancin

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
RapidFreelancin/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed nav with scroll blur & mobile menu
│   │   ├── Footer.jsx        # Responsive footer with links & socials
│   │   ├── ServiceCard.jsx   # Reusable glassmorphism service card
│   │   └── OrderRoadmap.jsx  # Animated order status timeline
│   ├── pages/
│   │   ├── Home.jsx          # Hero, services, how-it-works, testimonials
│   │   ├── Services.jsx      # Detailed service breakdowns + pricing tiers
│   │   ├── Checkout.jsx      # Multi-step order flow + Stripe demo
│   │   ├── OrderTracking.jsx # Order search + roadmap display
│   │   └── Contact.jsx       # Contact form + info cards
│   ├── App.jsx               # Router setup
│   ├── main.jsx              # Entry point
│   └── index.css             # Design system (variables, utilities, animations)
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Services Offered

| Service           | Starting Price |
| ----------------- | -------------- |
| Discord Scraping  | $25            |
| n8n Automation    | $40            |
| OpenClawd Setup   | $50            |
| VPS & Linux Fixes | $30            |

## 📝 Demo

Try the order tracking with these demo IDs:

- `RF-2024-001` — Discord Scraping (In Progress)
- `RF-2024-002` — n8n Automation (Under Review)

## 📄 License

MIT
