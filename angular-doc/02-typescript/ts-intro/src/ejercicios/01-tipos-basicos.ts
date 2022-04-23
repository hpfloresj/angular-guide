

console.log('Hola Mundo! como estan');

/*
    ===== Código de TypeScript =====
*/
let nombre : string = 'Hugo';
let sueldo : number = 10;
console.log(nombre, sueldo);
// nombre = 1;

let sueldo_mixto: number | string;
sueldo_mixto = 10;
console.log(sueldo_mixto);
sueldo_mixto = '10';
console.log(sueldo_mixto);