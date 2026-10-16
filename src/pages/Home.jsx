import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageTransition, Reveal, SectionHeader, ProjectCard, SocialLinks } from '../components/UI';
import { profile, stats, services, projects, featuredAchievement } from '../data';

const terminalLines = [
  { prompt: 'whoami', out: 'dilip — frontend developer & security engineer' },
  { prompt: 'cat stack.txt', out: 'react · typescript · fastapi · mysql' },
  { prompt: 'cat security.txt', out: 'owasp top 10 · vapt · burp suite · nmap' },
  { prompt: 'cat status.txt', out: 'open to software & security roles', accent: true },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <motion.div
              className="status-pill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="dot" /> Available for work
            </motion.div>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm Dilip.<br />
              I build <span className="accent">secure</span> web apps.
            </motion.h1>
            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend & full-stack developer and Computer Science (Cyber Security) student from {profile.location.split(',')[0]}.
              I work with React.js, TypeScript, FastAPI, and MySQL, and I break things in CTFs and bug bounties.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/projects" className="btn btn-primary">View Projects <i className="fa-solid fa-arrow-right" /></Link>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <i className="fa-solid fa-download" /> Resume
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              <SocialLinks className="hero-socials" />
            </motion.div>
          </div>

          <motion.div
            className="terminal"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            aria-label="Profile summary"
          >
            <div className="terminal-bar">
              <span /><span /><span />
              <div className="terminal-title">dilip@portfolio:~</div>
            </div>
            <div className="terminal-body">
              {terminalLines.map(({ prompt, out, accent }) => (
                <div key={prompt} className="terminal-line">
                  <div><span className="accent">$</span> {prompt}</div>
                  <div className={accent ? 'accent' : 'muted'}>{out}</div>
                </div>
              ))}
              <div><span className="accent">$</span> <span className="cursor" /></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container">
        <div className="stats">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="stat">
              <div className="stat-num">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section className="section container">
        <SectionHeader eyebrow="What I do" title="Development meets security" lead="I build web applications end to end and look at them the way an attacker would." />
        <div className="grid grid-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="card service-card">
              <div className="icon-box"><i className={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="section container">
        <div className="section-row">
          <SectionHeader eyebrow="Selected work" title="Featured projects" />
          <Link to="/projects" className="text-link">All projects <i className="fa-solid fa-arrow-right" /></Link>
        </div>
        <div className="grid grid-3">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </section>

      {/* Highlight */}
      <section className="section container">
        <Reveal className="highlight">
          <div className="icon-box lg"><i className="fa-solid fa-bug" /></div>
          <div>
            <div className="eyebrow">Recognition</div>
            <h3>{featuredAchievement.title}</h3>
            <p>{featuredAchievement.desc} Also 1st Prize at the CyberCom & Zapsters CTF.</p>
          </div>
          <Link to="/achievements" className="btn btn-outline">All achievements</Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="section container">
        <Reveal className="cta">
          <h2>Let's build something <span className="accent">secure</span> together.</h2>
          <p>Open to Software Engineer, Frontend Engineer, and Cyber Security roles.</p>
          <Link to="/contact" className="btn btn-primary">Get in touch <i className="fa-solid fa-arrow-right" /></Link>
        </Reveal>
      </section>
    </PageTransition>
  );
}
