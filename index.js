var nome ="Alessandro Reis";
var cargo ="Developer";

var nomeHtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("text-1");
var texto2 = document.getElementById("text-2");

function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml (cargo){
    cargohtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function cliquenoprojetos(){
    console.log("Clicou no botão projetos")
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function cliquenosobre(){
    console.log("Clicou no botão sobre")
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);



