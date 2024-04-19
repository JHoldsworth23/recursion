function splitArray(array) {
    let mid = Math.floor(array.length / 2);
    return [array.slice(0, mid), array.slice(mid)];
}

function merge(left, right) {
    let arr = [];
    let i = 0;
    let j = 0;

    while ((i < left.length) && (j < right.length)) {
        if (left[i] < right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        arr.push(left[i]);
        i++;
    }

    while (j < right.length) {
        arr.push(right[j]);
        j++;
    }

    // console.log(`Merge: ${arr}`);

    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    let [leftHalf, rightHalf] = splitArray(arr);

    // console.log(`Left: ${leftHalf}`);
    // console.log(`Right: ${rightHalf}`);

    let left = mergeSort(leftHalf);
    let right = mergeSort(rightHalf);

    return merge(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
