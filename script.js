var formulario = document.getElementById("cadastro");
formulario.onsubmit = validarDados;
function validarDados() {
var nomeCompleto = document.getElementById("nome");
var cpf = document.getElementById("cpf");
var rg = document.getElementById("rg");
var sexo = document.getElementById("sexo");
var endereco = document.getElementById("endereço");
var numero = document.getElementById("número");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
var cep = document.getElementById("cep");
var telefone = document.getElementById("telefone");
var celular = document.getElementById("celular");
if (nomeCompleto.value == "") {
alert("O campo nomeCompleto não pode ficar vazio...");
nomeCompleto.focus();
return false;
}
if (cpf.value == "") {
alert("O campo CPF não pode ficar vazio...");
cpf.focus();
return false;
}
if (endereco.value == "") {
alert("O campo endereço não pode ficar vazio...");
endereco.focus();
return false;
}
if (numero.value == "") {
alert("O campo número não pode ficar vazio...");
numero.focus();
return false;
}
if (celular.value == "") {
alert("O campo celular não pode ficar vazio...");
celular.focus();
return false;
}
alert("Dados enviados com sucesso! Nome completo: " + nomeCompleto.value + ", CPF: " + cpf.value + ", RG: " + rg.value + ", Sexo: " + sexo.value + ", Endereço: " + endereco.value + ", Número: " + numero.value + ", Bairro: " + bairro.value + ", Cidade: " + cidade.value + ", Estado: " + estado.value + ", CEP: " + cep.value + ", Telefone fixo: " + telefone.value + ", Celular: " + celular.value + ".");
r
return true;
}