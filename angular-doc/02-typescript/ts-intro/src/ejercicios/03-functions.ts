function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(result);

function sum2(a: number, b: number): number {
    return a + b;
}

const result2 = sum2(1, 2);
console.log(result2);

// arrow 
const sumArrow = (a: number, b:number):number => {
    return a+b;
}

const sumArrow2 = (a: number, c?: number, b:number=2):number => {
    return a+b;
}


console.log(sumArrow2(1,2));