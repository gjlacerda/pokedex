import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home/Home';
import 'file-loader?name=index.html!./views/index.html';
import 'styled/app/global.styled';

ReactDOM.render(
    <Home/>,
    document.getElementById('app')
);