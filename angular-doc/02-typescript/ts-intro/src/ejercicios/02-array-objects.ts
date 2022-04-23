
// arreglo
let habilidades2: string[] = ['hola', 'mundo'];

console.log(habilidades2);


// Objeto
const persona = {
    nombre: 'Javi',
    sueldo: 20    
}

interface Personaje {
    nombre: string;
    sueldo: number;
    habilidades: string[];
    puebloNatal?: string;
    mostrarSueldo: (basico: number, descuento: number) => number;
}

const personaje : Personaje = {
    nombre: 'Hugo',
    sueldo: 1212.0,
    habilidades: ['a', 'b'],
    mostrarSueldo(basico: number, descuento:number): number {
        console.log('Mi paga es:', this.sueldo);
        return basico - descuento;
    }    
}

console.log(personaje.nombre);

console.table(personaje);

// Pasar un objeto a una funcion
function pagar(personaje: Personaje, sueldo: number, descuento: number) {
    personaje.sueldo = sueldo;
    console.log(personaje.mostrarSueldo(sueldo, descuento));
}

pagar(personaje, 20, 10);