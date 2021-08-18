const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipe = require("./data")

server.use(express.static('public')) //css

server.set("view engine", "njk") //motor da view

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", { items: recipe })
})

server.get("/layout", function(req,res){
    const recipes = [
        
    ]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    
    console.log(recipes[recipeIndex]);

    return res.render("layout")
})


server.listen(5000, function (){ //server port
    console.log('server is running !')
})