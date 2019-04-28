import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/app/App.jsx';
import { Provider } from 'react-redux';
import store from './state/store';


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('mount-point')
);