import { Link } from 'react-router-dom';
import { PageTransition, Reveal, SectionHeader } from '../components/UI';
import { profile, experience, education, skillGroups } from '../data';

const quickFacts = [
  { icon: 'fa-solid fa-location-dot', label: 'Based in', value: 'Chennai, India' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Studying', value: 'B.E. CSE (Cyber Security)' },
  { icon: 'fa-solid fa-briefcase', label: 'Looking for', value: 'SWE / Frontend / Security roles' },
  { icon: 'fa-solid fa-bug', label: 'Recognition', value: 'Accenture Bug Bounty Hall of Fame' },
];

export default function About() {
  return (
    <PageTransition>
      {/* Intro */}
      <section className="page-hero container">
        <div className="about-grid">
          <Reveal>
            <div className="eyebrow">About me</div>
            <h1 className="page-title">Developer by craft,<br /><span className="accent">security</span> by mindset.</h1>
            <p className="lead">
              I'm a Computer Science and Engineering (Cyber Security) student and Frontend Developer with internship
              experience in React.js frontend development and Python-based security automation.
            </p>
            <p className="lead">
              I build full-stack applications with React.js, TypeScript, FastAPI, and MySQL, grounded in Data Structures &
              Algorithms, OOP, DBMS, and secure coding (OWASP Top 10, RBAC, encryption). Outside of work, I compete in CTFs
              and hunt bugs, with hands-on Web Security and VAPT experience.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">My Projects</Link>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <i className="fa-solid fa-download" /> Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card facts">
            {quickFacts.map(f => (
              <div key={f.label} className="fact">
                <div className="icon-box sm"><i className={f.icon} /></div>
                <div>
                  <div className="fact-label">{f.label}</div>
                  <div className="fact-value">{f.value}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="section container">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.06} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-period">{item.period}</div>
              <div className="card timeline-card">
                <h3>{item.role}</h3>
                <div className="timeline-company">{item.company}</div>
                <ul>
                  {item.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section container">
        <SectionHeader eyebrow="Skills" title="Tools I work with" />
        <div className="grid grid-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="card">
              <h3 className="card-title">{group.title}</h3>
              <div className="tags">
                {group.items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section container">
        <SectionHeader eyebrow="Education" title="Academic background" />
        <div className="grid grid-2">
          {education.map((ed, i) => (
            <Reveal key={ed.title} delay={i * 0.06} className="card edu-card">
              <div className="edu-period">{ed.period}</div>
              <h3>{ed.title}</h3>
              <p>{ed.place}</p>
              <div className="edu-detail">{ed.detail}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
