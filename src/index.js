import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//My Components
import Header from './components/header/header';
import ClientInfo from './components/clientInfo/clientInfo';
import Detail from './components/detail/detail';
import CreditDetail from './components/creditDetail/creditDetail';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Header />, document.querySelector('.header') );
ReactDOM.render( <ClientInfo />, document.querySelector('.clientInfo') );
ReactDOM.render( <Detail />, document.querySelector('.detail') );
ReactDOM.render( <CreditDetail />, document.querySelector('.creditDetail') );

registerServiceWorker();

