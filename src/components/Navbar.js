import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 40);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      let current = "home";
      NAV_LINKS.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = link.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={"royal-navbar" + (scrolled ? " scrolled" : "")}>
      <div className="navbar-inner">
        <a className="brand" href="#home" onClick={handleLinkClick}>
          <span className="brand-mark">K</span>
          <span className="brand-name">
            Kumaresh <span className="brand-accent">PV</span>
          </span>
        </a>

        <button
          className={"menu-toggle" + (menuOpen ? " open" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={"nav-links" + (menuOpen ? " open" : "")}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={"#" + link.id}
                className={activeSection === link.id ? "active" : ""}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="scroll-progress" style={{ width: progress + "%" }} />
    </nav>
  );
};

export default Navbar;
