function fibs(sequence) {
    let array = [0, 1];

    for (let i = 2; i < sequence; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array;
}

console.log(fibs(8));

function fibsRecursive(n) {
    if (n == 1) return [0];
    if (n == 2) return [0, 1];

    let array = fibsRecursive(n - 1);
    return [...array, array[array.length - 1] + array[array.length - 2]];
}

console.log(fibsRecursive(8));