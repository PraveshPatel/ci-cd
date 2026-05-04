
// ============================================================
//  PORTFOLIO DATA — edit everything in this section
// ============================================================

const DATA = {
  name: "Pravesh Patel",
  role: "React Native & React.js & Next.js Developer",
  available: true, // true = shows "Available for work" badge
  tagline:
    "I build fast, accessible, and beautifully designed web experiences. Specializing in React ecosystems and design systems that scale.",
  stats: [
    { num: "5+", label: "Years exp" },
    { num: "38", label: "Projects" },
    { num: "12", label: "Clients" },
  ],
  skills: [
    { name: "React", hot: true },
    { name: "TypeScript", hot: true },
    { name: "Next.js", hot: true },
    { name: "Tailwind CSS", hot: false },
    { name: "Framer Motion", hot: false },
    { name: "Figma", hot: false },
    { name: "Node.js", hot: false },
    { name: "GraphQL", hot: false },
    { name: "Vite", hot: false },
    { name: "Testing Library", hot: false },
    { name: "Storybook", hot: false },
    { name: "Vercel", hot: false },
    { name: "CSS Animations", hot: false },
    { name: "Accessibility (WCAG)", hot: false },
    { name: "Performance Optimization", hot: false },
  ],
  projects: [
    {
      name: "Radiant Design System",
      tech: "React · TypeScript · Framer",
      desc: "A scalable component library serving 3 product teams with full dark mode and accessibility support.",
      progress: 92,
      link: "#",
    },
    {
      name: "Orbit Analytics Dashboard",
      tech: "Next.js · Supabase · Tailwind",
      desc: "Real-time data visualization platform with custom charting, filtering, and CSV export.",
      progress: 78,
      link: "#",
    },
    {
      name: "Luminary 3D Landing Page",
      tech: "React · Three.js · GSAP",
      desc: "Award-nominated marketing page with WebGL background and scroll-triggered animations.",
      progress: 88,
      link: "#",
    },
    {
      name: "Shelf — E-commerce Platform",
      tech: "Next.js · Stripe · Prisma",
      desc: "Full-stack storefront with cart, checkout, admin panel, and order management.",
      progress: 70,
      link: "#",
    },
  ],
  experience: [
    {
      period: "2022 – Now",
      role: "Senior Frontend Engineer",
      company: "Veritas Labs · Full-time",
      desc: "Leading the frontend architecture of a SaaS platform used by 50k+ users. Reduced bundle size by 40% and improved Core Web Vitals to 98/100.",
    },
    {
      period: "2020 – 2022",
      role: "Frontend Developer",
      company: "Bloom Digital Agency · Full-time",
      desc: "Delivered 15+ client projects. Built reusable component systems and mentored 2 junior developers.",
    },
    {
      period: "2019 – 2020",
      role: "Junior UI Developer",
      company: "Nexgen Studio · Contract",
      desc: "Built pixel-perfect interfaces from Figma designs. Specialized in CSS animations and responsive layouts.",
    },
  ],
  contact: {
    email: "alex@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
};

// ============================================================
//  STYLES
// ============================================================

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --accent: #e63946;
    --font-display: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --bg: #ffffff;
    --surface: #f7f7f5;
    --text: #111111;
    --muted: #888880;
    --border: rgba(0,0,0,0.1);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #111111;
      --surface: #1a1a1a;
      --text: #f0ede8;
      --muted: #888880;
      --border: rgba(255,255,255,0.1);
    }
  }

  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
  }

  .port {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
  }

  /* NAV */
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 0.5px solid var(--border);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.5px;
  }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    font-size: 13px;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }

  /* HERO */
  .hero {
    padding: 5rem 0 4rem;
    border-bottom: 0.5px solid var(--border);
  }
  .available-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1.75rem;
  }
  .available-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
  }
  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(42px, 7vw, 64px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -2px;
    margin-bottom: 1.5rem;
  }
  .hero h1 em {
    font-style: normal;
    color: var(--accent);
  }
  .hero-desc {
    font-size: 16px;
    color: var(--muted);
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 2.5rem;
    font-weight: 300;
  }
  .hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary {
    padding: 12px 28px;
    background: var(--text);
    color: var(--bg);
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-primary:hover { opacity: 0.75; }
  .btn-ghost {
    padding: 12px 28px;
    background: transparent;
    color: var(--text);
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    border: 0.5px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-ghost:hover { background: var(--surface); }

  /* STATS */
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
    border: 0.5px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }
  .stat {
    padding: 1.5rem 1rem;
    text-align: center;
    border-right: 0.5px solid var(--border);
  }
  .stat:last-child { border-right: none; }
  .stat-num {
    font-family: var(--font-display);
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -1px;
  }
  .stat-label {
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 4px;
  }

  /* SECTIONS */
  .section { padding: 4rem 0; border-bottom: 0.5px solid var(--border); }
  .section-header {
    display: flex;
    align-items: baseline;
    gap: 14px;
    margin-bottom: 2.5rem;
  }
  .section-num { font-size: 11px; color: var(--muted); letter-spacing: 0.12em; }
  .section-title {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  /* SKILLS */
  .skills-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-tag {
    padding: 7px 16px;
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: 20px;
    font-size: 13px;
    font-weight: 400;
  }
  .skill-tag.hot {
    background: rgba(230, 57, 70, 0.08);
    border-color: rgba(230, 57, 70, 0.3);
    color: var(--accent);
    font-weight: 500;
  }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: 600px) {
    .projects-grid { grid-template-columns: 1fr; }
  }
  .project-card {
    background: var(--surface);
    border: 0.5px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    transition: border-color 0.2s;
  }
  .project-card:hover { border-color: rgba(0,0,0,0.3); }
  .project-tech {
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 0.75rem;
  }
  .project-name {
    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 0.5rem;
    letter-spacing: -0.3px;
  }
  .project-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.65;
    font-weight: 300;
  }
  .project-bar {
    height: 3px;
    background: var(--border);
    border-radius: 2px;
    margin-top: 1.5rem;
    overflow: hidden;
  }
  .project-bar-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--accent);
    transition: width 1s ease;
  }
  .project-link {
    display: inline-block;
    font-size: 12px;
    color: var(--accent);
    margin-top: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
  .project-link:hover { text-decoration: underline; }

  /* EXPERIENCE */
  .exp-item {
    display: flex;
    gap: 2rem;
    padding: 1.5rem 0;
    border-bottom: 0.5px solid var(--border);
  }
  .exp-item:last-child { border-bottom: none; }
  .exp-period {
    font-size: 11px;
    color: var(--muted);
    min-width: 90px;
    padding-top: 4px;
    letter-spacing: 0.04em;
    flex-shrink: 0;
  }
  .exp-role {
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
  .exp-company { font-size: 13px; color: var(--muted); margin-top: 3px; }
  .exp-desc {
    font-size: 13px;
    color: var(--muted);
    margin-top: 8px;
    line-height: 1.65;
    font-weight: 300;
  }

  /* CONTACT */
  .contact {
    padding-top: 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .contact h2 {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.2;
  }
  .contact p { font-size: 13px; color: var(--muted); margin-top: 8px; }
  .contact-links { display: flex; gap: 10px; flex-wrap: wrap; }
  .contact-btn {
    padding: 10px 20px;
    border: 0.5px solid var(--border);
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    color: var(--text);
    font-family: var(--font-body);
    text-decoration: none;
    display: inline-block;
    transition: background 0.2s;
  }
  .contact-btn:hover { background: var(--surface); }
`;

// ============================================================
//  COMPONENTS
// ============================================================

function Nav() {
  const initials = DATA.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <nav className="nav">
      <div className="nav-logo">
        {initials}
        <span>.</span>
      </div>
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  const [firstName, ...rest] = DATA.name.split(" ");
  const lastName = rest.join(" ");
  return (
    <section className="hero">
      {DATA.available && (
        <div className="available-badge">
          <span className="available-dot" />
          Available for work
        </div>
      )}
      <h1>
        {firstName}
        <br />
        {lastName}
        <br />
        <em>{DATA.role}</em>
      </h1>
      <p className="hero-desc">{DATA.tagline}</p>
      <div className="hero-cta">
        <a className="btn-primary" href={`mailto:${DATA.contact.email}`}>
          Get in touch →
        </a>
        <a className="btn-ghost" href="#work">
          View Work
        </a>
      </div>
      <div className="stats">
        {DATA.stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-num">01 —</span>
        <span className="section-title">Skills & Stack</span>
      </div>
      <div className="skills-grid">
        {DATA.skills.map((s) => (
          <span key={s.name} className={`skill-tag${s.hot ? " hot" : ""}`}>
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-header">
        <span className="section-num">02 —</span>
        <span className="section-title">Selected Work</span>
      </div>
      <div className="projects-grid">
        {DATA.projects.map((p) => (
          <div key={p.name} className="project-card">
            <div className="project-tech">{p.tech}</div>
            <div className="project-name">{p.name}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-bar">
              <div
                className="project-bar-fill"
                style={{ width: `${p.progress}%` }}
              />
            </div>
            <a className="project-link" href={p.link}>
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <span className="section-num">03 —</span>
        <span className="section-title">Experience</span>
      </div>
      {DATA.experience.map((e) => (
        <div key={e.role} className="exp-item">
          <div className="exp-period">{e.period}</div>
          <div>
            <div className="exp-role">{e.role}</div>
            <div className="exp-company">{e.company}</div>
            <div className="exp-desc">{e.desc}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <h2>
          Let's build something
          <br />
          great together.
        </h2>
        <p>Open to full-time roles and freelance projects.</p>
      </div>
      <div className="contact-links">
        <a className="contact-btn" href={`mailto:${DATA.contact.email}`}>
          Email
        </a>
        <a className="contact-btn" href={DATA.contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="contact-btn" href={DATA.contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

// ============================================================
//  APP
// ============================================================

export default function App() {
  return (
    <>
      <style>{css}</style>
      <div className="port">
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}