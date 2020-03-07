var nome = "Calculadora Generation"

function soma(a,b) {
    return a+b
}
function subracao(a,b) {
    return a-b
}
function multiplicacao(a,b) {
    return a*b
}
function divisao(a,b) {
    return a/b
}

//para que eu consiga utilizar as funções em outro arquivo eu tenho que exportá-las
module.exports= {
    soma, //funcao
    subracao,//funcao
    multiplicacao,//funcao
    divisao,//funcao
    nome // variavel
}