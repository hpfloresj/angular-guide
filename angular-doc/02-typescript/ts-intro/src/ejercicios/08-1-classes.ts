// https://www.typescriptlang.org/docs/handbook/2/classes.html

// The default visibility of class members is public.
// protected members are only visible to subclasses of the class they’re declared in.
// private is like protected, but doesn’t allow access to the member even from subclasses:

class Heroe {
    private _name: string;
    public age: number;    
    static realName: string;

    constructor(otherName?:string) {
        if (otherName !== undefined) {
            this.name = otherName
        }
    }

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
const ironman = new Heroe('IronMan');
ironman.age = 2;

console.log(ironman.showInformation());;


