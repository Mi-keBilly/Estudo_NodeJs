var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

const app = express()
const PORT = 5000;

// app.use("/teste",express.static(path.join(__dirname, 'client')))


let consoleBody = (req, res, next)=> {
    console.log(req.body)
    next()
}

 let hello = (req,res)=>{
     res.send("Hello world !")
 }


// app.post("/", hello)
// app.put("/", hello)
// app.delete("/", hello)

app.use("/", bodyParser.json())
app.use("/", consoleBody) 
app.get("/", hello)

app.listen(PORT, ()=> {console.log(`Server Running on Port:${PORT}`)})