abstract class Base {
    abstract getName(): string;

    printName(){
        console.log(`Hello ${this.getName()}`);
    }
}

//const b = new Base();

class Derived extends Base {

    constructor(
        public name: string
    ){
        super();
    }

    getName() {
        return `My name is ${this.name}`;
    }
}

const d = new Derived('Hugo');
d.printName();