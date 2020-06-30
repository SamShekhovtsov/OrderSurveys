import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppStyles from './AppStyles'
import FetchGetRequestInit from './fetchInit'
import { InputLabel, Input } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props)
    //const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      temp1323: false
    }
  }

  componentDidMount() {
  }

  render() {
    const classes = this.props.classes

    const pageContent = (
      <p>
        <InputLabel><Typography variant="caption">Amazon Order ID #</Typography></InputLabel>
        <Input type="text" />
        <Button><Typography variant="caption">Validate</Typography></Button>
      </p>
    )

    return (
      <Container className={classes.root}>
        <header className={classes.headerText}>
          <Typography variant="h5">Please, provide Amazon order id to verify</Typography>
        </header>
        <div className={classes.headerSplitLine}></div>
        {pageContent}
      </Container>
    )
  }
}

export default withStyles(AppStyles)(App)
