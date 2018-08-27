import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//My Components
import App from './components/app/app';
import CreditDetail from './components/creditDetail/creditDetail';

import { BrowserRouter, Route } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    < BrowserRouter>
        <div>
            <Route path="/detail/:id" component={CreditDetail} />
            <Route path="/" exact component={App} />
        </div>
    </BrowserRouter>
, document.querySelector('.app') );

registerServiceWorker();

