import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  Sparkles,
  Sun,
  X,
  Zap
} from "lucide-react";
import { experiences, learning, profile, projects, skills } from "./data/profile";

const sections = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["leetcode", "LeetCode"],
  ["contact", "Contact"]
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
          <span className="brand-mark">SA</span>
          <span>Sajid Ansari</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {sections.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for backend engineering opportunities</div>
            <h1>
              Building backend systems
              <span className="gradient-text"> that scale.</span>
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo("projects")}>
                View projects <ArrowUpRight size={17} />
              </button>
              <a className="secondary-button" href="/Sajid_Ansari_Resume.pdf" download>
                Download resume <Download size={17} />
              </a>
            </div>

            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={18} /> LeetCode</a>
              <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-bar">
                <span /><span /><span />
                <label>backend-engineer.java</label>
              </div>
              <pre><code>{`public class BackendEngineer {

  private final Java java;
  private final SpringBoot spring;
  private final Kafka kafka;
  private final AWS cloud;

  public System build() {
      return scalable()
          .eventDriven()
          .observable()
          .productionReady();
  }
}`}</code></pre>
              <div className="terminal-line"><span>$</span> ship --reliably --at-scale <i>▊</i></div>
            </div>
          </div>
        </section>

        <section className="metrics-strip">
          {profile.highlights.map((item) => (
            <div className="metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section two-column">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2>Backend engineering with a production mindset.</h2>
          </div>
          <div className="section-copy">
            <p>
              I build backend services where reliability, throughput and maintainability matter.
              My experience spans enterprise modernization, reactive programming, asynchronous
              messaging, database performance and cloud-native deployment.
            </p>
            <p>
              I currently work with Java and the Spring ecosystem while deepening my understanding
              of Data Structures & Algorithms, System Design and Distributed Systems.
            </p>
            <div className="mini-facts">
              <span><MapPin size={16} /> {profile.location}</span>
              <span><BriefcaseBusiness size={16} /> Cognizant</span>
              <span><GraduationCap size={16} /> B.Tech · Computer Science</span>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / TOOLBOX</p>
              <h2>Technical expertise</h2>
            </div>
            <Server className="section-icon" size={34} />
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tag-list">
                  {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / EXPERIENCE</p>
              <h2>Building and modernizing production systems.</h2>
            </div>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.title + experience.period}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <span className="period">{experience.period}</span>
                      <h3>{experience.title}</h3>
                      <p className="company">{experience.company}</p>
                    </div>
                    <span className="product-label">{experience.product}</span>
                  </div>
                  <div className="tag-list compact">
                    {experience.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                  <ul>
                    {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">04 / PROJECTS</p>
              <h2>Selected work</h2>
            </div>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
              Explore GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list compact">
                  {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
                <ul>
                  {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="leetcode" className="section leetcode-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">05 / PROBLEM SOLVING</p>
              <h2>LeetCode, automated.</h2>
            </div>
            <a className="text-link" href={profile.leetcodeRepo} target="_blank" rel="noreferrer">
              Open repository <ArrowUpRight size={16} />
            </a>
          </div>

          <p className="section-intro">
            My existing GitHub Action automatically generates these assets from my LeetCode activity.
            Solve a problem on LeetCode and the dashboard can update without changing this portfolio.
          </p>

          <div className="leetcode-card">
            <img src={profile.leetcodeStats} alt="Sajid Ansari LeetCode statistics" />
          </div>
          <div className="leetcode-card heatmap">
            <img src={profile.leetcodeHeatmap} alt="Sajid Ansari LeetCode activity heatmap" />
          </div>
          <div className="leetcode-bottom">
            <div className="leetcode-card">
              <img src={profile.leetcodeMetrics} alt="Sajid Ansari LeetCode progress metrics" />
            </div>
            <a className="recent-link" href={profile.leetcodeRecent} target="_blank" rel="noreferrer">
              <span>
                <Code2 size={20} />
                <strong>Recent LeetCode problems</strong>
                <small>View automatically generated problem history and daily logs.</small>
              </span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </section>

        <section className="section learning-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">06 / CURRENT FOCUS</p>
              <h2>What I'm learning next</h2>
            </div>
            <Sparkles className="section-icon" size={32} />
          </div>
          <div className="learning-grid">
            {learning.map((item) => (
              <div className="learning-item" key={item}>
                <Zap size={16} />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <p className="section-kicker">07 / CONTACT</p>
            <h2>Let's build something reliable.</h2>
            <p>
              Interested in Java backend engineering, distributed systems,
              scalable APIs or AI-powered applications? Let's connect.
            </p>
            <div className="contact-actions">
              <a className="primary-button" href={`mailto:${profile.email}`}>
                <Mail size={17} /> {profile.email}
              </a>
              <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Sajid Ansari</span>
        <span>Java · Spring Boot · Distributed Systems</span>
      </footer>

      <button className="scroll-hint" onClick={() => scrollTo("about")} aria-label="Scroll to about">
        <ChevronDown size={18} />
      </button>
    </div>
  );
}

export default App;
