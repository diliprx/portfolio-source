import { motion } from 'framer-motion';
import { PageTransition, SectionTitle, StatCard, StripItem } from '../components/UI';
import { Link } from 'react-router-dom';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '40+', label: 'Projects Completed' },
  { number: '2000+', label: 'Problem Solved' },
  { number: '8', label: 'Awards Won' },
];

const stripItems = [
  {
    bgGradient: 'linear-gradient(135deg, #1a2a0a, #0d1a0d)',
    label: 'Web Dev',
    text: 'WEB',
    color: 'rgba(200,245,63,0.2)',
    onClick: () => window.location.href = '/projects'
  },
  {
    bgGradient: 'linear-gradient(135deg, #1a0a0a, #1a0d0d)',
    label: 'Mobile Apps',
    text: 'APP',
    color: 'rgba(255,100,80,0.2)',
    onClick: () => window.location.href = '/projects'
  },
  {
    bgGradient: 'linear-gradient(135deg, #0a0a1a, #0d0d1a)',
    label: 'AI & ML',
    text: 'AI',
    color: 'rgba(100,150,255,0.2)',
    onClick: () => window.location.href = '/projects'
  },
  {
    bgGradient: 'linear-gradient(135deg, #1a1a0a, #181808)',
    label: 'Design',
    text: 'UI',
    color: 'rgba(255,220,50,0.2)',
    onClick: () => window.location.href = '/projects'
  },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-text">DKV</div>
        <div className="container mx-auto px-6 relative z-10 text-left">
          <div className="hero-badge">Available for work</div>
          <h1>
            Dilip<br />
            <em>K. Venkatesan</em>
          </h1>
          <p className="hero-sub">
            Full-stack developer and cybersecurity enthusiast focused on building secure, resilient, and cutting-edge digital experiences.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-ghost">Get in Touch</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <a href="https://leetcode.com/diliprx/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="platform-icon">
            <i className="fa-brands fa-leetcode" style={{color: '#c8f53f'}} />
          </a>
          <a href="https://tryhackme.com/p/CleObsecure" target="_blank" rel="noopener noreferrer" aria-label="TryHackMe" className="platform-icon">
            <i className="fa-solid fa-laptop" style={{color: '#c8f53f'}} />
          </a>
          Scroll
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats container mx-auto px-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* Strip */}
      {/* <section className="home-strip container mx-auto px-6">
        {stripItems.map((item, index) => (
          <StripItem key={index} {...item} />
        ))}
      </section> */}

      <div className="home-strip">
        {stripItems.map((item, index) => (
          <div key={index} className="strip-img" onClick={item.onClick}>

            <div
              className="strip-img-inner"
              style={{
                background: item.bgGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  fontSize: '4rem',
                  fontWeight: 900,
                  color: item.color
                }}
              >
                {item.text}
              </div>
            </div>

            <div className="strip-label">{item.label}</div>

          </div>
        ))}
      </div>

      {/* <section className="container mx-auto px-6 py-20 md:py-32 border-b border-current/10 flex items-center justify-between min-h-[250px] gap-12">       
        <blockquote className="font-semibold text-2xl lg:text-3xl leading-relaxed text-center lg:text-left max-w-2xl">
          It doesn't matter where you start, it's how you <em>progress</em> from there.
        </blockquote>   
        <Link to="/about" className="btn-ghost whitespace-nowrap">My Story →</Link>     
      </section> */}

      {/* Footer */}
      <footer className="container mx-auto px-6">
        <div className="footer-logo">DILIP<span>.</span>K.VENKATESAN</div>
        <p>© 2026 Dilip Kumar Venkatesan. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/diliprx" target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/diliprx/" target='_blank'>LinkedIn</a>
          <a href="https://x.com/dilip__rx" target='_blank'>Twitter</a>
        </div>
      </footer>
    </PageTransition>
  );
}
