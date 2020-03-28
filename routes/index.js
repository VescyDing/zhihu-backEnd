var express = require('express');
var router = express.Router();
var Func = require('./routerFunc')
var user = require('../db').user
var question = require('../db').question
var answer = require('../db').answer
var comment = require('../db').comment



//主页
router.get('/', function(req, res, next) {
  res.send('connected')
})
//登陆
router.post('/login', function (req, res, next) {
    console.log(req);
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
router.get('/user', function (req, res, next) {
    let browserRes = res
    user.findById(req.query._id,function (err, docs) {
        if (Func.errFunc(err, browserRes)) return
        browserRes.status(200).json({
            message: '获取成功!',
            userData: docs
        })
    })
})
//更新用户信息
router.put('/user', function (req, res, next) {
    let browserRes = res
    console.log(req.body)
    user.findByIdAndUpdate(req.body._id, req.body, function (err, docs) {
        if (err){
            return browserRes.status(500).send(err)
        } else {
            browserRes.status(200).json({
                message: '设置成功!',
                newUserData: docs
            })
        }
    })
})
//提交新问题
router.post('/question', function (req, res, next) {
    console.log(req.body);
    new question(req.body).save((err, docs)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.status(200).json({
            message: '提问成功!'
        })
    })
})
//获取问题列表
router.get('/question', function (req, res, next) {
    question.find({}, function (err, docs) {
        if (err){
            return res.status(500).send(err)
        }
        console.log(docs);
        res.status(200).json({
            questionList: docs
        })
    })
})
//点赞/踩问题
router.put('/question/startsCount', function (req, res, next) {
    let browserRes = res
    question.findByIdAndUpdate(req.body._id, req.body, (err, docs) => {
        if (Func.errFunc(err, browserRes)) return
        res.status(200).json({
            message: '操作成功！'
        })
    })
})
//问题浏览数加一
router.put('/question/visitCount', function (req, res, next) {
    let browserRes = res
    question.findByIdAndUpdate(req.body._id, req.body, (err, docs) => {
        if (Func.errFunc(err, browserRes)) return
        res.status(200).json({
            message: '浏览成功！'
        })
    })
})
//关注问题
router.post('/user/collect', function (req, res, next) {
    let browserRes = res
    user.findByIdAndUpdate(req.body._id, req.body, (err, docs) => {
        if (Func.errFunc(err, browserRes)) return
        question.findByIdAndUpdate(req.body.questionId, {$inc: {startsCount: 1}}, (err, docs) => {
            if (Func.errFunc(err, browserRes)) return
            res.status(200).json({
                questionNewData: docs,
                message: '关注成功'
            })
        })
    })
})
//添加回答
router.post('/answer', function (req, res, next) {
    console.log(req.body);
    new answer(JSON.parse(req.body.postData)).save((err, docs)=>{
        if(err){
            return res.status(500).send(err)
        }
        question.findByIdAndUpdate(req.body.questionId, {
            $push: {
                answerList: docs._id
            },
            $inc: {
                answerCount: 1
            }
        }, (err, docs)=>{
            res.status(200).json({
                message: '回答成功!'
            })
        })
    })
})
//获取回答列表
router.get('/answer', function (req, res, next) {
    answer.find({targetQuestion: req.query.questionId}, function (err, docs) {
        if (err){
            return res.status(500).send(err)
        }
        console.log(docs);
        res.status(200).json({
            answerList: docs
        })
    })
})
module.exports = router;
