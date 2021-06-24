const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();


app.use(express.static(path.join(__dirname,'/public/')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

console.log(__dirname);
app.get("/",(req,res)=>{
    res.render('index',{title: 'Index'});
})

app.listen(3000,()=>{
    console.log('PS Project Running on port 3000!');
})
