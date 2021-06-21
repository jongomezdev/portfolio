import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top fixed-top shadow-lg p-3 mb-5 bg-white rounded alert container">
      <a className="navbar-brand" title="Jonathan's Portfolio" href="/">
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
          <li className="nav-item">
            <a className="nav-link" title="About me" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Skills" href="#skills">
              Skills
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
              href="https://jongomez.dev/resume"
              title="resume"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
        <span className="btn navbar-text">
          <a
            href="https://github.com/jongomezdev"
            title="Github"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </span>
      </div>
    </nav>
  );
}
