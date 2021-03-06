import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProjectStyles = styled.div`
  h4 {
    display: inline-block;
    background: #fff9b0;
  }
  img.project-screenshot {
    height: 400px;
  }

  .project-title {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  a.btn {
    background-color: #2e2e2e;
    color: #fff;
    &:hover {
      background-color: #440a67;
    }
  }
`;

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    const projects = await axios.get('https://jongomez.dev/projects.json');
    this.setState({
      projects: projects.data,
    });
  }

  render() {
    const { projects } = this.state;

    const projectUI = projects.map((project, index) => {
      return (
        <ProjectStyles>
          <div className="projects" key={project.projectTitle} id="projects">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded alert">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                  <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner" key={project.projectTitle}>
                      {project.projectScreenshots.map((screenshot, index) => (
                        <div
                          className={
                            index === 0
                              ? 'carousel-item active'
                              : 'carousel-item'
                          }
                        >
                          <img
                            className="img-fluid project-screenshot"
                            src={screenshot}
                            alt="project"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h4 className="project-title">{project.projectTitle}</h4>
                  <p>{project.projectDescription}</p>
                  <h5>Technology</h5>
                  <p>{project.projectTech}</p>

                  <hr />
                  <div className="col-xs-3">
                    <a
                      className="btn btn-block"
                      href={project.projectLearnMoreLink}
                      role="button"
                      rel="noreferrer"
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                    <a
                      className="btn btn-block"
                      href={project.projectGoLink}
                      role="button"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Go to App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProjectStyles>
      );
    });

    return (
      <>
        <h4>Projects</h4>
        <hr />
        {projectUI}

        <br />
      </>
    );
  }
}
