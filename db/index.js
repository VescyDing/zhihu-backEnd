var mongoose = require('mongoose')
//mongoose自带的增删改查的方法就是svae,find等等.
//要做的只是引入,连接数据库,确定原型

const user = require('./user')
const question =  require('./question')
const answer =  require('./answer')
const comment =  require('./comment')



mongoose.connect('mongodb://localhost/zhihu', { useNewUrlParser: true })
 
var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
    console.log('connected!');
});
 
module.exports = {
    user: mongoose.model('User', new mongoose.Schema(user)),
    question: mongoose.model('Question', new mongoose.Schema(question)),
    answer: mongoose.model('Answer', new mongoose.Schema(answer)),
    comment: mongoose.model('Comment', new mongoose.Schema(comment)),
};
