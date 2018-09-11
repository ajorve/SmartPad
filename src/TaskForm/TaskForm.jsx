import React, { Component } from 'react'
import './TaskForm.css'
import PropTypes from 'prop-types'

class TaskForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTaskContent: ''
    }
  }

  handleUserInput = (e) => {
    this.setState({
      newTaskContent: e.target.value // task input value
    })
  }

  writeTask = () => {
    this.props.addTask(this.state.newTaskContent)
    this.setState({
      newTaskContent: ''
    })
  }

  render () {
    return (
      <div className="taskWrapper">
        <input className="taskInput"
          placeholder="Write a new task..."
          value={this.state.newTaskContent}
          onChange={this.handleUserInput} />
        <button className="taskButton"
          onClick={this.writeTask}>Add Task</button>
      </div>
    )
  }
}

TaskForm.propTypes = {
  addTask: PropTypes.string
}

export default TaskForm
