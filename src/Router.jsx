import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SimpleA from './component/SimpleA';
import SimpleB from './component/SimpleB';

const App = () => (
  <Router>
    <div>
      <Link to="/SimpleA">SimpleA</Link>
      <br />
      <Link to="/SimpleB">SimpleB</Link>
      <br />
      <hr />
      <Route exact path="/" component={() => <h1>not found</h1>} />
      <Route path="/SimpleA" component={SimpleA} />
      <Route path="/SimpleB" component={SimpleB} />
    </div>
  </Router>
);

export default App;
