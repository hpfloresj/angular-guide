//https://www.typescriptlang.org/docs/handbook/decorators.html
//https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

// Cambian las clases en el momento que son definidas en el momento que estan siendo compilados.
// El objetivo no es crearlos, es usarlo.
// El decorador es una funcio4n.


function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override'
    };
  }

@classDecorator
class MiSuperClase {
    miPropiedad: string = 'ABC123';

    imprimir() {
        console.log
    }    
}

console.log(MiSuperClase);