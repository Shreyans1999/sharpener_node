const express = require('express');
const loginRouter = require('./public/login');
const chatRouter = require('./public/chat');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'webpage')));
app.use(loginRouter);
app.use(chatRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});