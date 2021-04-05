import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top fixed-top shadow-lg p-3 mb-5 bg-white rounded alert container">
      <a
        className="navbar-brand btn"
        title="Jonathan's Portfolio"
        href="#intro"
      >
        Jonathan Gomez
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse menu" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" title="Know about me" href="#about">
              About<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Skills" href="#skills">
              Skills<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Projects" href="#projects">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" title="Get in touch" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              title="Download my resume"
              href="https://jongomez.dev/Assets/Jonathan-Gomez-resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
        <span className=" btn navbar-text">
          <a href="https://github.com/jongomezdev" title="Github">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </span>
      </div>
    </nav>
  );
}
