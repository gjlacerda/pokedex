import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from 'scenes/home/home';

const Routes = () => (
    <Router>
        <Route exact path="/:id?" component={Home}/>
    </Router>
);

export default Routes;