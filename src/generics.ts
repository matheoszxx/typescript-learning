//Generics

function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);    
}

const numArray = concatArray<number[]>([1, 2], [5]);
const stringArray = concatArray<string[]>(["goku", "gohan"], ["vegeta"]);

//numArray.push("saitama")

console.log(numArray);
console.log(stringArray);

