//Interfaces (type x interface)

//type (é mais usado quando queremos tipar uma variavel especifica para que as propriedades dela sempre seja a mesma)
type robot = {
    readonly id: number;
     name: string;
 }
 const bot: robot = {
     id: 1,
     name: "megaman",
  }
 
  //interface (é mais usado quando utilizamos classes)
 interface robot2 {
     readonly id: number | string;
     name: string;
     sayHello(): string;
 }
 const bot2: robot2 = {
     id: "2",
     name: "robo-cop",
     sayHello: function (): string {
         throw new Error("Function not implemented.");
     }
 }
  
 class Pessoa implements robot2 {
     id: number | string;
     name: string;
     
     constructor(id: number | string, name: string ){
         this.id = id;
         this.name = name;
     }
     sayHello(): string{
         return `hello, i'm ${this.name}`;
     }
 }
 
 const p = new Pessoa(1, "Matheus")
 console.log(p.sayHello());
 
 