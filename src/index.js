import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { Provuder } from 'react-redux';

import App from './App';
import './index.css';

import store from './store';

ReactDOM.render(
 <Provider store={store} >
   <HashRouter>
    <App />
   </HashRouter>
 </Provider>,
document.getElementById( 'root' ));

