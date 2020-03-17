var express = require('express');
var router = express.Router();
var user = require('../db').user
var question = require('../db').question



/* GET home page. */
router.get('/', function(req, res, next) {
  user.find(function (err, user){
  if (err){
      return res.status(500).send('find error')
  }
  res.send('connected')
})
})

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
                delete docs[0].password
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

module.exports = router;
