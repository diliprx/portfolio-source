import { useState } from 'react';
import { PageTransition, Reveal, Toast } from '../components/UI';
import { profile } from '../data';

const contactItems = [
  { icon: 'fa-solid fa-envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/diliprx', href: 'https://www.linkedin.com/in/diliprx/' },
  { icon: 'fa-brands fa-github', label: 'GitHub', value: 'github.com/diliprx', href: 'https://github.com/diliprx' },
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: profile.location },
];

const emptyForm = { name: '', email: '', type: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [toastShow, setToastShow] = useState(false);

  const update = field => e => setFormData({ ...formData, [field]: e.target.value });

  // No backend: open the visitor's mail client with the message pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${formData.type || 'Portfolio enquiry'} — ${formData.name}`;
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setToastShow(true);
    setFormData(emptyForm);
    setTimeout(() => setToastShow(false), 3500);
  };

  return (
    <PageTransition>
      <Toast show={toastShow} message="Opening your email app…" />

      <section className="page-hero container">
        <div className="contact-grid">
          <Reveal>
            <div className="eyebrow">Get in touch</div>
            <h1 className="page-title">Let's build something <span className="accent">great</span>.</h1>
            <p className="lead">
              Hiring for a Software Engineer, Frontend, or Cyber Security role, or have a project in mind?
              Send me a message and I'll get back to you.
            </p>
            <div className="status-pill"><span className="dot" /> Available for work</div>
            <div className="contact-list">
              {contactItems.map(item => {
                const content = (
                  <>
                    <div className="icon-box sm"><i className={item.icon} /></div>
                    <div>
                      <div className="fact-label">{item.label}</div>
                      <div className="fact-value">{item.value}</div>
                    </div>
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-item">
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="contact-item">{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" type="text" placeholder="Your name" value={formData.name} onChange={update('name')} required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" placeholder="you@company.com" value={formData.email} onChange={update('email')} required />
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="type">Reason</label>
                <select id="type" value={formData.type} onChange={update('type')}>
                  <option value="">Select a reason...</option>
                  <option>Job / Internship Opportunity</option>
                  <option>Web Development</option>
                  <option>Cyber Security / VAPT</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about the role or project..." value={formData.message} onChange={update('message')} required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send message <i className="fa-solid fa-paper-plane" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
