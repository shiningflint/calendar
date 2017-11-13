import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
require('./assets/favicons/favicon.ico');
require('./assets/favicons/android-chrome-192x192.png');
require('./assets/favicons/android-chrome-256x256.png');
require('./assets/favicons/manifest.json');

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
