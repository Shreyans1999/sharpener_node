const express = require('express');
const chatfilter = require('./public/chat');
const loginfilter = require('./public/login');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(loginfilter);
app.use(chatfilter);

app.listen(3000);