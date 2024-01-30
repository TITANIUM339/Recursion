function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const firstHalf = mergeSort(arr.slice(0, mid));
    const secondHalf = mergeSort(arr.slice(mid));

    const sorted = [];

    let i = 0, j = 0;

    while (true) {
        if (firstHalf[i] < secondHalf[j]) {
            sorted.push(firstHalf[i++]);
        } else {
            sorted.push(secondHalf[j++]);
        }

        if (i === firstHalf.length && j !== secondHalf.length) {
            sorted.push.apply(sorted, secondHalf.slice(j));
            break;
        }

        if (j === secondHalf.length && i !== firstHalf.length) {
            sorted.push.apply(sorted, firstHalf.slice(i));
            break;
        }
    }

    return sorted;
}

const arr = [0, 1, 1, 2, 3, 5, 8, 13];

console.log(mergeSort(arr));
