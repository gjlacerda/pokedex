import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'config/routes';
import 'file-loader?name=index.html!./views/index.html';
import 'styled/app/global.styled';

ReactDOM.render(
    <Routes/>,
    document.getElementById('app')
);