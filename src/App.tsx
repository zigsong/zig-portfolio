import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './Global.styles';
import Intro from 'components/Intro';
import Terminal from 'components/Terminal';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Intro />
      <Terminal />
    </Router>
  );
};

export default App;
