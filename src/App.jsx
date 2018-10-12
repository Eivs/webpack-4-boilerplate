import React from 'react';
import '@QCFE/lego-ui/lib/scss/lego-ui.min.css';
import { Button, Message } from '@QCFE/lego-ui';
import '@QCFE/lego-font/main.scss';

const notify = () => {
  Message.info('haha');
};
const App = () => (
  <div>
    Hello!
    <Button onClick={notify}>Button</Button>
  </div>
);
export default App;
