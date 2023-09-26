//declarando tipos primitivos

let ligado: boolean = false
let nome: string = "Matheus"
let idade: number = 10
let altura: number = 1.90;
 
//variaveis especiais: nulo, indefined
let nulo: null = null;
let indefinido: undefined = undefined

//tipos abrangentes: any, void
let retorno: void
//função que não retorna nada: 
    function executaQuerry(): void{
    }
let retornoView: any = 10

//trabalhando com Objects (duas maneiras de declarar objetos)

//Objeto - sem previsibilidade
let produto: object = {
    name: "Matheus",
    cidade: "Bahia city",
    idade: 20,
}

//Objeto - tipado com previsibilidade
type ProdutoLoja = {
    name: string;
    preco: number;
    unidades: number;
}

let itens: ProdutoLoja = {
    name: "piso",
    preco: 89.90,
    unidades: 2.87
}

/**
 * Arrays
 */
//1ª forma de declarar uma array
let dados: string[] = ["Matheus", "Cleisa"]
//2ª forma de declarar uma array
let dados2: Array<string> = ["Matheus", "Cleisa"]

//Arrays de multi types (que aceita dois tipos diferentes)
let infos: (string | number)[] = ["Matheus", 30, "Cleisa"]

/**
 * Tuplas
 */

//tem que respeitar a ordem e determinar os tipos
let boleto:[string, number, number] = ["agua conta", 120.90, 123456789]

/**
 * Array métodos
 */
dados.pop();
dados.map;

/**
 * Datas
 */
let aniversario: Date = new Date("2023-09-26 05:00");
console.log(aniversario.toString());
