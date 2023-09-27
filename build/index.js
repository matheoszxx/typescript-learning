"use strict";
//Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 2], [5]);
const stringArray = concatArray(["goku", "gohan"], ["vegeta"]);
console.log(numArray);
console.log(stringArray);
