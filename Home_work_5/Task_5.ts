function getSum(a: number, b: number) {
    let result = 0;
    if (a < b) {
        for (a; a < b; a++) {
            result += a;
        }
        return result + b;
    } else if (a === b) {
        return `a === ${a}, b === ${b}`;
    } else if (a > b) {
        return `${a} > ${b}`;
    }
}

console.log(getSum(-3, 5));
console.log(getSum(-1, 3));
console.log(getSum(-2, 4));