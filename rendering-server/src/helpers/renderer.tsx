import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';
import { Provider } from 'react-redux';
import createStore from './createStore';
import serialize from 'serialize-javascript';
import { renderRoutes } from 'react-router-config';
import { AppRoutes } from '../client/AppRoutes';
import { CustomStaticContext } from '../server';
import { Helmet } from 'react-helmet';

const renderer = (
  req: Request,
  store: ReturnType<typeof createStore>,
  context: CustomStaticContext
) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(AppRoutes)}
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
  <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    
    <body>
      <div id="root">${content}</div>

      <script id="redux-preload-state">
        window.__PRELOADED_STATE__ = ${serialize(store.getState())}
      </script>

      <script src="bundle.js"></script>

      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
  </html>
  `;
};

export default renderer;
