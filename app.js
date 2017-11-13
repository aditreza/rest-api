const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
// morgan
app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

//routing
const index = require('./routes/index')
const api = require('./routes/api')

app.use('/', index)
app.use('/api', api)


app.listen(process.env.PORT || 3000, err => {
  if (!err) {
    console.log('serv listen on port 3000')
  }
})
