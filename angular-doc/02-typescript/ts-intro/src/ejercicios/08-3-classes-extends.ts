/**
 * Classes may extend from a base class. A derived class has all the 
 * properties and methods of its base class, and also define additional members.
 */
 class Person {
    
    constructor(
        private _name: string,
        private _age: number
    ){}

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

}

class Employee extends Person {

    constructor(
        name: string,
        age: number,
        private _salary: number
    ){
        super(name, age);
    }
    
    get salary(): number {
        return this._salary;
    }

    set salary(salary: number) {
        this._salary = salary;
    }

    info(): string {
        return `Basic info: Name: ${super.name}, Age: ${super.age}, Salary: ${this.salary}`;
    }
}

const employee = new Employee('Hugo', 30, 2000);
console.log(employee.info());
