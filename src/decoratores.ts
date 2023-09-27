//decorators
//factory = função que recebe outra função
//documentar versão da api 

function apiVersion(version: string){
    //factory ( funão que recebe outra função   )
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Matheus"})
    }
}

//atribute decorator
function minTamanho(tamanho: number){
    return (target: any, key: string) => {
        //guardou o valor
        let __value = target[key];  

        //metodo de leitura
        const getter = () => 1 + __value;
        //método setar valor
        const setter = (value: string ) =>{
            if(value.length < tamanho){
                throw new Error(`Tamanho menor do que ${tamanho}`);
            }else{
                __value = value;
            }
        }
        //injeta os valores no return dela lá em cima
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}
class Api{
    @minTamanho(3)
    name: string;

    constructor(name: string){
        this.name = name; 
    }
}
const api = new Api("pro");
console.log(api.name);




