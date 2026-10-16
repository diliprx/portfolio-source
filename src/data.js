// Single source of truth for portfolio content (kept in sync with the developer & cyber security resumes)

export const profile = {
  name: 'Dilip Kumar V',
  email: 'dilipvenkat2006@gmail.com',
  location: 'Chennai, Tamil Nadu, India',
  cv: 'https://drive.google.com/file/d/1zy6Ip63b-tsEUTYl8XIWQZk1eoCs-z1z/view',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/diliprx', icon: 'fa-brands fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diliprx/', icon: 'fa-brands fa-linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/dilip__rx/', icon: 'fa-brands fa-leetcode' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/CleObsecure', icon: 'fa-solid fa-terminal' },
  { label: 'X', href: 'https://x.com/dilip__rx', icon: 'fa-brands fa-x-twitter' },
];

export const stats = [
  { number: '2', label: 'Internships' },
  { number: '3', label: 'Major Projects' },
  { number: '7', label: 'Hackathon & CTF Awards' },
  { number: '4', label: 'Certifications' },
];

export const services = [
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Frontend Development',
    desc: 'Responsive, component-based interfaces with React.js, TypeScript, Next.js, and Tailwind CSS.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Backend & APIs',
    desc: 'REST APIs with FastAPI and Node.js, authentication, RBAC, and MySQL / SQLite data layers.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Web Security & VAPT',
    desc: 'OWASP Top 10 testing with Burp Suite, Nmap, Gobuster, and Ghidra. Bug bounty and CTF experience.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Network Security',
    desc: 'NetFlow analysis, compliance reporting, and traffic inspection with Wireshark and Snort.',
  },
];

export const experience = [
  {
    period: 'Jun 2026 — Sep 2026',
    role: 'Cyber Security Intern',
    company: 'HTC Global Services, Chennai',
    points: [
      'Engineered a Python-based NetFlow Compliance Report Engine that automated enterprise network traffic analysis and compliance reporting.',
      'Analyzed asset-to-IP communication patterns and NetFlow logs to detect compliance violations and NAT bypass incidents, producing risk-based security insights.',
    ],
  },
  {
    period: 'Jun 2025 — Jul 2025',
    role: 'Frontend Developer Intern',
    company: 'Codeship Pvt Ltd, Chennai',
    points: [
      'Developed responsive, mobile-first interfaces with React.js, JavaScript (ES6+), and Tailwind CSS.',
      'Built reusable components with Hooks and integrated RESTful APIs with loading, error, and empty states.',
      'Collaborated through Git/GitHub branching, pull requests, and code reviews.',
    ],
  },
  {
    period: '2023 — Now',
    role: 'Bug Bounty Hunter & CTF Player',
    company: 'Independent',
    points: [
      'Recognized in the Accenture Bug Bounty Hall of Fame for responsibly disclosing a security vulnerability.',
      'Competing in CTFs across web exploitation, cryptography, reverse engineering, and forensics.',
    ],
  },
];

export const education = [
  {
    period: '2023 — 2027',
    title: 'B.E. Computer Science and Engineering (Cyber Security)',
    place: 'R.M.K. College of Engineering and Technology, Thiruvallur',
    detail: 'CGPA 7.18 (up to 6th semester)',
  },
  {
    period: '2020 — 2022',
    title: 'Higher Secondary Education (Class XII)',
    place: 'Velammal Vidhyashram, Chennai',
    detail: '72.8%',
  },
];

export const skillGroups = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend & Databases', items: ['FastAPI', 'Node.js', 'REST APIs', 'Authentication', 'RBAC', 'MySQL', 'SQLite', 'DuckDB'] },
  { title: 'Cyber Security', items: ['OWASP Top 10', 'VAPT', 'Burp Suite', 'Nmap', 'Wireshark', 'Snort', 'Ghidra', 'Gobuster'] },
  { title: 'Languages & Tools', items: ['Java', 'Python', 'C / C++', 'SQL', 'Git & GitHub', 'Docker', 'Linux', 'Postman'] },
];

export const projects = [
  {
    title: 'NetFlow Compliance Report Engine',
    context: 'HTC Global Services',
    icon: 'fa-solid fa-network-wired',
    description: 'Python engine that analyzes enterprise NetFlow traffic to detect network anomalies, unauthorized public IP access, NAT bypass events, gateway inconsistencies, and suspicious protocol/port usage, then generates automated risk-based compliance reports.',
    tags: ['Python', 'NetFlow Analysis', 'Network Security'],
    categories: ['security'],
    link: 'https://github.com/diliprx/HTC_1',
  },
  {
    title: 'PII Vault',
    context: 'Secure Personal Data Management',
    icon: 'fa-solid fa-lock',
    description: 'Secure platform for sensitive personal data (Aadhaar, PAN, passport, banking records) with AES-256-GCM encryption at rest, FastAPI REST APIs, and role-based access for users, administrators, and auditors. Assume-breach architecture separates encrypted storage from key management, with audit logging.',
    tags: ['React.js', 'TypeScript', 'FastAPI', 'MySQL', 'AES-256-GCM'],
    categories: ['security', 'web'],
    link: 'https://github.com/diliprx/secure_pii_storage',
  },
  {
    title: 'Campus Connect',
    context: 'College Management & Placement Platform',
    icon: 'fa-solid fa-graduation-cap',
    description: 'Role-based platform with responsive React.js dashboards for students, faculty, placement administrators, and super administrators, backed by REST APIs and a MySQL database for student, faculty, and placement workflows.',
    tags: ['React.js', 'FastAPI', 'MySQL', 'RBAC'],
    categories: ['web'],
  },
];

export const featuredAchievement = {
  title: 'Accenture Bug Bounty — Hall of Fame',
  desc: 'Recognized for responsibly disclosing a security vulnerability through Accenture’s bug bounty program.',
};

export const achievements = [
  { title: '1st Prize — CTF', org: 'CyberCom & Zapsters', date: 'Feb 2026', type: 'ctf' },
  {titile:'1st Prize — CTF', org: 'IEEE TECHX MADRDAS & Sairam Engineering College', date: 'Oct 2026', type: 'ctf' },
  { title: '3rd Prize — 36-Hour Hackathon', org: 'Prince Shri Bhavani College of Engineering & Technology', note: 'Built a crime hotspot tracking solution', date: 'Jul 2025', type: 'hackathon' },
  { title: '3rd Prize — CTF', org: 'SRMIST & h7tex', date: 'Jul 2024', type: 'ctf' },
  { title: '4th Place — Hackathon', org: 'Sri Venkateswara College of Engineering', date: 'Nov 2025', type: 'hackathon' },
  { title: '10th Place — TN Police Hackathon 2025', org: 'TOR Unveil: Peel the Onion', note: 'TOR analytics, node correlation & dashboards', date: '2025', type: 'hackathon' },
  { title: 'Runner-Up — Web Dev Hackathon', org: 'Velammal Engineering College', type: 'hackathon' },
  { title: '2nd Place — Web Dev Hackathon', org: 'COGNEBULA', type: 'hackathon' },
  { title: '3rd Position — CTF', org: 'Sri Venkateswara College of Engineering', date: 'Mar 2026', type: 'ctf' },
  { title: '5th Position — Hackathon', org: 'Sri Sairam Engineering College', date: 'Oct 2025', type: 'hackathon' },
  { title: '10th Position — CTF', org: 'Kumaraguru College of Technology', date: 'Feb 2026', type: 'ctf' },
];

export const certifications = [
  { title: 'Ethical Hacking Essentials', issuer: 'EC-Council' },
  { title: 'APIsec Certified Practitioner', issuer: 'APIsec University' },
  { title: 'Programming in Java', issuer: 'NPTEL' },
  { title: 'Introduction to Internet of Things', issuer: 'NPTEL' },
];
