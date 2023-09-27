//Classes

/*
    Data modifers
    public
    private
    protected
 */

//subclasses (classe que herda de outra classe "conceito de herança")

class Character {
    //nome é opcional e com o private so pode ser acessado dentro da classe
    private name?: string;
    stregth: number;
    skill: number;

    constructor( name: string, stregth: number, skill: number){
        
        this.stregth = stregth;
        this.skill = skill;
    }
    //método
    attack(): void {
        console.log(`Attack with ${this.stregth} points`);   
    }
}

//Character: superclass
//Magican: subclass
class Magican extends Character {
    magicPoints: number

    constructor(
        name: string, 
        stregth: number, 
        skill: number, 
        magicPoint: number){

        //chamando o construtor da classe Character com o super
        super(name, stregth, skill)

        this.magicPoints = magicPoint;
    }

}

const p1 = new Character("Luffy", 10, 98);
const p2 = new Magican("Mago", 9, 30, 100)
p1.attack()
