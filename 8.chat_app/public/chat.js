const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const webpath = path.join(__dirname, 'public', 'webpage');

router.post('/chat', (req, resp, next) => {
    const { text } = req.body;

    // Append the text to the file
    fs.appendFileSync(path.join(__dirname, 'message.txt'), text + '\n');

    resp.sendFile(path.join(webpath, 'chat.html'));
});

module.exports = router;