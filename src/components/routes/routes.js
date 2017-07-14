import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from 'scenes/home/home';

const Routes = () => (
    <HashRouter>
        <div>
            <Route path="/:id?" component={Home}/>
        </div>
    </HashRouter>
);

export default Routes;