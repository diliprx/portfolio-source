import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition, ContactInfoItem, Toast } from '../components/UI';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [toastShow, setToastShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setToastShow(true);
      setFormData({ name: '', email: '', type: '', message: '' });
      setTimeout(() => setToastShow(false), 3500);
    }, 1500);
  };

  return (
    <PageTransition>
      <Toast show={toastShow} />

      {/* Hero */}
      <section className="contact-hero container mx-auto px-6">
        <div className="contact-left">
          <div className="tag">Get in Touch</div>
          <h2>
            Let's Build<br />
            Something<br />
            <em>Great</em>
          </h2>
          <p>Have a project in mind? I'd love to hear about it. Let's talk about how we can work together to create something exceptional.</p>
          <div>
            <ContactInfoItem label="Email" value="dilipkumarv1866@gmail.com" />
            <ContactInfoItem label="Location" value="Chennai, Tamil Nadu, India" />
            <ContactInfoItem label="Status" value="● Available for work" />
            <ContactInfoItem label="Response" value="Within 24 hours" />
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Dilip K. Venkatesan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-row">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-row">
              <label>Project Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="">Select a type...</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>AI/ML Project</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
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

