import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'components/routes/routes';
import Header from  'scenes/header/header';
import 'styled/app/global.styled';

ReactDOM.render(
    <div>
        <Header/>
        <Routes/>
    </div>
    ,
    document.getElementById('app')
);