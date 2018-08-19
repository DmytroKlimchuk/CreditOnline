import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//My Components
import App from './components/app/app';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App />, document.querySelector('.app') );

registerServiceWorker();

