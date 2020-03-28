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