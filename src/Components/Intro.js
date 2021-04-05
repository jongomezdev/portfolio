import React from 'react';
import Typewriter from 'typewriter-effect';
import IntroStyles from '../styles/Intro';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding-top: 100px;
  align-content: center;
  height: 100vh;
`;

const profilePhoto = {
  borderRadius: '50%',
  maxWidth: '50%',
  height: 'auto',
};

export default function Intro() {
  return (
    <ContentWrapper>
      <IntroStyles className="text-center intro">
        <img
          title="Jonathan in Rome"
          id="profile-photo"
          className="img-fluid"
          src="https://avatars.githubusercontent.com/u/69017534?v=4"
          style={profilePhoto}
          alt="profile"
        />
        <h1 className="display-4">Jonathan Gomez</h1>
        <h5>
          Full stack JavaScript developer that loves designing and building
          modern
          <Typewriter
            options={{
              strings: ['websites.', 'applications.', 'APIs.'],
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
      </IntroStyles>
    </ContentWrapper>
  );
}
