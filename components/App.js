import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
