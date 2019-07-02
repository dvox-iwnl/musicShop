const express = require('express')
const md5 = require('md5')
var User = require('./modules/User')

var router = express.Router()

router.post('/api/register', function (req, res, next) {
    var body = req.body
    //利用MD5给密码加密
    body.password = md5(md5(body.password))
    User.findOne(
        {
            $or: [
                { username: body.username },
                { email: body.email },
            ]
        }, function (err, data) {
            if (err) {
                next(err)
            }
            if (data) {
                res.json({
                    status_code: 1,
                    message: '用户已存在'
                })
            }
            new User(body).save(function (err) {
                if (err) {
                    next(err)
                }
                res.json({
                    status_code: 0,
                    message: '注册成功！'
                })
            })
        })
})

router.post('/api/login', function (req, res, next) {
    var body = req.body
    User.findOne({
        username: body.username,
        password: md5(md5(body.password))
    }, function (err, data) {
        if (err) {
            next(err)
        }
        if (data) {
            req.session.user = data

            res.json({
                status_code: 2,
                message: '登录成功~'
            })
        }
    })
})

router.get('/api/userstatus',function(req,res,next){
    var data = req.session.user
    res.json(data)
})

module.exports = router