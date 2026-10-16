import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profile, socials } from '../data';

/* Page wrapper for route transitions */
export function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="page"
    >
      {children}
      <Footer />
    </motion.main>
  );
}

/* Fade-up when scrolled into view */
export function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  );
}

/* Eyebrow + heading + optional lead text */
export function SectionHeader({ eyebrow, title, lead, center = false }) {
  return (
    <Reveal className={`section-header ${center ? 'center' : ''}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}

/* Project card */
export function ProjectCard({ project, index = 0 }) {
  const { title, context, icon, description, tags, link } = project;
  return (
    <Reveal delay={index * 0.08} className="card project-card">
      <div className="project-top">
        <div className="icon-box"><i className={icon} /></div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`${title} on GitHub`}>
            <i className="fa-brands fa-github" />
          </a>
        ) : (
          <span className="private-badge">Private repo</span>
        )}
      </div>
      <h3>{title}</h3>
      <div className="project-context">{context}</div>
      <p>{description}</p>
      <div className="tags">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">
          View on GitHub <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      )}
    </Reveal>
  );
}

/* Infinite marquee (children are rendered twice for a seamless loop) */
export function Marquee({ items }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-inner">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

export function SocialLinks({ className = '' }) {
  return (
    <div className={`socials ${className}`}>
      {socials.map(({ label, href, icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
          <i className={icon} />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="logo">DKV<span>.</span></Link>
          <p className="footer-note">© {new Date().getFullYear()} {profile.name}. Built with React & Vite.</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}

/* Toast Notification */
export function Toast({ show, message }) {
  return (
    <motion.div
      className="toast"
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: show ? 'auto' : 'none' }}
      role="status"
    >
      {message}
    </motion.div>
  );
}
