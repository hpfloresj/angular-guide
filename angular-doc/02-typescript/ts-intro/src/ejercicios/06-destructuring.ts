/*
La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores 
de arreglos o propiedades de objetos en distintas variables.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

//-------------------------------------- Object
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 10,
    segundo: 20,
    cancion: 'Dua Lipa',
    detalles: {
        autor: 'Dua Lipa',
        anio: 2022
    }
}

// normal
console.log('Volumen: ', reproductor.volumen);

// Aqui es lo interesante
const {volumen, segundo, detalles} =  reproductor;
//const {autor:autorCopy} = detalles; // alias
const {autor} = detalles;

console.log(volumen);
console.log(segundo);
//console.log(autorCopy);
console.log(autor);


//-------------------------------------- Arrays

var dbz_js = ['Goku', 'Vegueta', 'Trunks']; // javscript
const dbz_ts: string[] = ['Goku', 'Vegueta', 'Trunks']; // typescript

// normal
console.log(dbz_ts[0]);
console.log(dbz_ts[1]);

// Aqui es lo interesante
const [GOKU, VEGUETA] = dbz_ts;
console.log(GOKU);
console.log(VEGUETA);


//-------------------------------------- Arguments

export interface Producto {
    modelo: string;
    precio: number;
}

const producto1: Producto = {
    modelo: 'Casio A168',
    precio: 149
}

const producto2: Producto = {
    modelo: 'Casio 53W',
    precio: 179
}


// Sin destructuracion
function calcularIGV(productos: Producto[]): number {
    let total: number = 0;
    productos.forEach((elemento) => {
        total += elemento.precio;
    }); 
    return total * 0.18;    
}

//-------------------------------------- Con destructuracion
function calcularIGV_v2(productos: Producto[]): number {
    let total: number = 0;
    productos.forEach(( {precio} ) => {
        total += precio;
    }); 
    return total * 0.18;    
}

export function calcularIGV_v3(productos: Producto[]): [number, number] {
    let total: number = 0;
    productos.forEach(( {precio} ) => {
        total += precio;
    }); 
    return [total, total * 0.18];    
}

const articulos = [producto1, producto2];

const igv1 = calcularIGV(articulos);
const igv2 = calcularIGV_v2(articulos);
const [total, precio] = calcularIGV_v3(articulos);


console.log('Igv sin destructuracion:', igv1);
console.log('Igv con destructuracion:', igv2);
console.log('Igv con destructuracion + arrgelo:', total, precio);
