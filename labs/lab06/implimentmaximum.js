// const maximum = arr =>{
//     let num = 0;
//     for (let i in arr){
//         if (arr[i] > num){
//             num = arr[i]
//         }
//     } return num
// }
// const maximum = (arr) =>{
//     let num = [];
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] > num){
//             num.push(arr[i])
//         }
//     } return Number(num.slice(-1))
// }
const maximum = (arr) =>{
    if (arr.length == 1) return arr[0]
    return arr[0] > maximum(arr.slice(1)) ? arr[0] : maximum(arr.slice(1)) }

console.time('First Test: ')
console.log(maximum([ 213, 12, 66, 999 ])); //# should return 999
console.timeEnd('First Test: ')
console.time('Second Test: ')
console.log(maximum([ 1, 2, 3, 11, 3, 6, 5 ])); // # should return 11
console.timeEnd('Second Test: ')
