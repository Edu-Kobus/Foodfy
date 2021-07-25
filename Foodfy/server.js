const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipe = require("/data")

server.use(express.static('public')) //css

server.set("view engine", "njk") //motor da view

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("/")
})

server.get("/recipe-list", function(req,res){
    const id = req.query.id

    const list = recipe.find(function(list){
        return list.id == id
    })

    if (!list){
        return res.send("Recipe not found!")
    } //caso não encontre a receita

    return res.render("list", { item: list })
})

server.listen(5000, function (){ //server port
    console.log('server is running !')
})