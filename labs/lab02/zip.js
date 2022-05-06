// const zip = (arrA,arrB)=>{
//     if (arrA.length != arrB.length){
//         return "undefined";
//     } return arrA.map((z,i) => [z, arrB[i]]);
//}
const zip = (arrA,arrB)=>(arrA.length != arrB.length)?"undefined":arrA.map((z,i)=>[z, arrB[i]]);

console.log(zip([1, 2, 3], [4, 5, 6])) // [[1, 4], [2, 5], [3, 6]];
console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow'])); // [['firstName', 'Jon'], ['lastName', 'Snow']]
console.log(zip([0, 0, 0], [])); // undefined
console.log(zip(['x', 'y', 'z'], [5, 6, 10])); // [['x', 5], ['y', 6], ['z', 10]]
