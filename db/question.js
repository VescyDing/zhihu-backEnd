var mongoose = require('mongoose')
module.exports = {
    classify: Array,
    title: String,
    content: {
        type: String,
        default: ''
    },
    answerList: {
        type: Array,
        default: []
    },
    creator: mongoose.Schema.Types.ObjectId,
    creatTime: {
        type: Date,
        default: Date.now
    },
    answerCount: {
        type: Number,
        default: 0
    },
    startsCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    },
    visitCount: {
        type: Number,
        default: 0
    }
}