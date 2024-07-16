const express=require('express');
require('dotenv').config();
const app=express();
app.get('/',(req,res)=>{
    res.send('<h1>This is an home page</h1>');
})
app.get('/login',(req,res)=>{
    res.send('<h1>This an login page</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`This app is running on ${process.env.PORT}`);
})