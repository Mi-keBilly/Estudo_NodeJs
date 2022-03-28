

//1 // Iserindo Argumentos e Módulos 


let calc = require("./calc")

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] == 's') {
    c = calc.soma(a, b);
} else if (args[0] == 'm') {
    c = calc.mult(a, b);
} else {
    c = "Proximo Estudo"
}

console.log(c)


//2 // Trabalhando com Arquivos em Node

let fs = require('fs') // como é um modulo original do Node nao precisa por o "./" 

// Função writeFile(pasta,documento,tratamento de erro) Cria uma pasta e escreve nela
fs.writeFile(
    'teste.txt',
    'Hello World',
    function (error) {
        if (error) { throw error }
        console.log("/1/Arquivo criado com sucesso!")
    }
)

// Função appendFile é para concatenar a pasta já criada
fs.appendFile(
    'teste.txt',
    '- Ola Mundo',
    function (error) {
        if (error) { throw error }
        console.log("/1/Arquivo atualizado com sucesso!")
    }
)

// Função unlink é para apagar a pasta
fs.unlink(
    'teste.txt',
    function (error) {
        if (error) { throw error }
        console.log("/1/Arquivo apagado com sucesso!")
    }
)

let fileName = args[0];

fs.readFile(fileName, "utf-8", (error,data)=>{
    if (error) throw error;
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{
        if(error) throw error;
        console.log("/2/Arquivo gerado com sucesso!")
    })
})


