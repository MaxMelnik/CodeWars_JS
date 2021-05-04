// function digital_root(number) {
//     let sum = String(number).split('').reduce((sum, digit) => (sum + +digit), 0);
//     if (sum.toString().length > 1) return digital_root(sum);
//     return sum;
// }

function digital_root(n) {
    return (n - 1) % 9 + 1;
}
// n = 9k + l // any number can be represented as k multiplicity of 9 and l remainder
// 10n = 90k + 10l
// 10n = 90k + 9l + l
// 10n = 9(10k + l) + l // the remainder is also l

module.exports = digital_root;
