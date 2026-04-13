import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="nav backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between w-full">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="nav-logo">
            DKV<span>.</span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="flex-1 flex justify-center">
          <div className="nav-links">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path || (path === '/' && location.pathname === '');
              return (
                <Link
                  key={path}
                  to={path}
                  className={`nav-links a ${isActive ? 'active' : ''}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className="flex-1 flex justify-end">
          <Link to="/contact" className="nav-cta">
            Hire Me
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
