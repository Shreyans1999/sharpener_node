const path = require('path');

const express = require('express');
const publicpath = path.join(__dirname,'../views');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(`${publicpath}/shop.html`);
});

module.exports = router;
