import React, { Component } from 'react'
import Demo from './Demo'

class App extends Component {
  state = {
    num: 0
  }

  constructor (props) {
    super(props)
    this.demoRef = React.createRef()
  }

  componentDidMount () {
    console.log(this.demoRef.current)
  }

  handleclick = () => {
    this.setState(preState => ({ num: preState.num + 1 }))
  }

  render () {
    const { num } = this.state
    return (
      <div>
        <button onClick={this.handleclick}> Add </button>
        <Demo ref={this.demoRef} text={num} />
      </div>
    )
  }
}

export default App
