import React, { Component } from 'react'
import Task from './Task/Task'
import TaskForm from './TaskForm/TaskForm'
import firebase from 'firebase'
import 'firebase/database'
import './App.css'
import { DB_CONFIG } from './Task/firebase'

class App extends Component {
  constructor (props) {
    super(props)
    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('tasks')

    this.state = {
      tasks: []
    }
  }

  componentWillMount () {
    const previousTasks = this.state.tasks

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousTasks.push({
        id: snap.key,
        taskContent: snap.val().taskContent
      })

      this.setState({
        tasks: previousTasks
      })
    })

    this.database.on('child_removed', snap => {
      for (var i = 0; i < previousTasks.length; i++) {
        if (previousTasks[i].id === snap.key) {
          previousTasks.splice(i, 1)
        }
      }

      this.setState({
        tasks: previousTasks
      })
    })
  }

  addTask = (task) => {
    this.database.push().set({ taskContent: task })
  }

  removeTask = (taskId) => {
    console.log('from the parent: ' + taskId)
    this.database.child(taskId).remove()
  }

  render () {
    return (
      <div className="taskWrapper">
        <div className="taskHeader">
          <div className="heading">React SmartPad</div>
        </div>
        <div className="taskAdder">
          <TaskForm addTask={this.addTask} />
        </div>
        <div className="taskBody">
          {
            this.state.tasks.map((task) => {
              return (
                <Task taskContent={task.taskContent}
                  taskId={task.id}
                  key={task.id}
                  removeTask ={this.removeTask}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App
