const flatten = arr => {
    return arr.reduce((flat,i)=>{
        if (Array.isArray(i)){
            return flat.concat(flatten(i))
        } return flat.concat(i)
    }, [] )
}
// const flatten = ([first, ...rest]) => {
//     return [
//       ...(Array.isArray(first) ? flatten(first) : [first]),
//       ...(rest.length === 0 ? [] : flatten(rest)),
//     ]
//   }

console.log(flatten([ 1, 2, [3, [4, 5] ] ])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten([ 'a', [ 'b', ['c'] ] ])); // returns [ 'a', 'b', 'c' ]
console.log(flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]

