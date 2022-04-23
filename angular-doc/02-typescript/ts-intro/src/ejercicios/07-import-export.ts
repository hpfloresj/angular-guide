import { Producto, calcularIGV_v3 } from "./06-Destructuring";


const carritoCompras: Producto[] = [
    {
        modelo: 'Telefono 1',
        precio: 100
    },
    {
        modelo: 'Telefono 2',
        precio: 200
    }
];

carritoCompras.forEach(function(elemento, index, array) {
        console.log('index modelo precio', index, elemento);
});

carritoCompras.forEach((elemento, index) => {
    console.log('index modelo precio', index, elemento);
});

const [total, precio] = calcularIGV_v3(carritoCompras);
console.log(total);
console.log(precio);