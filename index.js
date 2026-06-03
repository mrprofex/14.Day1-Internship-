const express = require('express');
const app = express();  //ask 
const math = require("./module/math")
const news = require("./dataset/news");
const {searchByCategory: seCat, searchByCategory}=require("./module/util")
const { resourceUsage } = require('node:process');
// console.log(math.add(3,6));
// console.log(math.sub(6,7));

app.listen(3000, ()=>{
    console.log("your server is run in the http://localhost:3000")
})

app.get("/", (req, res)=>{
    res.send("hello, world");
})

app.get("/about",(req, res)=>{
    res.send("This is an about page")
})

//send all news 
//1 news

app.get("/news", (req, res)=>{
    if(req.query.category){
        console.log("Category:"+ req.query.category);
        return res.send(seCat(req.query.category,news));
    }
    if (req.query.searchterm){
        console.log("Search Term:"+ req.query.searchterm);
        filternews = searchterm(req.query.searchterm,filternews);
    }
})



//send new with id 
app.get("/news/:id", (req, res)=>{
    const id = req.params.id;
    for (let i=0; i<=news.length;i++){
        if (news[i].id==id){
            return res.send(news[i]);
        }
    }return res.send("news not found")
})
