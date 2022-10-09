let digit: number;

function sumDigits(n: number) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}

console.log(sumDigits(2021));