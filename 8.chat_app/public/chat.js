const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const webpath = path.join(__dirname,'webpage')

router.post('/chat',(req,resp,next)=>{
    resp.sendFile(`${webpath}/chat.html`)
    const { text } = req.body;

    // Append the text to the file
    fs.appendFileSync('message.txt', text + '\n');
});

module.exports = router;