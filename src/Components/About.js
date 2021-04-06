import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding-top: 7rem;
`;

export default function About() {
  return (
    <ContentWrapper>
      <div
        className="about card col shadow-lg p-3 mb-5 bg-white rounded alert"
        id="about"
      >
        <div className="card-content">
          <h4>About</h4>
          <hr />
          <p className="display-5">
            I’m a full stack JavaScript developer leveraging a sales background
            who specializes in developing innovative solutions and maintaining
            an exceptional user experience. Since the beginning of 2020, I have
            acquired knowledge and experience with technologies such as HTML,
            CSS, JavaScript, Python, React.js, Node.js, Express.js, SQL and
            MongoDB. Recognized as an organized, passionate, and adaptable
            critical thinker, I am committed to improve my expertise while
            embracing new challenges alongside an innovative team focused on
            building accessible, human-centered products.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}
