import React from 'react';
import styled from 'styled-components';

import html5 from '../assets/images/skills/html5.png';
import css3 from '../assets/images/skills/css3.png';
import javascript from '../assets/images/skills/javascript.png';
import bootstrap from '../assets/images/skills/bootstrap.png';
import jquery from '../assets/images/skills/jquery.png';
import ejs from '../assets/images/skills/ejs.png';
import react from '../assets/images/skills/react.png';

//Backend

import nodejs from '../assets/images/skills/nodejs.png';
import expressjs from '../assets/images/skills/express.jpg';
import mongodb from '../assets/images/skills/mongodb.png';
import mysql from '../assets/images/skills/mysql.png';
import python from '../assets/images/skills/python.png';
import sequelize from '../assets/images/skills/sequelize.png';

//Other

import github from '../assets/images/skills/github.png';
import git from '../assets/images/skills/git.png';
import heroku from '../assets/images/skills/heroku.png';
import jupyter from '../assets/images/skills/jupyter.svg.png';

const SkillStyles = styled.div`
  .row {
    margin-bottom: 20px;
  }

  img.logo {
    margin: 0 auto;
    max-height: 100px;
    padding-bottom: 10px;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
  }
`;

export default function Skill() {
  return (
    <SkillStyles>
      <div className="skills" id="skills">
        <h4>Skills</h4>
        <hr />
        <div className="card col shadow-lg p-3 mb-5 bg-white rounded alert">
          <div>
            <div className="card-content">
              <h4>Frontend</h4>
              <hr />
              <div className="row text-center">
                <div className="col">
                  <img
                    src={html5}
                    className="responsive-img logo"
                    alt="html5"
                  />
                  HTML5
                </div>
                <div className="col">
                  <img src={css3} className="responsive-img logo" alt="css3" />
                  CSS3
                </div>
                <div className="col">
                  <img
                    src={javascript}
                    className="responsive-img logo"
                    alt="js"
                  />
                  JavaScript
                </div>
                <div className="col">
                  <img
                    src={bootstrap}
                    className="responsive-img logo"
                    alt="bootstrap"
                  />
                  Bootstrap
                </div>
                <div className="col">
                  <img
                    src={jquery}
                    className="responsive-img logo"
                    alt="jquery"
                  />
                  JQuery
                </div>
                <div className="col">
                  <img src={ejs} className="responsive-img logo" alt="ejs" />
                  EJS
                </div>
                <div className="col">
                  <img
                    src={react}
                    className="responsive-img logo"
                    alt="react.js"
                  />
                  React.js
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-content">
              <h4>Backend</h4>
              <hr />
              <div className="row text-center">
                <div className="col">
                  <img
                    src={nodejs}
                    className="responsive-img logo"
                    alt="nodejs"
                  />
                  Node.js
                </div>
                <div className="col">
                  <img
                    src={expressjs}
                    className="responsive-img logo"
                    alt="expressjs"
                  />
                  Express.js
                </div>
                <div className="col">
                  <img
                    src={mongodb}
                    className="responsive-img logo"
                    alt="mongodb"
                  />
                  MongoDB
                </div>
                <div className="col">
                  <img
                    src={python}
                    className="responsive-img logo"
                    alt="python"
                  />
                  Python
                </div>
                <div className="col">
                  <img
                    src={mysql}
                    className="responsive-img logo"
                    alt="mysql"
                  />
                  MySQL
                </div>

                <div className="col">
                  <img
                    src={sequelize}
                    className="responsive-img logo"
                    alt="sequelize"
                  />
                  Sequelize
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-content">
              <h4>Other</h4>
              <hr />
              <div className="row text-center">
                <div className="col">
                  <img src={git} className="responsive-img logo" alt="git" />
                  Git
                </div>
                <div className="col">
                  <img
                    src={github}
                    className="responsive-img logo"
                    alt="github"
                  />
                  GitHub
                </div>
                <div className="col">
                  <img
                    src={heroku}
                    className="responsive-img logo"
                    alt="heroku"
                  />
                  Heroku
                </div>
                <div className="col">
                  <img
                    src={jupyter}
                    className="responsive-img logo"
                    alt="jupyter"
                  />
                  Heroku
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkillStyles>
  );
}
