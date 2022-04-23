// https://www.typescriptlang.org/docs/handbook/2/classes.html

class Heroe2 {
    
    constructor(
        private _name:string, 
        public age: number
    ) {}

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    public showInformation(): string {        
        return this._name + ', edad: ' + this.age;
    }
}

// Examples:
const ironman2 = new Heroe2('IronMan', 20);
ironman2.age = 2;

console.log(ironman2.showInformation());;


