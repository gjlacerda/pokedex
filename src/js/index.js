import React from 'react';
import ReactDOM from 'react-dom';

require('file-loader?name=index.html!../views/index.html');

ReactDOM.render(
    <h1>Teste</h1>,
    document.getElementById('app')
);