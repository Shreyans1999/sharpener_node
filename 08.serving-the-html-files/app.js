const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error404 = path.join(__dirname,'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use('/*',(req, res, next) => {
    res.status(404).sendFile(`${error404}/404error.html`);
});

app.listen(3000);
