const express = require('express');
const shoproute = require('./routes/shop');
const adminroute = require('./routes/admin');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(shoproute);
app.use(adminroute);

app.listen(3000);


