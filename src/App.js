import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CreateTask from './components/createTask'
import { TableBody, TableRow } from '@material-ui/core'

class App extends Component {
  render () {
    return (
      <div>
        <Paper elevation={2} align="center">
          <Typography variant="headline" component="h2">
          SmartPad
          </Typography>
          <CreateTask/>
          <TableBody>
            <TableRow>
              <Typography align="center" component="p">

              </Typography>
            </TableRow>
          </TableBody>
        </Paper>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default App
