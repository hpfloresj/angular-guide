/**
 * Classes, much like interfaces, can be generic. When a generic class is 
 * instantiated with new, its type parameters are inferred the same way as in a function call:
 */

 class Box<T> {
    
    constructor(
        public value: T
    ){}    
}

const box1 = new Box('Hello');
const box2 = new Box(2);

console.log(box1.value);
console.log(box2.value);
