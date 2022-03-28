var express = require("express");
const app = express();
var bodyParser = require("body-parser");
var aluno = require("./routes/aluno")

app.use(bodyParser.urlencoded())

app.use("/aluno", aluno)

app.get("/", (req,res)=> {
    res.send("Hello World")
})

app.listen(5000, ()=> console.log('Server rodando...'))