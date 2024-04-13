//login.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const webpath = path.join(__dirname, 'public', 'webpage');

router.post('/login', (req, resp, next) => {
    const { text } = req.body;

    // Create a new file and write the text into it
    fs.writeFileSync(path.join(__dirname, 'message.txt'), text);

    resp.sendFile(path.join(webpath, 'login.html'));
});

module.exports = router;