import React, { Component } from 'react'
import './Task.css'
import PropTypes from 'prop-types'

class Task extends Component {

  handleRemoveTask = (id) => {
    this.props.removeTask(id)
  }

  render () {
    return (
      <div className="task fade-in">
        <span className="closebtn"
          onClick={() => this.handleRemoveTask( this.props.taskId )}>
                      &times;
        </span>
        <p className="taskContent">{ this.props.taskContent }</p>
      </div>
    )
  }
}

Task.propTypes = {
  taskContent: PropTypes.string,
  removetask: PropTypes.string,
  taskId: PropTypes.string
}

export default Task
