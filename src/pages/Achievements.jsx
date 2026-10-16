import { Link } from 'react-router-dom';
import { PageTransition, Reveal, SectionHeader, Marquee } from '../components/UI';
import { achievements, certifications, featuredAchievement } from '../data';

const typeIcon = {
  ctf: 'fa-solid fa-flag',
  hackathon: 'fa-solid fa-trophy',
};

const marqueeItems = [
  'Accenture Bug Bounty Hall of Fame', '1st Prize CyberCom & Zapsters CTF', '3rd Hackathon Prince Shri Bhavani',
  '3rd CTF SRMIST & h7tex', '4th Hackathon Sri Venkateswara', '10th TN Police Hackathon 2025',
  'Runner-Up Velammal Web Dev Hackathon', '2nd COGNEBULA Web Dev Hackathon',
];

export default function Achievements() {
  return (
    <PageTransition>
      <section className="page-hero container">
        <Reveal>
          <div className="eyebrow">Recognition</div>
          <h1 className="page-title">Achievements</h1>
          <p className="lead">Bug bounty recognition, CTF podiums, and hackathon results.</p>
        </Reveal>
      </section>

      <Marquee items={marqueeItems} />

      <section className="section container">
        <Reveal className="highlight">
          <div className="icon-box lg"><i className="fa-solid fa-bug" /></div>
          <div>
            <div className="eyebrow">Bug Bounty</div>
            <h3>{featuredAchievement.title}</h3>
            <p>{featuredAchievement.desc}</p>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Competitions" title="CTFs & hackathons" />
        <div className="grid grid-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title + a.org} delay={(i % 3) * 0.06} className="card ach-card">
              <div className="ach-top">
                <div className="icon-box sm"><i className={typeIcon[a.type]} /></div>
                <span className="badge">{a.type === 'ctf' ? 'CTF' : 'Hackathon'}</span>
              </div>
              <h3>{a.title}</h3>
              <p className="ach-org">{a.org}</p>
              {a.note && <p className="ach-note">{a.note}</p>}
              {a.date && <div className="ach-date">{a.date}</div>}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Certifications" title="Credentials" />
        <div className="grid grid-4">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="card cert-card">
              <div className="icon-box sm"><i className="fa-solid fa-certificate" /></div>
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <Reveal className="cta">
          <h2>Want someone who thinks like an <span className="accent">attacker</span>?</h2>
          <Link to="/contact" className="btn btn-primary">Let's work together <i className="fa-solid fa-arrow-right" /></Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
