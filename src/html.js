//@ts-check
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import Routes from './client/components/Routes';


export default (req, store) => {
    const preloadedState = store.getState()
    const app = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <Routes />
        </StaticRouter>
      </Provider>
    );
    return (
        `<html>
          <head></head>
          <body>
            <div id="root">${app}</div>
            <script>
               window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
            <script src="public.js"></script>
          </body>
        </html>`
    )
}