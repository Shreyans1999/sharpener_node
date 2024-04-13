const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const webpath = path.join(__dirname,'webpage')

router.post('/login',(req,resp,next)=>{
    resp.sendFile(`${webpath}/login.html`)
    const { text } = req.body;

    // Create a new file and write the text into it
    fs.writeFileSync('message.txt', text);
});

module.exports = router;