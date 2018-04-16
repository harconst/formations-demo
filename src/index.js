import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './app.component';
import websocketMiddleware from './middleware/websocket';
import registerServiceWorker from './registerServiceWorker';

import demoApp from './reducers';

import './index.scss';

WebFont.load({
  google: {
    families: ['Barlow:300,400,400i,500,600,700']
  }
});

const enhancer = compose(applyMiddleware(thunkMiddleware, websocketMiddleware));
const store = createStore(demoApp, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
