function alphaRange(chStart, chEnd) {
    let arr = [];
    for (let i = chStart.charCodeAt(0); i <= chEnd.charCodeAt(0); ++i) {
        arr.push(String.fromCharCode(i));
    } return arr;
}
console.log(alphaRange('a', 'z')); // ["a", ..., "z"]
console.log(alphaRange('g', 'r')); // ["g", ..., "r"]
console.log(alphaRange('D', 'S')); // ["D", ..., "S"]
