import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Terminal from 'components/Terminal';
import Intro from 'pages/Intro';
import About from 'pages/About';
import Skillsets from 'pages/Skillsets';
import GlobalStyle from './Global.styles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Intro />
      <Terminal />
      <About />
      <Skillsets />
    </Router>
  );
};

export default App;
