const express = require('express');
const cors = require('cors');
require('../db/connect/mongoose');
const Message = require('../db/models/messagesModel');

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());


app.get('/messages', async(req, res) => {
    try{
        const messages = await Message.find({});
        res.send(messages);
    }catch(e){
        res.status(400).send({message: e.message})
    }
})

app.post('/new-message', async (req, res) => {
    try{
        const message = new Message(req.body)
        await message.save();
        res.send(message);
    }catch(e){
        res.status(400).send({message: e.message})
    }
})


app.listen(port, () => {
    console.log(`server connected in port ${port}`);
})
