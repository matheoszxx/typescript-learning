function addNumber(x: number, y: number): number {
    return x + y;
}

function addHello(name: string){
    return `${name}`
}

//function multi types
function callToPhone(phone: number | string): number | string{
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "matheus"
    
}

let soma: number = addNumber(1, 4)
console.log(soma);

console.log(addHello("Hello Matheus"));

