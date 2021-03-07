const mongoose = require('mongoose')


const messageSchema = new mongoose.Schema({
    title:{
        type: 'String',
        required: true,
        lowercase: true,
    },

    message:{
        type: 'String',
        required: true,
        lowercase: true,
    }
},{
    timestamps: true
})

const Message = new mongoose.model('Message', messageSchema);

module.exports = Message;