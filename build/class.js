"use strict";
//Classes
/*
    Data modifers
    public
    private
    protected
 */
//subclasses (classe que herda de outra classe "conceito de herança")
class Character {
    constructor(name, stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    //método
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//Character: superclass
//Magican: subclass
class Magican extends Character {
    constructor(name, stregth, skill, magicPoint) {
        //chamando o construtor da classe Character com o super
        super(name, stregth, skill);
        this.magicPoints = magicPoint;
    }
}
const p1 = new Character("Luffy", 10, 98);
const p2 = new Magican("Mago", 9, 30, 100);
p1.attack();
