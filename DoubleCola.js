function whoIsNext(names, n) {
    while (n > names.length) {
        n = Math.floor((n - (names.length - 1)) / 2);
        console.log(n);
    }
    return names[n - 1];
}

module.exports = whoIsNext;
