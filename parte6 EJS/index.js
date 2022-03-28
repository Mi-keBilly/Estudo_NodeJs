const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const path = require('path');

let users53 = [
    {
        id: 0,
        name: "Igor",
        phone: "(12)1234 4321"
    },
    {
        id: 2,
        name: "Vanessa",
        phone: "(12)1234 4321"
    },
    {
        id: 3,
        name: "Leia",
        phone: "(12)1234 4321"
    }



]

app.set("views", path.join(__dirname, 'views2')); //"views" eh a chamada do codigo EJS e "views" deve ser o nome da pasta
app.set("view engine", "ejs"); //chamando EJS


app.get("/", (req, res)=> {

    res.render('user', {users1:users53} )//"user" é o nome da view2//"users1" é a chamada do Html//"users53" é a chamada do objeto 



})















app.listen(PORT, ()=>{
    console.log('Server Running on', PORT)
})