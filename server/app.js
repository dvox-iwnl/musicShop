const express = require('express')
var router = require('./router')
var cors = require('cors')
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()

app.use('/public/',express.static('/public/'))

app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    headers:['Content-Type,Content-Length, Authorization, Accept,X-Requested-With']
}))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())
//配置session功能,默认node没有cookie和session功能
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))

app.use(router)

//配置全局错误中间间
app.use(function(err,req,res,next){
    res.json({
        error_code:500,
        message:err.message
    })
})

app.listen(3000,()=>console.log('connect server listening on port 3000....'))