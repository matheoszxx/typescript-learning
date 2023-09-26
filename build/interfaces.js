"use strict";
//Interfaces (type x interface)
const bot = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: "2",
    name: "robo-cop",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello, i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Matheus");
console.log(p.sayHello());
