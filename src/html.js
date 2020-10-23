import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/components/App';

export default () => {
    const app = renderToString(<App />);
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