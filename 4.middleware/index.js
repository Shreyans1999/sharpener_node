const express = require('express');
const app = express();


const mid1 = (req,resp,next)=>{
    console.log("In the middleware");
    next();
}

const mid2 = (req,resp,next)=>{
    console.log("In the another middleware");
    resp.send(`<h1> hello to node js </h1>`);
}

app.use(mid1,mid2);

app.get('',(req,resp)=>{

});

app.listen(5000);