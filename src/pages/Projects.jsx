import { useState } from 'react';
import { PageTransition, Reveal, ProjectCard } from '../components/UI';
import { projects } from '../data';

const categories = ['All', 'Web', 'Security'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeCategory.toLowerCase()));

  return (
    <PageTransition>
      <section className="page-hero container">
        <Reveal>
          <div className="eyebrow">Selected work</div>
          <h1 className="page-title">Projects</h1>
          <p className="lead">Full-stack applications and security tooling I've built, from encrypted data platforms to network compliance engines.</p>
        </Reveal>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="container section-tight">
        <div className="grid grid-3" key={activeCategory}>
          {filteredProjects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
        <Reveal className="more-link">
          <a href="https://github.com/diliprx" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <i className="fa-brands fa-github" /> More on GitHub
          </a>
        </Reveal>
      </section>
    </PageTransition>
  );
}
