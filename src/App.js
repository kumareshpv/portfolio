import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Navbar from "./components/Navbar";
import profileImage from "./assets/images/Profile.png";
import logo2 from "./assets/images/k-solid.png";
import Project1 from "./assets/images/Project-1.png";

function App() {
  // State for page loader
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to Home section
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Work Experience Data
  const experiences = [
    {
      title: "Data Analyst, Bank of Montreal (BMO)",
      company: "BMO Financial Group",
      duration: "Present",
      details: [
        "Working as a Data Analyst Intern, applying advanced analytics to drive financial insights.",
        "Leveraging Python, SQL, and AWS SageMaker to build predictive models that support risk management strategies.",
        "Collaborating with cross-functional teams to streamline data pipelines and optimize business intelligence solutions."
      ]
    },
    {
      title: "Programmer Analyst, Walmart Mexico Ecommerce Project",
      company: "Cognizant Technology Solutions, Bengaluru",
      duration: "July 2021 – July 2023",
      details: [
        "Analyzed ETL pipelines and worked on big data batch processing across multiple domains, including inventory, pricing, and items.",
        "Utilized SQL, Splunk, Grafana, and Kafka Lenses to manage OPM sales, providing real-time insights and minimizing OPM drop to under 4%.",
        "Resolved 750+ tickets in incident management, prioritizing P1 cases and addressing P2/P3 issues.",
        "Resolved over 70% of customer inquiries and 30% of website issues across Walmart Mexico stores and partners.",
        "Orchestrated 5+ high-impact sales events using data insights, resulting in a 7% increase in sales performance.",
        "Managed the migration from one tech stack to GraphQL, addressing mobile-based issues on both Android and iOS platforms.",
        "Created JIRA tickets and SOPs for effective issue tracking and resolution."
      ]
    }
  ];

  const [expIndex, setExpIndex] = useState(0);

  const handlePrev = () => {
    setExpIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setExpIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  const currentExp = experiences[expIndex];

  return (
    <div>
      {/* Page Loader Overlay */}
      {loading && (
        <div id="page-loader">
          <div className="spinner">
            <span className="spinner-letter"> K </span>
          </div>
        </div>
      )}

      {/* Main Content (hidden while loading) */}
      <div style={{ display: loading ? "none" : "block" }}>
        {/* Navbar */}
        <Navbar />

        {/* Extra spacing */}
        <br />
        <br />

        {/* Home Section */}
        <div className="container-fluid">
          <section
            id="home"
            className="section home-section d-flex align-items-center justify-content-between"
          >
            <div className="col-md-4">
              <h1 className="welcome-line">
                <span className="welcome-red">Welcome!</span>{" "}
                <span className="welcome-gray">I am</span>
              </h1>
              <h2 className="welcome-red">
                <span className="name-letter" style={{ animationDelay: "0s" }}>
                  K
                </span>
                <span className="name-letter" style={{ animationDelay: "0.2s" }}>
                  u
                </span>
                <span className="name-letter" style={{ animationDelay: "0.4s" }}>
                  m
                </span>
                <span className="name-letter" style={{ animationDelay: "0.6s" }}>
                  a
                </span>
                <span className="name-letter" style={{ animationDelay: "0.8s" }}>
                  r
                </span>
                <span className="name-letter" style={{ animationDelay: "1s" }}>
                  e
                </span>
                <span className="name-letter" style={{ animationDelay: "1.2s" }}>
                  s
                </span>
                <span className="name-letter" style={{ animationDelay: "1.4s" }}>
                  h
                </span>
                <span className="name-letter" style={{ animationDelay: "1.6s" }}>
                  &nbsp;
                </span>
                <span className="name-letter" style={{ animationDelay: "1.8s" }}>
                  P
                </span>
                <span className="name-letter" style={{ animationDelay: "2s" }}>
                  V
                </span>
              </h2>
              <p>Shaping the Future with Data and Intelligence.</p>
              <a href="#about" className="btn-nav">
                About Me
              </a>
            </div>
            <div className="col-md-auto">
              <div className="card">
                <img src={profileImage} className="card-img-top" alt="Profile" />
              </div>
            </div>
          </section>
        </div>

        {/* About Section */}
        <div className="container-fluid container-gray">
          <section id="about" className="section">
            <h2 className="container-heading">About Me</h2>
            <p>
              I am a <b>detail-oriented</b> and <b>results-driven</b> Data Analyst with over 2+ years of industry experience, currently expanding my expertise in the financial sector as a Data Analyst Intern at BMO. My work has focused on coordinating complex big data systems, developing scalable data solutions, and driving business intelligence through advanced analytics techniques.
            </p>
            <p>
              I continually refine my analytical skills with tools like <b>Python</b>, <b>SQL</b>, and <b>Splunk</b>, while leveraging cloud platforms such as <b>AWS SageMaker</b> to develop and deploy machine learning models that address real-world challenges. This hands-on experience in finance has provided me a unique perspective on transforming risk management and financial decision-making.
            </p>
            <p>
              I am currently in my final semester of a Master's in Information Technology and Management with a specialization in Data Analytics at the Illinois Institute of Technology, Chicago, and will be graduating in May 2025. This academic journey has honed my technical expertise in designing robust data pipelines and performing in-depth analyses.
            </p>
            <p>
              Passionate about <b>Machine Learning</b> and <b>Data Engineering</b>, I focus on converting raw data into actionable insights and building scalable, high-performance data infrastructures. My portfolio reflects a diverse range of projects that demonstrate my technical proficiency and strong problem-solving skills.
            </p>
            <p>
              Eager to architect efficient data systems and drive impactful, data-driven decisions, I am actively seeking full-time opportunities in the US as an international master's student specializing in data science. I invite you to explore my work and connect with me for collaboration or professional opportunities that foster mutual success.
            </p>
            <a href="#experience" className="btn-nav">
              Work Experience
            </a>
          </section>
        </div>

        {/* Work Experience Section */}
        <div className="container-fluid container-black">
          <section id="experience" className="section">
            <h2 className="container-heading">Work Experience</h2>
            <h3>
              <b>{currentExp.title}</b>
            </h3>
            <p>
              {currentExp.company} | {currentExp.duration}
            </p>
            <ul>
              {currentExp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <div className="experience-navigation">
              <button onClick={handlePrev} className="nav-button">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
              </button>
              <span className="nav-page-number">
                {expIndex + 1} / {experiences.length}
              </span>
              <button onClick={handleNext} className="nav-button">
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </button>
            </div>
            <a href="#skills" className="btn-nav">
              My Skills
            </a>
          </section>
        </div>

        {/* Skills Section */}
        <div className="container-fluid container-gray">
          <section id="skills" className="section">
            <h2 className="container-heading">My Skills</h2>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="skills-card">
                    <h3 className="skills-card-title">Technical Skills</h3>
                    <table className="skills-table">
                      <tbody>
                        <tr>
                          <td>
                            Python, Pandas, Matplotlib, Scikit-Learn, TensorFlow,
                            Keras, PySpark, Java, RESTful APIs, SQL, R, Machine
                            Learning, Data Analysis, Data Visualization, ETL,
                            Deep Learning, Natural Language Processing
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="skills-card">
                    <h3 className="skills-card-title">Soft Skills</h3>
                    <table className="skills-table">
                      <tbody>
                        <tr>
                          <td>
                            Problem Solving, Attention to Detail, Adaptability, Data
                            Story Presentation, Communication, Critical Thinking
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="skills-card">
                    <h3 className="skills-card-title">Tools</h3>
                    <table className="skills-table">
                      <tbody>
                        <tr>
                          <td>
                            Splunk, Grafana, MySQL, Oracle SQL, JIRA, Power BI,
                            Tableau, Pentaho ETL, Databricks, Apache Kafka, Lenses,
                            Microsoft Azure, Microsoft Excel, Microsoft Access
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="skills-card">
                    <h3 className="skills-card-title">Certifications</h3>
                    <table className="skills-table">
                      <tbody>
                        <tr>
                          <td>Data Analyst in Power BI</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <a href="#projects" className="btn-nav">
              Projects
            </a>
          </section>
        </div>

        {/* Projects Section */}
        <div className="container-fluid container-black">
          <section id="projects" className="section">
            <h2 className="container-heading">Projects</h2>
            <div className="container">
              <div className="row">
                {/* Project 1 */}
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="project-card">
                    <img
                      src={Project1}
                      alt="Project 1"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <a
                        href="https://github.com/kumareshpv/Azure-Data-Engineering-Project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                    <div className="card-content">
                      <h3>Azure Data Engineering for Supermarket Sales</h3>
                      <ul>
                        <li>
                          Built an Azure data pipeline for processing sales data.
                        </li>
                        <li>
                          Created a real-time Power BI dashboard for insights.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="project-card">
                    <img
                      src="/portfolio/static/media/Project-2.3f7cdd3ecbb8cf1fe86b.png"
                      alt="Project 2"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <a
                        href="https://github.com/kumareshpv/Credit-Score-Classification"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                    <div className="card-content">
                      <h3>Credit Score Classification and Mining</h3>
                      <ul>
                        <li>
                          Cleaned and balanced a 100k credit score dataset using
                          oversampling, boosting ML model accuracy to 82% and AUC to
                          95.6%.
                        </li>
                        <li>
                          Mined association rules with the Apriori algorithm,
                          achieving 50% average confidence.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Project 3 */}
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="project-card">
                    <img
                      src="/portfolio/static/media/Project-3.a503c746c8192f408a0d.png"
                      alt="Project 3"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <a
                        href="https://github.com/kumareshpv/LinkedIn-Data-Mart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                    <div className="card-content">
                      <h3>LinkedIn Data Mart Dashboards</h3>
                      <ul>
                        <li>
                          Built an ETL pipeline to extract LinkedIn data from JSON
                          via API, normalized it across SQL tables, and ensured
                          data integrity.
                        </li>
                        <li>
                          Developed 10+ Tableau visualizations for LinkedIn data
                          mart dashboards and stories.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Project 4 */}
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="project-card">
                    <img
                      src="/portfolio/static/media/Project-4.20389aed08ac249bb7bf.png"
                      alt="Project 4"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <a
                        href="https://github.com/kumareshpv/COVID-19-Data-Analysis-in-R"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                    <div className="card-content">
                      <h3>COVID-19-Data-Analysis-in-R</h3>
                      <ul>
                        <li>
                          Enhanced COVID-19 dataset quality by reducing noise,
                          cleaning data, and formulating hypotheses for analysis.
                        </li>
                        <li>
                          Built regression models to predict death case percentages
                          with 92% accuracy and created 5+ visualizations to highlight
                          key insights.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Project 5 */}
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="project-card">
                    <img
                      src="/portfolio/static/media/Project-5.444a72667c06bc2ac874.png"
                      alt="Project 5"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <a
                        href="https://github.com/kumareshpv/Supply-Chain-Management"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                    <div className="card-content">
                      <h3>Supply-Chain-Management</h3>
                      <ul>
                        <li>
                          Designed an e-commerce database with customer, order, and
                          inventory tables for 50K customers.
                        </li>
                        <li>
                          Implemented SQL triggers and stored procedures to optimize
                          order processing and enhance operational efficiency.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Project 6 */}
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="project-card">
                    <img
                      src="/portfolio/static/media/Project-6.8e8d39e535956e45d48b.png"
                      alt="Project 6"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <a
                        href="https://github.com/kumareshpv/bank-churn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </div>
                    <div className="card-content">
                      <h3>Bank Churn Analytics</h3>
                      <ul>
                        <li>
                          Analyzed customer churn for 10,000 records, identifying key
                          factors like credit score, balance, and tenure to inform
                          retention strategies.
                        </li>
                        <li>
                          Created Power BI dashboards visualizing satisfaction scores,
                          credit scores, and churn trends, enhancing data interpretation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn-nav">
              Contact
            </a>
          </section>
        </div>

        {/* Contact Section */}
        <div className="container-fluid container-gray">
          <section id="contact" className="section text-center">
            <h2 className="container-heading">Contact Me</h2>
            <p>If you have any data project in mind,</p>
            <p>
              <b>
                Data Analytics | Data Engineering | Data Science | BI Developer
              </b>
            </p>
            <p>I am glad to collaborate and bring value to your projects.</p>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/kumareshpv"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a
                href="https://linkedin.com/in/kumareshpv"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a
                href="mailto:kpendiyalavenkatesh@hawk.iit.edu"
                className="contact-icon"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            </div>
            <div className="thank-you-note">
              <h2 className="container-heading">Thank You</h2>
              <p>
                Feel free to reach out with feedback, questions, or collaboration
                opportunities.
              </p>
              <p>
                <b>
                  Thank you for visiting my portfolio. Let's create something amazing
                  together!
                </b>
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="top">
          <a
            href="#home"
            className="btn btn-danger back-to-home"
            onClick={scrollToHome}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
