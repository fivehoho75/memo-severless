import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
