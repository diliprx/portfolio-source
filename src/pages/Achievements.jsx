import { motion } from 'framer-motion';
import { PageTransition, Marquee, AchCard } from '../components/UI';
import { Link } from 'react-router-dom';

const achievements = [
  { title: 'Secured 1st prize, CyberCom & Zapsters (CTF)', meta: '23/02/2026' },
  { title: 'Secured 3rd position, Sri New Prince Bhavani Engineering College (HACKATHON)', meta: '01/07/2025' },
  { title: 'Completed 3rd Position, SRMIST & h7tex (CTF)', meta: '01/07/2024' },
  { title: 'Secured 3rd Position, Sri Venkateswara College of Engineering(CTF)', meta: '27/03/2026' },
  { title: 'Finished 5th Position, Sri Sairam Engineering College (HACKATHON)', meta: '28/10/2025' },
  { title: 'Completed 4th Position, Sri Venkateswara College of Engineering (HACKATHON)', meta: '25/11/2025' },
  { title: 'Completed 10th Position, Kumaraguru College of Technology (CTF)', meta: '14/02/2026' },
];

const marqueeItems = [
  '1st Prize CyberCom & Zapsters CTF', '3rd Hackathon Sri New Prince Bhavani', '3rd CTF SRMIST & h7tex',
  '3rd CTF Sri Venkateswara College', '5th Hackathon Sri Sairam', '4th Hackathon Sri Venkateswara',
  '10th CTF Kumaraguru College'
];

export default function Achievements() {
  return (
    <PageTransition>
      {/* Header */}
      <header className="ach-header container mx-auto px-6">
        <div className="tag">
          <span>✦</span> Recognition
        </div>
        <h2>
          Achieve<br />
          <em>ments</em>
        </h2>
      </header>

      {/* Marquee */}
      <Marquee>
        {marqueeItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item}
          </div>
        ))}
      </Marquee>

      {/* Grid */}
      <section className="ach-grid container mx-auto px-6">
        {achievements.map((ach, index) => (
          <AchCard key={index} {...ach} />
        ))}
        
      </section>

      {/* CTA */}
      <section className="ach-end container mx-auto px-6 py-20 text-center border-t border-current/10">
        <div className="cta-wrapper">
          <Link to="/contact" className="btn-primary inline-block">Let's Work Together</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 mt-12 md:mt-20">
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

