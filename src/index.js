import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Invitation from './components/Invitation';
import ThemedParty from './components/ThemedDecorations';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/invitation" render={Invitation} />
        <Route exact path="/themedparty" render={ThemedParty} />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
