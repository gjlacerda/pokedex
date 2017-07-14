import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'config/routes';
import Header from  'scenes/header/header';
import 'styled/app/global.styled';

ReactDOM.render(
    <div>
        {window.alert(process.env.PUBLIC_URL)}
        <Header/>
        <Routes/>
    </div>
    ,
    document.getElementById('app')
);