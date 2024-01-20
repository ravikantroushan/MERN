// This is where you'll import your main React components and set up routing

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App'; // Import your main App component

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            {/* Add more routes as needed */}
        </Switch>
    </Router>,
    document.getElementById('root')
);
