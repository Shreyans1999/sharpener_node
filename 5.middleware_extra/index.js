const express = require('express');
const app = express();

app.use('/product',(req,resp,next)=>{
    console.log("In the middleware");
    next();
});

app.use('/help',(req,resp,next)=>{
    console.log("In the another middleware");
    resp.send(`<h1> hello to node js </h1>`);
});

app.use('/',(req,resp,next)=>{
    console.log("This will always run");
    next();
});

app.listen(5000);