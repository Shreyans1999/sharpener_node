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

router.get('/*', (req, resp, next) => {
    resp.send(`<h1>Page not found</h1>`)
});

module.exports = router;