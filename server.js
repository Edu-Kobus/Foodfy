const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipe_data = require("./data")

server.use(express.static('public')) //css

server.set("view engine", "njk") //motor da view

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index", { items: recipe_data })
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/recipe-list", function(req, res) {
    return res.render("recipe-list", { items: recipe_data })
})

server.get("/recipes/:index", function (req, res) {
    // const recipes = recipe; // Array de receitas carregadas do data.js
    
    const recipeIndex = req.params.index;
    
    const recipes = recipe_data.find(function (recipe) {
              
        return recipe.index == recipeIndex
    })

    return res.render("recipes", { item: recipes })
  })

server.listen(5000, function (){ //server port
    console.log('server is running !')
})