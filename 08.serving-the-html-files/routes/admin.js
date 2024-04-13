const path = require('path');
const express = require('express');
const publicpath = path.join(__dirname,'../views');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(`${publicpath}/add-product.html`);
});

router.get('/contact', (req, res, next) => {
  res.sendFile(`${publicpath}/contact.html`);
});

module.exports = router;