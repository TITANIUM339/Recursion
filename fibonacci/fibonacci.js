function fibs(n) {
    if (n < 1) return [];

    const sequence = [0, 1];

    for (let i = 2; i < n; i++)
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    sequence.splice(n);

    return sequence;
}

function fibsRec(n) {
    if (n < 1) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const x = fibsRec(n - 1);
    const y = fibsRec(n - 2);

    return x.concat(x[x.length - 1] + y[y.length - 1]);
}

console.log(fibs(8), fibsRec(8));
