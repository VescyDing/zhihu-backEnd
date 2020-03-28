var mongoose = require('mongoose')
module.exports = {
    targetQuestion: { //想来想去，还是像这样保持表之间的双向连接，查找起来比较方便
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
    creatorJob: {
        type: String,
        default: ''
    },
    commentList: {
        type: Array,
        default: []
    },
    commentCount: {
        type: Number,
        default: 0
    },
    startsCount: {
        type: Number,
        default: 0
    },
    creatTime: {
        type: Date,
        default: Date.now
    },
}