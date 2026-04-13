import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition, FilterBtn, ProjItem } from '../components/UI';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack marketplace with real-time inventory, Stripe payments, and an admin dashboard — handling 10K+ daily transactions.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'web'
  },
  {
    title: 'AI Document Analyzer',
    description: 'An LLM-powered tool that extracts insights from PDF documents, built for legal and financial teams to cut review time by 70%.',
    tags: ['Python', 'LangChain', 'FastAPI', 'React'],
    category: 'ai'
  },
  {
    title: 'Fitness Tracker App',
    description: 'Cross-platform mobile app with workout plans, progress charts, and social features — 50K+ downloads on iOS & Android.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    category: 'mobile'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for a B2B SaaS company with real-time charts, team management, and billing portal.',
    tags: ['Next.js', 'TailwindCSS', 'Prisma'],
    category: 'web'
  },
  {
    title: 'Resume Screener AI',
    description: 'Automated hiring tool that ranks candidates using ML scoring, reducing recruiter workload by 60%.',
    tags: ['Python', 'scikit-learn', 'Django'],
    category: 'ai'
  },
  {
    title: 'Food Delivery App',
    description: 'End-to-end food ordering app with GPS tracking, restaurant dashboard, and payment gateway for 200+ local restaurants.',
    tags: ['Flutter', 'Node.js', 'MongoDB'],
    category: 'mobile'
  },
];

const categories = ['All', 'Web', 'Mobile', 'AI/ML'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory.toLowerCase().replace('/', ''));

  const renumberProjects = () => {
    let num = 1;
    filteredProjects.forEach(p => p.tempNum = String(num++).padStart(2, '0'));
  };
  renumberProjects();

  return (
    <PageTransition>
      {/* Header */}
      <header className="proj-header container mx-auto px-6">
        <div className="tag">Selected Work</div>
        <h2>Projects &<br/>Case Studies</h2>
        <div className="proj-filter" style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <FilterBtn 
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </FilterBtn>
          ))}
        </div>
      </header>

      {/* List */}
      <section className="proj-list container mx-auto px-6">
        {filteredProjects.map((project, index) => (
          <ProjItem 
            key={index}
            num={project.tempNum}
            {...project}
            onClick={() => {}} // Add project detail modal later
          />
        ))}
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

