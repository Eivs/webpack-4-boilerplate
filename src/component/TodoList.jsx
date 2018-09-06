import React, { PureComponent } from 'react'
import TodoListItem from './TodoListItem'
// import PropTypes from 'prop-types';

class TodoList extends PureComponent {
  render () {
    return (
      <ul className='todo-list'>
        <TodoListItem />
      </ul>
    )
  }
}

export default TodoList
