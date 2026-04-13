import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ─── Existing components kept for compatibility ─── */
export function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={`mb-20 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: center ? 0 : -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
          style={{ backgroundColor: 'rgba(200, 245, 63, 0.1)', color: '#c8f53f' }}
        >
          {eyebrow}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-orbitron text-5xl md:text-7xl lg:text-[5rem] leading-tight tracking-tight"
        style={{ background: 'linear-gradient(135deg, #c8f53f 0%, #d4ff4a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto"
          style={{ color: '#888' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ─── New components from HTML theme ─── */

/* Marquee for Achievements */
export function Marquee({ children }) {
  return (
    <div className="ach-marquee">
      <div className="marquee-inner">
        {children}
        {children} // Duplicate for seamless loop
      </div>
    </div>
  );
}

/* Strip Item for Home */
export function StripItem({ bgGradient, label, onClick }) {
  return (
    <motion.div 
      className="strip-img"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div 
        className="strip-img-inner"
        style={{ 
          background: bgGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ fontSize: '4rem', fontWeight: 900, opacity: 0.2, color: 'white' }}>
          {/* Content set by parent */}
        </div>
      </div>
      <div className="strip-label">{label}</div>
    </motion.div>
  );
}

/* Project Item */
export function ProjItem({ num, title, description, tags, category, onClick }) {
  return (
    <motion.div 
      className="proj-item group"
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
    >
      <div className="proj-num">{num}</div>
      <div className="proj-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="proj-tags">
          {tags.map((tag, i) => (
            <span key={i} className="proj-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="proj-arrow">→</div>
    </motion.div>
  );
}

/* Filter Button for Projects */
export function FilterBtn({ children, active, onClick }) {
  return (
    <motion.button
      className={`filter-btn ${active ? 'active' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

/* Contact Info Item */
export function ContactInfoItem({ label, value }) {
  return (
    <div className="contact-info-item">
      <div className="info-label">{label}</div>
      <div className="info-val" style={{ color: value === '● Available for work' ? '#c8f53f' : 'inherit', animation: value === '● Available for work' ? 'blink 1.5s ease-in-out infinite' : 'none' }}>
        {value}
      </div>
    </div>
  );
}

/* Toast Notification */
export function Toast({ show, message = "Message sent! I'll be in touch soon." }) {
  return (
    <motion.div 
      className="toast"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      style={{ display: show ? 'block' : 'none' }}
    >
      {message}
    </motion.div>
  );
}

/* Page wrapper for transitions */
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page active min-h-screen"
    >
      {children}
    </motion.div>
  );
}

/* Stat Card (updated theme) */
export function StatCard({ number, label }) {
  return (
    <motion.div 
      className="stat-item"
      whileHover={{ scale: 1.02 }}
    >
      <div className="stat-num" style={{ color: '#c8f53f' }}>{number}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

/* Achievement Card */
export function AchCard({ title, meta }) {
  return (
    <motion.div 
      className="ach-card"
      whileHover={{ scale: 1.02 }}
    >
      <h3>{title}</h3>
      <div className="ach-meta">{meta}</div>
    </motion.div>
  );
}

