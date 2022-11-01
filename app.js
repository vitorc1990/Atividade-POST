var express = require("express");
var app = express();
app.use(express.json());

app.get("/", function(req, res) {
    res.send("Oi, mundo");
});

var port = 3001;

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

//Iniciando o servidor
app.listen(port, function() {
    console.log(`App exemplo escutando na porta http://localhost:${port}/`);
});

app.post("/soma", function(req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post("/multiplicacao", function(req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);
    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

app.post("/subtracao", function(req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);
    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado}`);
});

app.post("/divisao", function(req, res) {
    var body = req.body;
    var resultado = divisao(body.a, body.b);
    res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});