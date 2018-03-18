import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bootstrap from 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import $ from "jquery";
window.jQuery = $;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
