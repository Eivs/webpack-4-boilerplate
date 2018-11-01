import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router';
import '@QCFE/lego-ui/lib/scss/index.scss';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
