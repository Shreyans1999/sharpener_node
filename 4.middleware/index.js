const express = require('express');
const app = express();


app.use((req,resp,next)=>{
    console.log("In the middleware");
    next();
});

app.use((req,resp,next)=>{
    console.log("In the another middleware");
    resp.send(`<h1> hello to node js </h1>`);
});

app.get('',(req,resp)=>{

});

app.listen(5000);