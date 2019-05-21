import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './client/view/app/App';
import configureStore from './client/state/configureStore';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="style.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="mount-point">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const store = configureStore();
    const renderApp = () => (
      <App
        context={context} 
        location={req.url} 
        router={StaticRouter} 
        store={store}
      />
    );
    
    renderToString(renderApp());

    const htmlString = renderToString(renderApp());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));

  };
}