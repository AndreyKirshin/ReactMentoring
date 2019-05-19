import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/app/App.jsx';

// import store from './state/store';
import configureStore from './state/configureStore';
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore(window.PRELOADED_STATE, window);

ReactDOM.hydrate(
    <App router={Router} store={store}/>,
    document.getElementById('mount-point')
);