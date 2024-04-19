function fibs(sequence) {
    let array = [0, 1];

    for (let i = 2; i < sequence; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array;
}

console.log(fibs(8));
