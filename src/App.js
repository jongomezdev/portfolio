import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Project from './Components/Project/Project';
import About from './Components/About';
import Skill from './Components/Skill/Skill';
import GlobalStyles from './styles/GlobalStyles';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App container">
      <GlobalStyles />
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
