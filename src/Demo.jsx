import React, { Component } from 'react'
import { polyfill } from 'react-lifecycles-compat'
import PropTypes from 'prop-types'

class Demo extends Component {
  static propTypes = {
    text: PropTypes.node
  }

  constructor (props) {
    super(props)
    console.log('constructor')
    this.btnRef = React.createRef()
  }

  state = {
    value: null
  }

  static fn = () => {
    console.log('fn')
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    return null
  }

  // getSnapshotBeforeUpdate () {}

  set value (val) {
    this.setState({ value: val })
  }

  // componentWillMount () {
  //   console.log('componentWillMount')
  // }

  componentDidMount () {
    console.log('componentDidMount')
    console.log(this.btnRef)
  }

  // componentWillReceiveProps () {
  //   console.log('componentWillReceiveProps')
  //   return true
  // }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  // componentWillUpdate () {
  //   console.log('componentWillUpdate')
  // }

  componentDidUpdate () {
    console.log('componentWillUpdate')
  }

  FancyButton = React.forwardRef((props, ref) => (
    <button ref={this.btnRef} className='FancyButton'>
      {props.children}
    </button>
  ))

  render () {
    const { text } = this.props
    const { value } = this.state
    const { FancyButton } = this
    console.log('render')

    return (
      <React.Fragment>
        <h1>{text}</h1>
        <div>{value}</div>
        <FancyButton ref={this.btnRef}>Click me!</FancyButton>
      </React.Fragment>
    )
  }
}

polyfill(Demo)

export default Demo
