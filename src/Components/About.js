import React, { Component } from 'react';
import axios from 'axios';

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutText: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://jongomezdev.github.io/about.json'
    );
    this.setState({ aboutText: response.data, isLoading: false });
  }

  render() {
    const { aboutText, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div
        className="about card col shadow-lg p-3 mb-5 bg-white rounded alert"
        id="about"
      >
        <div className="card-content">
          <h4>About</h4>
          <hr />
          <p className="display-5">{aboutText.aboutText}</p>
        </div>
      </div>
    );
  }
}

export default About;
