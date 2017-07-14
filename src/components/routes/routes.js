import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from 'scenes/home/home';

const Routes = () => (
    <HashRouter>
        <div>
            {console.log('url: ' + process.env.PUBLIC_URL)}
            <Route path={process.env.PUBLIC_URL + '/:id?'} component={Home}/>
        </div>
    </HashRouter>
);

export default Routes;