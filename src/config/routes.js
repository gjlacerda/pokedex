import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from 'scenes/home/home';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/:id?" component={Home}/>
    </BrowserRouter>
);

export default Routes;