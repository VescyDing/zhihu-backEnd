var mongoose = require('mongoose')
module.exports = {
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