import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowUp,
  faDownload,
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faChartLine,
  faDatabase,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Navbar from "./components/Navbar";
import profileImage from "./assets/images/Profile.png";
import Project1 from "./assets/images/Project-1.png";
import Project2 from "./assets/images/Project-2.3f7cdd3ecbb8cf1fe86b.png";
import Project3 from "./assets/images/Project-3.a503c746c8192f408a0d.png";
import Project4 from "./assets/images/Project-4.20389aed08ac249bb7bf.png";
import Project5 from "./assets/images/Project-5.444a72667c06bc2ac874.png";
import Project6 from "./assets/images/Project-6.8e8d39e535956e45d48b.png";

const RESUME_URL = process.env.PUBLIC_URL + "/resume.pdf";

/* ---------- Typing effect for hero roles ---------- */
const TYPING_ROLES = [
  "Data Analyst @ BMO",
  "Regulatory Reporting | FR 2052a",
  "Liquidity Risk Analytics",
  "Data Engineer",
  "BI Developer",
];

function TypeWriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPING_ROLES[roleIndex];
    let delay = deleting ? 45 : 95;
    if (!deleting && text === fullText) delay = 1800;
    if (deleting && text === "") delay = 400;

    const timer = setTimeout(() => {
      if (!deleting && text === fullText) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % TYPING_ROLES.length);
      } else {
        setText(
          deleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <span className="typing-text">
      {text}
      <span className="typing-caret" />
    </span>
  );
}

/* ---------- Animated counter (starts when scrolled into view) ---------- */
function Counter({ end, suffix, label, delay }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div
      className="stat-card reveal reveal-scale"
      data-delay={delay}
      ref={ref}
    >
      <span className="stat-number">
        {value}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ---------- Data ---------- */
const EXPERIENCES = [
  {
    title: "Data Analyst — Regulatory Reporting (FR 2052a)",
    company: "BMO Financial Group",
    location: "Chicago, IL",
    duration: "Sep 2025 – Present",
    details: [
      "Strengthen LCR and NSFR reporting across products and sources by analyzing data gaps, enhancing source-to-target mappings, and improving transformations and validations — increasing data accuracy, consistency, and liquidity insights for Treasury and Liquidity Risk teams.",
      "Design and optimize data engineering workflows that integrate upstream systems and transform them into FR 2052a 6G-compliant reported variables, enabling timely consolidated liquidity submissions.",
      "Improve reporting performance and stability by migrating and refactoring legacy workflows to 6G, resolving data quality and reconciliation issues, and optimizing ETL design to reduce runtime and reinforce liquidity reporting governance.",
    ],
  },
  {
    title: "Data Analyst Intern — Insights & Decision Intelligence",
    company: "Global Digital Next",
    location: "Chicago, IL",
    duration: "June 2025 – Aug 2025",
    details: [
      "Delivered actionable business insights by cleaning and analyzing datasets with SQL and Python, diagnosing business problems and designing effective solutions.",
      "Built Power BI dashboards to track KPIs and support data-driven decisions across products and operations.",
    ],
  },
  {
    title: "Data Analyst Intern — Risk Data & Technology Infrastructure (ERPM)",
    company: "BMO Financial Group",
    location: "Chicago, IL",
    duration: "Jan 2025 – May 2025",
    details: [
      "Optimized large-scale risk data pipelines and reporting workflows by aggregating 200M+ records into 39 API calls, reducing RWA retrieval from 65 hours to minutes.",
      "Delivered SQL-driven Power BI dashboards for KRIs, RWA, and capital ratios to enhance decision-making.",
      "Built a reusable PySpark anomaly-detection platform on AWS SageMaker using Random Cut Forest to process 35M+ Parquet records.",
      "Deepened retail credit-risk expertise through MoM STND RWA decomposition across 13M+ records, improving regulatory transparency and recovery planning.",
    ],
  },
  {
    title: "Programmer Analyst — Walmart Mexico Ecommerce",
    company: "Cognizant Technology Solutions",
    location: "Bengaluru, India",
    duration: "March 2021 – July 2023",
    details: [
      "Analyzed ETL pipelines and big data batch processing across inventory, pricing, and item domains for Walmart Mexico's ecommerce platform.",
      "Resolved 750+ incident tickets using SQL, Splunk, and Kafka Lenses — improving data flow integrity and operational performance.",
      "Monitored OPM sales in real time with Splunk, Grafana, and Kafka Lenses, cutting OPM drop to under 4%.",
      "Supported 5+ high-impact sales events using data insights, boosting revenue by 7%, and earned the Best Performer award for maintaining a 90% SLA.",
    ],
  },
];

const EDUCATION = [
  {
    icon: faGraduationCap,
    title: "M.S. Information Technology & Management",
    subtitle: "Specialization in Data Analytics",
    place: "Illinois Institute of Technology, Chicago, IL",
    duration: "Aug 2023 – May 2025",
  },
  {
    icon: faCertificate,
    title: "Data Analyst in Power BI",
    subtitle: "Professional Certification",
    place: "",
    duration: "Certified",
  },
  {
    icon: faCertificate,
    title: "Liquidity Risk Management",
    subtitle: "Professional Certification",
    place: "",
    duration: "Certified",
  },
  {
    icon: faCertificate,
    title: "Risk Management Specialization",
    subtitle: "Professional Certification",
    place: "",
    duration: "Certified",
  },
];

const CORE_SKILLS = [
  { name: "SQL", level: 92 },
  { name: "Python", level: 90 },
  { name: "ETL & Data Pipelines", level: 88 },
  { name: "Power BI", level: 85 },
  { name: "PySpark", level: 80 },
  { name: "SAS", level: 75 },
];

const SKILL_GROUPS = [
  {
    title: "Languages & Tools",
    skills: [
      "Python", "SQL", "SAS", "PySpark", "Pandas", "Polars",
      "Axiom CV10", "Power BI", "Tableau", "Grafana", "Manta",
      "Pentaho ETL",
    ],
  },
  {
    title: "Cloud & Data Platforms",
    skills: [
      "AWS SageMaker", "Microsoft Azure", "Azure Data Factory",
      "Databricks", "Azure Synapse", "Apache Kafka", "Splunk",
      "MySQL", "Oracle SQL",
    ],
  },
  {
    title: "Key Competencies",
    skills: [
      "Liquidity Risk Management", "Regulatory Reporting",
      "ETL Design & Optimization", "Data Quality & Governance",
      "Financial Data Modeling", "Data Engineering",
      "Data Visualization",
    ],
  },
  {
    title: "Professional Strengths",
    skills: [
      "Problem Solving", "Critical Thinking", "Communication",
      "Data Storytelling", "Attention to Detail", "Adaptability",
    ],
  },
];

const PROJECTS = [
  {
    image: Project1,
    title: "Azure Data Engineering for Supermarket Sales",
    link: "https://github.com/kumareshpv/Azure-Data-Engineering-Project",
    tags: ["Azure", "PySpark", "Databricks"],
    details: [
      "Ingested on-premises SQL data via Azure Data Factory and transformed it through bronze, silver, and gold layers in Databricks with PySpark, landing curated data in Azure Synapse Analytics.",
      "Designed a real-time Power BI sales dashboard with scheduled refresh, secured with Azure AD and Key Vault.",
    ],
  },
  {
    image: Project2,
    title: "Credit Score Classification & Mining",
    link: "https://github.com/kumareshpv/Credit-Score-Classification",
    tags: ["Machine Learning", "Python"],
    details: [
      "Cleaned and balanced a 100k-record credit dataset with oversampling, boosting model accuracy to 82% and AUC to 95.6%.",
      "Mined association rules with the Apriori algorithm at 50% average confidence.",
    ],
  },
  {
    image: Project3,
    title: "LinkedIn Data Mart Dashboards",
    link: "https://github.com/kumareshpv/LinkedIn-Data-Mart",
    tags: ["ETL", "SQL", "Tableau"],
    details: [
      "Built an ETL pipeline extracting LinkedIn data from JSON via API, normalized across SQL tables with full data integrity.",
      "Developed 10+ Tableau visualizations powering data mart dashboards and stories.",
    ],
  },
  {
    image: Project4,
    title: "COVID-19 Data Analysis in R",
    link: "https://github.com/kumareshpv/COVID-19-Data-Analysis-in-R",
    tags: ["R", "Regression", "Statistics"],
    details: [
      "Improved dataset quality by reducing noise, cleaning data, and formulating testable hypotheses.",
      "Built regression models predicting death-case percentages with 92% accuracy, supported by 5+ visualizations.",
    ],
  },
  {
    image: Project5,
    title: "Supply Chain Management Database",
    link: "https://github.com/kumareshpv/Supply-Chain-Management",
    tags: ["SQL", "Database Design"],
    details: [
      "Designed an e-commerce database spanning customer, order, and inventory tables for 50K customers.",
      "Implemented SQL triggers and stored procedures to optimize order processing and operational efficiency.",
    ],
  },
  {
    image: Project6,
    title: "Bank Churn Analytics",
    link: "https://github.com/kumareshpv/bank-churn",
    tags: ["Power BI", "Analytics"],
    details: [
      "Analyzed churn across 10,000 customer records, isolating key drivers like credit score, balance, and tenure.",
      "Built Power BI dashboards visualizing satisfaction, credit scores, and churn trends for retention strategy.",
    ],
  },
];

const NAME_LETTERS = "Kumaresh PV".split("");

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-reveal: animate elements as they enter the viewport,
  // with an optional stagger (data-delay, ms) for grid children.
  useEffect(() => {
    const timers = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Number(el.getAttribute("data-delay")) || 0;
            if (delay) {
              el.style.transitionDelay = delay + "ms";
              // Clear the delay once revealed so hover effects stay snappy
              timers.push(
                setTimeout(() => {
                  el.style.transitionDelay = "0ms";
                }, delay + 1000)
              );
            }
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  // Apple-style hero recede: as the user scrolls, the hero gently
  // scales down, drifts up, and fades — driven by scroll position.
  useEffect(() => {
    const hero = document.querySelector(".hero-inner");
    if (!hero) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const progress = Math.min(
          window.scrollY / (window.innerHeight * 0.85),
          1
        );
        hero.style.opacity = String(1 - progress * 0.9);
        hero.style.transform =
          "translateY(" +
          progress * 70 +
          "px) scale(" +
          (1 - progress * 0.07) +
          ")";
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Page Loader */}
      <div id="page-loader" className={loading ? "" : "loader-hidden"}>
        <div className="loader-ring">
          <span className="loader-letter">K</span>
        </div>
        <p className="loader-caption">Kumaresh PV</p>
      </div>

      {/* Ambient background glows */}
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />

      <Navbar />

      {/* ================= HERO ================= */}
      <header id="home" className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting reveal">
              <span className="greeting-line" /> Welcome, I am
            </p>
            <h1 className="hero-name">
              {NAME_LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className="name-letter"
                  style={{ animationDelay: 0.35 + i * 0.07 + "s" }}
                >
                  {letter === " " ? " " : letter}
                </span>
              ))}
            </h1>
            <h2 className="hero-role">
              <TypeWriter />
            </h2>
            <p className="hero-tagline reveal">
              Shaping the future with data and intelligence — turning complex
              financial and business data into decisions that matter.
            </p>
            <div className="hero-actions reveal">
              <a href={RESUME_URL} className="btn-royal" download>
                <FontAwesomeIcon icon={faDownload} /> Download Resume
              </a>
              <a href="#projects" className="btn-outline-gold">
                View Projects
              </a>
            </div>
            <div className="hero-socials reveal">
              <a
                href="https://github.com/kumareshpv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/kumareshpv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:pvkumaresh@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          <div className="hero-portrait reveal">
            <div className="portrait-ring">
              <img src={profileImage} alt="Kumaresh PV" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <Counter end={3} suffix="+" label="Years of Experience" delay={0} />
          <Counter
            end={200}
            suffix="M+"
            label="Records Engineered"
            delay={120}
          />
          <Counter end={750} suffix="+" label="Tickets Resolved" delay={240} />
          <Counter end={6} suffix="+" label="Data Projects" delay={360} />
        </div>
      </header>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section section-alt">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Who I Am</p>
          <h2 className="section-heading reveal reveal-blur">
            About <span className="gold-text">Me</span>
          </h2>
          <div className="about-grid">
            <div className="about-text reveal reveal-left">
              <p>
                I am a Data Analyst at <b>BMO Financial Group</b> with acumen
                in <b>regulatory reporting</b> and{" "}
                <b>liquidity risk management</b>, specializing in the{" "}
                <b>FR 2052a</b> — the Federal Reserve's Complex Institution
                Liquidity Monitoring Report. I strengthen LCR and NSFR
                reporting by validating, transforming, and optimizing
                large-scale liquidity datasets across inflows, outflows, and
                collateral schedules.
              </p>
              <p>
                My day-to-day blends <b>financial domain knowledge</b> with
                hands-on engineering in <b>Python</b>, <b>SAS</b>, and{" "}
                <b>SQL</b>: enhancing source-to-target mappings, migrating
                legacy workflows to the 6G standard, resolving data quality
                and reconciliation issues, and optimizing ETL design so
                Treasury and Liquidity Risk teams get accurate, timely
                liquidity insights.
              </p>
              <p>
                I hold a <b>Master's in Information Technology and
                Management</b> (Data Analytics specialization) from the
                Illinois Institute of Technology, Chicago. Before my current
                role, I optimized enterprise risk data pipelines at BMO —
                aggregating 200M+ records and cutting RWA retrieval from 65
                hours to minutes — and spent 2+ years at Cognizant building
                big data solutions for Walmart Mexico's ecommerce platform.
              </p>
              <p>
                Passionate about <b>Data Engineering</b> and{" "}
                <b>Machine Learning</b>, I love converting raw data into
                actionable insight and building scalable, high-performance
                data infrastructure. Explore my work below — and reach out if
                you'd like to build something together.
              </p>
            </div>
            <div className="about-highlights reveal reveal-right">
              <div className="highlight-card">
                <FontAwesomeIcon icon={faChartLine} className="highlight-icon" />
                <h3>Regulatory Analytics</h3>
                <p>
                  FR 2052a liquidity reporting, variance analysis, and
                  data quality controls in banking.
                </p>
              </div>
              <div className="highlight-card">
                <FontAwesomeIcon icon={faDatabase} className="highlight-icon" />
                <h3>Data Engineering</h3>
                <p>
                  ETL pipelines, big data batch processing, and cloud
                  platforms (Azure, AWS).
                </p>
              </div>
              <div className="highlight-card">
                <FontAwesomeIcon icon={faBriefcase} className="highlight-icon" />
                <h3>Business Impact</h3>
                <p>
                  Dashboards and models that moved sales, cut incident
                  backlogs, and informed risk strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Where I've Worked</p>
          <h2 className="section-heading reveal reveal-blur">
            Work <span className="gold-text">Experience</span>
          </h2>
          <div className="timeline">
            {EXPERIENCES.map((exp, i) => (
              <div className="timeline-item reveal reveal-left" key={i}>
                <div className="timeline-dot">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-card">
                  <span className="timeline-duration">{exp.duration}</span>
                  <h3>{exp.title}</h3>
                  <p className="timeline-company">
                    {exp.company}
                    <span className="timeline-location">
                      <FontAwesomeIcon icon={faLocationDot} /> {exp.location}
                    </span>
                  </p>
                  <ul>
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="section section-alt">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Academic Background</p>
          <h2 className="section-heading reveal reveal-blur">
            Education & <span className="gold-text">Certifications</span>
          </h2>
          <div className="education-grid">
            {EDUCATION.map((edu, i) => (
              <div
                className="education-card reveal reveal-scale"
                data-delay={i * 140}
                key={i}
              >
                <div className="education-icon">
                  <FontAwesomeIcon icon={edu.icon} />
                </div>
                <h3>{edu.title}</h3>
                <p className="education-subtitle">{edu.subtitle}</p>
                {edu.place && <p className="education-place">{edu.place}</p>}
                <span className="education-duration">{edu.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">What I Work With</p>
          <h2 className="section-heading reveal reveal-blur">
            My <span className="gold-text">Skills</span>
          </h2>

          <div className="skills-layout">
            <div className="core-skills reveal reveal-left">
              <h3 className="skills-subheading">Core Proficiency</h3>
              {CORE_SKILLS.map((skill, i) => (
                <div className="skill-bar" key={i}>
                  <div className="skill-bar-header">
                    <span>{skill.name}</span>
                    <span className="gold-text">{skill.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{
                        "--target-width": skill.level + "%",
                        transitionDelay: i * 0.12 + "s",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-groups">
              {SKILL_GROUPS.map((group, i) => (
                <div
                  className="skill-group-card reveal reveal-scale"
                  data-delay={i * 120}
                  key={i}
                >
                  <h3 className="skills-subheading">{group.title}</h3>
                  <div className="badge-cloud">
                    {group.skills.map((skill, idx) => (
                      <span className="skill-badge" key={idx}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section section-alt">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Things I've Built</p>
          <h2 className="section-heading reveal reveal-blur">
            Featured <span className="gold-text">Projects</span>
          </h2>
          <div className="projects-grid">
            {PROJECTS.map((project, i) => (
              <div
                className="project-card reveal reveal-scale"
                data-delay={(i % 3) * 130}
                key={i}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={"View " + project.title + " on GitHub"}
                    >
                      <FontAwesomeIcon icon={faGithub} /> View Code
                    </a>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span className="project-tag" key={idx}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <ul>
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section">
        <div className="section-inner contact-inner">
          <p className="section-eyebrow reveal">Let's Connect</p>
          <h2 className="section-heading reveal reveal-blur">
            Get In <span className="gold-text">Touch</span>
          </h2>
          <p className="contact-lead reveal">
            Have a data project in mind? I'm glad to collaborate and bring
            value to your team.
          </p>
          <p className="contact-roles reveal">
            Data Analytics &nbsp;•&nbsp; Data Engineering &nbsp;•&nbsp; Data
            Science &nbsp;•&nbsp; BI Development
          </p>

          <div className="contact-cards">
            <a
              href="https://github.com/kumareshpv"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card reveal reveal-scale"
              data-delay={0}
            >
              <FontAwesomeIcon icon={faGithub} className="contact-card-icon" />
              <h3>GitHub</h3>
              <p>github.com/kumareshpv</p>
            </a>
            <a
              href="https://linkedin.com/in/kumareshpv"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card reveal reveal-scale"
              data-delay={140}
            >
              <FontAwesomeIcon icon={faLinkedin} className="contact-card-icon" />
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/kumareshpv</p>
            </a>
            <a
              href="mailto:pvkumaresh@gmail.com"
              className="contact-card reveal reveal-scale"
              data-delay={280}
            >
              <FontAwesomeIcon icon={faEnvelope} className="contact-card-icon" />
              <h3>Email</h3>
              <p>pvkumaresh@gmail.com</p>
            </a>
          </div>

          <div className="contact-resume reveal">
            <a href={RESUME_URL} className="btn-royal" download>
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>

          <div className="thank-you-note reveal">
            <p>
              Thank you for visiting my portfolio.{" "}
              <b className="gold-text">Let's create something amazing together!</b>
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="gold-text">Kumaresh PV</span> — Crafted with data
          and dedication.
        </p>
      </footer>

      {/* Back to top */}
      <a href="#home" className="back-to-top" aria-label="Back to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}

export default App;
