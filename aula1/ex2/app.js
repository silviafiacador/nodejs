
/*segundo exemplo: criando módulos da calculadora */
//utilizando o módulo
// tenho que atribuir o modulo numa variável
var calculadora = require("./calculadora")
console.log(calculadora.nome)
console.log(calculadora.soma(2,4))
//alterando o conteúdo da variável nome
calculadora.nome="Calculadora Generation e Silvia"
console.log(calculadora.nome)
