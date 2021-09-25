import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Intro from 'components/Intro';
import Terminal from 'components/Terminal';
import About from 'components/About';
import GlobalStyle from './Global.styles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Intro />
      <Terminal />
      <About />
    </Router>
  );
};

export default App;
