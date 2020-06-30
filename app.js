require('dotenv').config({ path: 'variables.env' })

//const bodyParser = require('body-parser')
//const indexRouter = require('./routes/index')
//const usersRouter = require('./routes/users')
//const Datastore = require('nedb')
//const cron = require('node-cron')
//const Pusher = require('pusher')
const fetch = require('node-fetch')
const express = require('express')
const createError = require('http-errors')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const clientUrl = process.env.CLIENT_URL

let app = express()

//const db = new Datastore();

//const pusher = new Pusher({
//  appId: process.env.PUSHER_APP_ID,
//  key: process.env.PUSHER_APP_KEY,
//  secret: process.env.PUSHER_APP_SECRET,
//  cluster: process.env.PUSHER_APP_CLUSTER,
//  encrypted: true,
//});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'Client', 'build')))

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// error handler
app.use(function(err, req, res, next) {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.status(err.status || 500)
  res.send('error') //res.render('error');
})

app.get('/tryfindorder', async (req,res) => {
  const { id, region } = req.query;
  try {
    const url = `https://data.seller.tools/api/v1/orders/${id}`
    const orderInfo = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${process.env.AmazonApiKeyDE}`,
      },
    })
    const json = await orderInfo.json()
    const {data} = json
    let orderExists = false
    if(data && data.amazon_id && data.amazon_id === id && data.items && data.items.length > 0) {
      orderExists = true
    }

    res.status(200).json({orderExists: orderExists})
    //res.status(200).send(orderInfo.body)

    //res.render('index', json)
      //.then(res => res.json())
      //.then(data => data.items)
      //.catch(error => console.log(error));
  } catch (err) {

  }
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

app.set('port', process.env.PORT || 5000)

module.exports = app
