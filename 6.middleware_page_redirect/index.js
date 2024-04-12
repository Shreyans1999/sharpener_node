// app.use(bodyParser.urlencoded({extended: false})); sets up middleware in your Express application to parse incoming request bodies in the URL-encoded format and populate req.body with the parsed data, making it accessible in subsequent route handlers.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productpath = path.join(__dirname);

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.sendFile(`${productpath}/addpro.html`);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
