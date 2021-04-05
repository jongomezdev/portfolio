import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
  a {
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    background-color: transparent;
    padding: 10px;
    font-size: 1.5rem;
  }
`;

export default function Contact() {
  return (
    <ContactStyles>
      <div
        className="contact card col shadow-lg p-3 mb-5 bg-white rounded alert"
        id="contact"
      >
        <div className="card-content">
          <h4>Contact</h4>
          <hr />
          <a
            href="https://www.linkedin.com/in/jonathangomez5/"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://github.com/jongomezdev"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="tel:1-914-482-7441">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </a>
          <a href="mailto:jongomezdev@gmail.com">jongomezdev@gmail.com</a>
        </div>
      </div>
    </ContactStyles>
  );
}
