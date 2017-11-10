import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
require('./assets/favicons/favicon.ico');
require('./assets/favicons/android-chrome-192x192.png');
require('./assets/favicons/android-chrome-256x256.png');
require('./assets/favicons/manifest.json');

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
