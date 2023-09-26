//Classes

/*
    Data modifers
    public
    private
    protected
 */

class Character {
    //nome é opcional
    private name?: string;
    stregth: number;
    skill: number;

    constructor( name: string, stregth: number, skill: number){
        
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);   
    }
}

const p1 = new Character("Luffy", 10, 98);
p1.attack()
