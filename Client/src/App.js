import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppStyles from './AppStyles'
import FetchGetRequestInit from './fetchInit'
import { InputLabel, TextField, Grid } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props)
    //const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      amazonOrderIsValid: null
    }

    this._onValidateOrderClicked = this._onValidateOrderClicked.bind(this)
  }

  componentDidMount() {

  }

  _onValidateOrderClicked(event) {
    const amazonOrderId = event.target.value
    const fetchUri = `/tryfindorder?id=${amazonOrderId}&region=DE`
    fetch(fetchUri, FetchGetRequestInit)
      .then(res => res.json())
      .then(data => {
        this.setState({
          amazonOrderIsValid: data.orderExists,
        })
      })
      .catch(error => console.log(error))

    //this.setState(state => ({
    //  orderId: amazonOrderId
    //}))
  }

  render() {
    const classes = this.props.classes

    /*const pageContent = (
      <p>
        <InputLabel><Typography variant="caption">Amazon Order ID #</Typography></InputLabel>
        <Input type="text" />
        <Button><Typography variant="caption">Validate</Typography></Button>
      </p>
    )*/

    return (
      <Container className={classes.root}>
        <form className={classes.root} noValidate autoComplete="off">
        
          <header className={classes.headerText}>
            <Typography variant="h5">Please, provide Amazon order id to verify</Typography>
          </header>
          <div className={classes.headerSplitLine}></div>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <InputLabel><Typography variant="caption">Amazon Order ID #</Typography></InputLabel>
            </Grid>
            <Grid item>
              <TextField
                //error
                id="amazonOrderId"
                label="Fill Order #"
                defaultValue="Order #"
              />
            </Grid>
            <Grid item>
              <Button  onClick={this._onValidateOrderClicked}
                variant="contained"
                color="primary">
                  <Typography variant="caption">Validate Order</Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    )
  }
}

export default withStyles(AppStyles)(App)
