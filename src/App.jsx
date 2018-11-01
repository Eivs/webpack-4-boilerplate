import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { LocaleProvider } from '@QCFE/lego-ui';
import routes from './routes';

const App = () => (
  <LocaleProvider currentLocale="zh-CN">
    <Router>{renderRoutes(routes)}</Router>
  </LocaleProvider>
);

export default App;
