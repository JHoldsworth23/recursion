function fibs(sequence) {
    let array = [0, 1];

    for (let i = 2; i < sequence; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array;
}

console.log(fibs(8));

function fibsRecursive(sequence) {
    if (sequence <= 1) {
        return [0, 1];
    } else {
        let array = fibsRecursive(sequence - 1);
        array.push(array[array.length - 1] + array[array.length - 2]);
        return array.slice(0, sequence);
    }
}

console.log(fibsRecursive(8));