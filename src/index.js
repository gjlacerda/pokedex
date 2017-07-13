import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'scenes/home/home';
//import Routes from 'config/routes';
import Header from  'scenes/header/header';
import 'styled/app/global.styled';

ReactDOM.render(
    <div>
        <Header/>
        <Home/>
    </div>
    ,
    document.getElementById('app')
);