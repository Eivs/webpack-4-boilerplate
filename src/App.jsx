import React from 'react';
import { RadioGroup, RadioButton } from '@QCFE/lego-ui';
import SimpleA from './component/SimpleA';
import SimpleB from './component/SimpleB';

class App extends React.Component {
  state = {
    show: 'SimpleA',
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <RadioGroup
          name="Demo"
          defaultValue={show}
          onChange={value => {
            this.setState({ show: value });
          }}
        >
          <RadioButton value="SimpleA">DemoA</RadioButton>
          <RadioButton value="SimpleB">DemoB</RadioButton>
        </RadioGroup>

        {show === 'SimpleA' ? <SimpleA /> : <SimpleB />}
      </div>
    );
  }
}

export default App;
