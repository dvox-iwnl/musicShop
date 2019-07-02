var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/msdb',{ useNewUrlParser: true })

mongoose.connection.once('open',()=>console.log('connect musiceDB....'))

module.exports = mongoose