import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

class CreateTask extends Component {
  render () {
    return (
      <Button variant="fab" size="small" color="primary">
        <AddIcon/>
      </Button>
    )
  }
}

export default CreateTask
