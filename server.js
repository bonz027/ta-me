var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path'),
    port = process.env.PORT || 8080
<<<<<<< HEAD
    routes = require('./routes/routes')
    // apiRoutes = require('./api_routes'),
    mongoose = require('mongoose')
    databaseURL = 'mongodb://localhost:27017/TA-ME'

mongoose.connect(databaseURL, function (err) {
  console.log('connected to THE MONGODS')
})
=======
    // apiRoutes = require('./api_routes'),
    // mongoose = require('mongoose')
    // databaseURL = 'mongodb://localhost:27017/testUsers'

// mongoose.connect(databaseURL, function (err) {
//   console.log('connected to THE MONGODS')
// })
>>>>>>> 151008bf5c712eaa38e468cf8688505090746b82


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
// app.use('/api/v1', apiRoutes)
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, './public')))
=======
// app.use(express.static(path.join(__dirname, './public')))
>>>>>>> 151008bf5c712eaa38e468cf8688505090746b82
// http://localhost:3000/api/v1/cars
app.listen(port, function () {
  console.log('Server running on port: ', port)
})
