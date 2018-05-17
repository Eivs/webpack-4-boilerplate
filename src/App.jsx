import React, { Component } from 'react'
import { Button, Message } from '@QCFE/lego-ui'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Demo</h1>
        <Button onClick={() => Message.info('ok')}>Test</Button>
      </div>
    )
  }
}

export default App
