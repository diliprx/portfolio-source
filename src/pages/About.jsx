import { motion } from 'framer-motion';
import { PageTransition } from '../components/UI';
import { Link } from 'react-router-dom';

const timelineData = [
  {
    year: '2023–Now',
    title: 'CTF Player',
    role: 'Competitive / Self-Learned',
    company: 'Independent',
    desc: 'Actively participating in Capture The Flag (CTF) competitions. Solved challenges in web exploitation, cryptography, reverse engineering, and forensics. Achieved runner-up position in national-level CTF events and continuously improving cybersecurity skills.'
  },
  { year: '2021–23', title: 'Full Stack Engineer', role: 'Full Time', company: 'StartupX', desc: 'Built React/Node.js platforms, integrated APIs, shipped features across multiple products.' },
  { year: '2024–Now', title: 'Junior Developer', role: 'Full Time', company: 'Digital Agency', desc: 'Started career building responsive UIs and REST APIs for a fast-growing startup.' },
];

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="about-hero container mx-auto px-6">
        <div>
          <div className="about-tag">About Me</div>
          <h2>Building<br />Futures<br />Through<br />Code</h2>
          <p>
            Full-stack developer and cybersecurity enthusiast with a strong focus on building secure, scalable, and high-performance applications. Experienced in backend systems, modern frontend frameworks, and real-world security practices.
          </p>

          <p>
            Active CTF player with hands-on expertise in web security, cryptography, reverse engineering, and vulnerability assessment. Passionate about identifying security flaws and implementing robust defenses.
          </p>

          <p>
            Based in Chennai, India. Open to freelance and full-time opportunities in software development and cybersecurity.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-primary">My Projects</Link>
            <button
              className="btn-ghost"
              onClick={() => window.open('https://drive.google.com/file/d/1zy6Ip63b-tsEUTYl8XIWQZk1eoCs-z1z/view', '_blank')}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="about-portrait">
          <div className="portrait-placeholder">
            <div className="portrait-initials">DKV</div>
          </div>
          <div className="portrait-frame"></div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline container mx-auto px-6">
        <div className="timeline-header">Experience</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            {timelineData.slice(0, 3).map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="timeline-header" style={{ paddingTop: 0 }}>Skills</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>React</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>Node.js</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>TypeScript</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>Java</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>C/C++</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>Wireshark</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>Flask</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>Python</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>Mysql</span>
              <span style={{ padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', transition: 'all 0.2s', cursor: 'default' }}>TailwindCSS</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023–27</div>
              <div className="timeline-content">
                <h4>B.E Computer Science and Enginerring Sepcialized with Cyber Secuirty</h4>
                <p>Pre Final Year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
