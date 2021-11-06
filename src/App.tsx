import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Terminal from 'components/Terminal';
import Intro from 'pages/Intro';
import About from 'pages/About';
import Skillsets from 'pages/Skillsets';
import Career from 'pages/Career';
import Projects from 'pages/Projects';
import Activities from 'pages/Activities';
// import WorkExperience from 'pages/WorkExperience';
import GlobalStyle from './Global.styles';
import Styled from './App.styles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Styled.Root>
        <Intro />
        <Terminal />
        <About />
        <Skillsets />
        <Projects />
        <Activities />
        {/* <WorkExperience /> */}
        <Career />
      </Styled.Root>
    </Router>
  );
};

export default App;
