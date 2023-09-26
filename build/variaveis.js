"use strict";
//declarando tipos primitivos
let ligado = false;
let nome = "Matheus";
let idade = 10;
let altura = 1.90;
//variaveis especiais: nulo, indefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
//função que não retorna nada: 
function executaQuerry() {
}
let retornoView = 10;
//trabalhando com Objects (duas maneiras de declarar objetos)
//Objeto - sem previsibilidade
let produto = {
    name: "Matheus",
    cidade: "Bahia city",
    idade: 20,
};
let itens = {
    name: "piso",
    preco: 89.90,
    unidades: 2.87
};
/**
 * Arrays
 */
//1ª forma de declarar uma array
let dados = ["Matheus", "Cleisa"];
//2ª forma de declarar uma array
let dados2 = ["Matheus", "Cleisa"];
//Arrays de multi types (que aceita dois tipos diferentes)
let infos = ["Matheus", 30, "Cleisa"];
/**
 * Tuplas
 */
//tem que respeitar a ordem e determinar os tipos
let boleto = ["agua conta", 120.90, 123456789];
/**
 * Array métodos
 */
dados.pop();
dados.map;
/**
 * Datas
 */
let aniversario = new Date("2023-09-26 05:00");
console.log(aniversario.toString());
