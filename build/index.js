"use strict";
//Classes
/*
    Data modifers
    public
    private
    protected
 */
class Character {
    constructor(name, stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character("Luffy", 10, 98);
p1.attack();
