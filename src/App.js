import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import "./App.css";

import profileImage from "./assets/images/Profile.png";

function App() {
  // Scroll to home section
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      {/* Home Section with Image */}
      <div className="container-fluid">
        <section
          id="home"
          className="section home-section d-flex align-items-center justify-content-between"
        >
          <div className="col-md-4">
            <h2 className="container-heading">Welcome to My Portfolio</h2>
            <p>Explore my journey and achievements!</p>
            <a href="#about" className="btn-nav">
              About Me
            </a>
          </div>
          <div className="col-md-auto">
            <div className="card">
              <img
                src={profileImage} // Replace with your image URL
                className="card-img-top"
                alt="Profile"
              />
            </div>
          </div>
        </section>
      </div>

      {/* About Me Section */}
      <div className="container-fluid container-gray">
        <section id="about" className="section">
          <h2 className="container-heading">About Me</h2>
          <p>
            I'm a detail-oriented and results-driven Data Analyst with over 2+
            years of industry experience. My career has been centered around
            coordinating complex big data systems, developing scalable data
            solutions, and driving business intelligence through advanced data
            techniques.
          </p>
          <p>
            Currently, I'm pursuing a Master's in Information Technology and
            Management with a specialization in Data Analytics at Illinois
            Institute of Technology, Chicago. This academic journey has further
            honed my expertise in Python, SQL, and Splunk, enabling me to design
            and implement robust data pipelines, conduct in-depth analyses, and
            contribute to innovative data strategies.
          </p>
          <p>
            I have a strong interest in <b>Machine Learning</b> and am excited
            by the potential it holds in transforming data into actionable
            insights. This passion drives me to deepen my understanding of
            algorithms, model development, and the application of machine
            learning techniques to solve complex business challenges.
          </p>
          <p>
            In addition, I am also deeply interested in <b>Data Engineering</b>,
            with a focus on building scalable, high-performance data
            infrastructure. I am eager to work on data pipelines, database
            optimization, and streamlining the process of transforming raw data
            into structured, usable formats for analytical applications.
          </p>
          <p>
            I'm passionate about advancing in the dynamic field of data science
            and am eager to explore opportunities across various data science
            and engineering roles. My portfolio showcases a range of projects
            that demonstrate my technical proficiency, problem-solving
            abilities, and commitment to continuous learning.
          </p>
          <p>
            I'm excited to leverage my skills to architect efficient data
            systems and contribute to impactful, data-driven decisions. I invite
            you to explore my work and connect with me for collaboration or
            professional opportunities.
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
          <h3>Programmer Analyst, Walmart Mexico Ecommerce Project</h3>
          <p>
            Cognizant Technology Solutions, Bengaluru | July 2021 – July 2023
          </p>
          <ul>
            <li>
              Analyzed ETL pipelines and worked on big data batch processing
              across multiple domains, including inventory, pricing, and items.
            </li>
            <li>
              Utilized SQL, Splunk, Grafana, and Kafka Lenses to manage OPM
              sales, providing real-time insights and minimizing OPM drop to
              under 4%.
            </li>
            <li>
              Resolved 750+ tickets in incident management, prioritizing P1
              cases and addressing P2/P3 issues.
            </li>
            <li>
              Resolved over 70% of customer inquiries and 30% of website issues
              across Walmart Mexico stores and partners.
            </li>
            <li>
              Orchestrated 5+ high-impact sales events using data insights,
              resulting in a 7% increase in sales performance.
            </li>
            <li>
              Managed the migration from one tech stack to GraphQL, addressing
              mobile-based issues on both Android and iOS platforms.
            </li>
            <li>
              Created JIRA tickets and SOPs for effective issue tracking and
              resolution.
            </li>
          </ul>
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
            {/* Row 1: Technical Skills */}
            <div className="row">
              <div className="col-12">
                <div className="skills-card">
                  <h3 className="skills-card-title">Technical Skills</h3>
                  <table className="skills-table">
                    <tbody>
                      <tr>
                        <td>Python</td>
                        <td>Pandas</td>
                        <td>Matplotlib</td>
                        <td>Scikit-Learn</td>
                      </tr>
                      <tr>
                        <td>TensorFlow</td>
                        <td>Keras</td>
                        <td>PySpark</td>
                        <td>Java</td>
                      </tr>
                      <tr>
                        <td>RESTful APIs</td>
                        <td>SQL</td>
                        <td>R</td>
                        <td>Machine Learning</td>
                      </tr>
                      <tr>
                        <td>Data Analysis</td>
                        <td>Data Visualization</td>
                        <td>ETL</td>
                        <td>Deep Learning</td>
                      </tr>
                      <tr>
                        <td>Natural Language Processing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 2: Soft Skills */}
            <div className="row">
              <div className="col-12">
                <div className="skills-card">
                  <h3 className="skills-card-title">Soft Skills</h3>
                  <table className="skills-table">
                    <tbody>
                      <tr>
                        <td>Problem Solving</td>
                        <td>Attention to Detail</td>
                        <td>Adaptability</td>
                      </tr>
                      <tr>
                        <td>Data Story Presentation</td>
                        <td>Communication</td>
                        <td>Critical Thinking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 3: Tools */}
            <div className="row">
              <div className="col-12">
                <div className="skills-card">
                  <h3 className="skills-card-title">Tools</h3>
                  <table className="skills-table">
                    <tbody>
                      <tr>
                        <td>Splunk</td>
                        <td>Grafana</td>
                        <td>MySQL</td>
                        <td>Oracle SQL</td>
                      </tr>
                      <tr>
                        <td>JIRA</td>
                        <td>Power BI</td>
                        <td>Tableau</td>
                        <td>Pentaho ETL</td>
                      </tr>
                      <tr>
                        <td>Databricks</td>
                        <td>Apache Kafka</td>
                        <td>Lenses</td>
                        <td>Microsoft Azure</td>
                      </tr>
                      <tr>
                        <td>Microsoft Excel</td>
                        <td>Microsoft Access</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 4: Certifications */}
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
          <ul>
            <li>Azure Data Engineering for Supermarket Sales</li>
            <li>Credit Score Classification and Mining</li>
            <li>LinkedIn Data Mart Dashboards</li>
          </ul>
          <a href="#contact" className="btn-nav">
            Contact Me
          </a>
        </section>
      </div>

      {/* Contact Section */}
      <div className="container-fluid container-gray">
        <section id="contact" className="section text-center">
          <h2 className="container-heading">Contact Me</h2>
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
  );
}

export default App;
