const express = require('express');
const router = express.Router();
const path = require('path');
const publicpath = path.join(__dirname,'webpage');
// console.log(publicpath);

router.get('/admin',(req,resp,next)=>{
    resp.sendFile(`${publicpath}/admin.html`)
});

router.post('/product', (req, resp, next) => {
    console.log(req.body);
    resp.redirect('/');
});

module.exports = router;