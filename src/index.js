import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap-css-only/css/bootstrap.css'
import 'mdbreact/dist/css/mdb.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
