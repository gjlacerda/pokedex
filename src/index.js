import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'scenes/home/home';
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