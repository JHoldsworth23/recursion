function fibs(sequence) {
    let a = 0;
    let b = 1;

    let array = [a, b];

    for (let i = 2; i < sequence; i++) {
        let c = a + b;
        a = b;
        b = c;
        array.push(c);
    }

    return array;
}

console.log(fibs(8));