var mongoose = require('mongoose')
module.exports = {
    classify: String,
    content: String,
    answerList: Array,
    creator: mongoose.Schema.Types.ObjectId,
    creatTime: {
        type: Date,
        default: Date.now
    },
    answerCount: Number,
    startsCount: Number
}