import React from 'react';
import Button from './component/Button';

// @flow
const demo = (str: String): String => str;
console.log(demo([1, 2, 3, 4]));

const App = () => (
  <div>
    <Button size={32} className={23}>
      Button
    </Button>
  </div>
);
export default App;
