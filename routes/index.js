var express = require('express');
var router = express.Router();
var user = require('../db').user
var question = require('../db').question



//主页
router.get('/', function(req, res, next) {
  res.send('connected')
})
//登陆
router.post('/login', function (req, res, next) {
    let browserRes = res
    user.find({account: req.body.account}, function (err, docs) {
        if (err){
            return browserRes.status(500).send(err)
        }
        if (docs.length == 0){
            new user({
                account: req.body.account,
                password: req.body.password,
                name: '知乎用户' + req.body.account,
            }).save(function (err, res) {
                if (err){
                    return browserRes.status(500).send(err)
                }
                browserRes.status(200).json({
                    message: '注册成功!'
                })
            })
        } else {
            if (docs[0].password == req.body.password){
                docs[0].password = undefined
                console.log(docs[0]);
                browserRes.status(200).json({
                    message: '登陆成功!',
                    userData: docs[0]
                })
            } else {
                browserRes.status(201).json({
                    message: '用户名或密码错误!'
                })
            }
        }
    })
});
//获取用户信息
router.put('/user', function (req, res, next) {
    let browserRes = res
    console.log(req.body)
    user.findByIdAndUpdate(req.body._id, req.body, function (err, docs) {
        if (err){
            return browserRes.status(500).send(err)
        } else {
            browserRes.status(200).json({
                message: '设置成功!'
            })
        }
    })
})

module.exports = router;
