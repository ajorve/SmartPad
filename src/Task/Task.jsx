import React, { Component } from 'react'
import './Task.css'
import PropTypes from 'prop-types'

class Task extends Component {
  constructor (props) {
    super(props)
    this.taskContent = props.taskContent
    this.taskId = props.taskId
  }

  handleRemoveTask = (id) => {
    this.props.removetask(id)
  }

  render () {
    return (
      <div className="task fade-in">
        <span className="closebtn"
          onClick={() => this.handleRemoveTask(this.taskId)}>
                      &times;
        </span>
        <p className="taskContent">{ this.taskContent }</p>
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
