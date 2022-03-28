const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

let user = {
    id: 0,
    name: "Igor Oliveria",
    phone: "(21)1234-4321"

}

function render(data, obj) {
    for(let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key])
    }
    return data;
}

app.get("/", (req,res)=> {

    fs.readFile('./templates/user.html', 'UTF8', (err, data)=>{
        if (!err){

            res.send(render(data, user));
        }
    })
})

app.listen(PORT, ()=>{
    console.log('Server Running on', PORT)
})