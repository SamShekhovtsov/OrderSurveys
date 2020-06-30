import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppStyles from './AppStyles'
import FetchGetRequestInit from './fetchInit'
import { InputLabel, TextField, Grid, Box } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props)
    const urlParams = new URLSearchParams(window.location.search);
    const storeRegion = urlParams.get("region")
    this.state = {
      amazonOrderIsValid: null,
      amazonOrderId: null,
      amazonOrderIdError: false,
      amazonOrderIdModified: false,
      amazonRegion: storeRegion,
    }

    this._onValidateOrderClicked = this._onValidateOrderClicked.bind(this)
    this._onAmazonOrderIdChange = this._onAmazonOrderIdChange.bind(this)
  }

  componentDidMount() {

  }

  _onValidateOrderClicked(event) {
    const { amazonOrderId, amazonRegion } = this.state
    if(amazonOrderId && amazonOrderId.length > 2) {
    const fetchUri = `/tryfindorder?id=${amazonOrderId}&region=${amazonRegion}`
    fetch(fetchUri, FetchGetRequestInit)
      .then(res => res.json())
      .then(data => {
        const {orderExists} = data
        this.setState({
          amazonOrderIsValid: orderExists,
          amazonOrderIdModified: false,
        })
      })
      .catch(error => console.log(error))
    }
    //this.setState(state => ({
    //  orderId: amazonOrderId
    //}))
  }

  _onAmazonOrderIdChange(event) {
    const amazonOrderId = event.target.value
    const amazonOrderIdValid = amazonOrderId && amazonOrderId.length > 2
    this.setState(state => ({
      amazonOrderId: amazonOrderId,
      amazonOrderIdError: !amazonOrderIdValid,
      amazonOrderIdModified: true,
    }))
  }

  render() {
    const classes = this.props.classes
    const { amazonOrderIdModified, amazonOrderIsValid, amazonOrderId, amazonOrderIdError } = this.state

    /*const pageContent = (
      <p>
        <InputLabel><Typography variant="caption">Amazon Order ID #</Typography></InputLabel>
        <Input type="text" />
        <Button><Typography variant="caption">Validate</Typography></Button>
      </p>
    )*/
    //<InputLabel></InputLabel>

    let orderValidationResult = ""
    if(amazonOrderIsValid != null && !amazonOrderIdError && !amazonOrderIdModified){
      if(amazonOrderIsValid) {
        orderValidationResult = <Typography color="success" variant="h6">Order {amazonOrderId} is found and valid!</Typography>
      } else {
        orderValidationResult = <Typography color="error" variant="h6">Order {amazonOrderId} is invalid!</Typography>
      }
    }

    return (
      <Container className={classes.root}>
        <form className={classes.root} noValidate autoComplete="off">
        <Container>
          <header className={classes.headerText}>
            <Typography variant="h5">Please, provide Amazon order id to verify</Typography>
          </header>
          <div className={classes.headerSplitLine}></div>
        </Container>
        <Container>
          <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                {orderValidationResult}
              </Grid>
              <Grid item>
                <TextField
                  {...(amazonOrderIdError ? {error: 'error'} : {})}
                  value={this.state.amazonOrderId}
                  onChange={this._onAmazonOrderIdChange}
                  id="txfAmazonOrderId"
                  label="Fill Order #"
                  //defaultValue="Order #"
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
          </Container>
        </form>
      </Container>
    )
  }
}

export default withStyles(AppStyles)(App)
