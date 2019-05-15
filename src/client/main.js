import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/app/App.jsx';
import { Provider } from 'react-redux';
import store from './state/store';
import ErrorBoundary from './view/errorBoundary/errorBoundary';


ReactDOM.render(
    <Provider store={store} >
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('mount-point')
);