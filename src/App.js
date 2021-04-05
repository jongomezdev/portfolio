import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Project from './Components/Project/Project';
import About from './Components/About';
import Skill from './Components/Skill/Skill';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App container">
      <GlobalStyles />
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
