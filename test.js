// const arr = [[2,3,4], ['hello codecore', 1, true]]

// // for (let i=0; i< arr.length; i++){
// //     for (let j=0; j<= arr.length; j++){
// //         console.log(arr[i][j])
// //     }
// // }

// arr.flat()
// for (let i of arr){
//     console.log(i)
// }

// const arr = [2,2,2,2,1,5,3,2,1]
// console.log(arr.filter((n,i)=> i !== arr.indexOf(Math.min(...arr))))


// function calculateYears(principal, interest, tax, desired) {
//     let years = 0
//     while (principal < desired){
//         principal += principal * interest * (1-tax)
//         years++
//     }
//     return years
// }
// console.log(calculateYears(1000, 0.05, 0.18, 1100))


// function findShort(s){
//     return s.split(' ').reduce((a,b)=> a.length <= b.length? a : b).length
    // return Math.min.apply(Math, s.split(' ').map(str=>str.length))
// }
//  console.log(findShort("Let's travel abroad shall we"))
//  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


// function findMissingLetter(array){
//   return String.fromCharCode(array.map(n=>n.charCodeAt()).reduce((a,b)=> a+1 !== b ? a : b) + 1)
// }
// console.log(findMissingLetter(['O','Q','R','S']))

// function order(words){
//   return words.split(' ').sort((a,b)=> a.match(/\d/) - b.match(/\d/)).join(' ')
// }
// console.log(order("is2 Thi1s T4est 3a"))


// function findEvenIndex(arr){
//   return arr.forEach(n)
// }
// console.log(findEvenIndex([1,2,3,4,3,2,1]))



