import React from 'react';
import { StaticRouter } from 'react-dom';
import { renderToString } from 'react-dom/server';
import Routes from './client/components/Routes';


export default (req) => {
    const app = renderToString(
        <StaticRouter context={{req.path}}>
          <Routes />
        </StaticRouter>
    );
    return (
        `<html>
          <head></head>
          <body>
            <div id="root">${app}</div>
            <script src="public.js"></script>
          </body>
        </html>`
    )
}