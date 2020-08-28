import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css'; 


const divRoot = document.querySelector('#idApp');

// ReactDOM.render( <FirstApp hello="Hi, i'm Luison" />, divRoot);
ReactDOM.render( <CounterApp value={7} />, divRoot);