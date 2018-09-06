import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';


class TodoListItem extends PureComponent {
  render () {
    return (
      <li className='completed'>
        <div className='view'>
          <input className='toggle' type='checkbox' checked />
          <label>Taste JavaScript</label>
          <button className='destroy' />
        </div>
        <input className='edit' value='Create a TodoMVC template' />
      </li>
    )
  }
}

export default TodoListItem
