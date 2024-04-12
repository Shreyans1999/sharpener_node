const express = require('express');
const router = express.Router();
const path = require('path');
const publicpath = path.join(__dirname,'webpage');

router.get('/',(req,resp,next)=>{
    resp.sendFile(`${publicpath}/shop.html`);
})

module.exports = router;