import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
