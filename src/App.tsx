import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyle from './Global.styles';
import Intro from 'components/Intro';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Intro />
      </Switch>
    </Router>
  );
};

export default App;
