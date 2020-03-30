var mongoose = require('mongoose')
module.exports = {
    targetAnswer: { //想来想去，还是像这样保持表之间的双向连接，查找起来比较方便
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        default: ''
    },
    creator: mongoose.Schema.Types.ObjectId,
    creatorName: {
        type: String,
        default: ''
    },
    replierName: {
        type: String,
        default: ''
    },
    creatTime: {
        type: Date,
        default: Date.now
    },
    startsCount: {
        type: Number,
        default: 0
    },
}