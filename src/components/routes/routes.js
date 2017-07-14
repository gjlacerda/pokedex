import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from 'scenes/home/home';

const Routes = () => (
    <BrowserRouter>
        <div>
            {console.log('url: ' + process.env.PUBLIC_URL)}
            <Route exact path={process.env.PUBLIC_URL + '/:id?'} component={Home}/>
        </div>
    </BrowserRouter>
);

export default Routes;