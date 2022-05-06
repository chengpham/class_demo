// const add = (a,b)=>{a+b};
// const flip = fn =>{ (a,b)=>{ fn(b,a) } }

// function V(x) {
//     return function(y) {
//         return function(z) {
//             return z(x)(y);
//         }
//     }
// }

// const V = x => y => z => z(x)(y);

// const loud = (logFn, fn) => {
//     logFn(`Calling: ${fn.name}`)
//     let val=fn();
//     logFn(`Called: ${fn.name} and Returned: ${val}`)
//     return val
// }
// let sayHi = ()=>{'Hi'}
// let sayBye = ()=>{'Bye'}
// loud(console.info,sayHi);
// loud(console.log, sayBye);

// const string = ["a", "b", "c", "d"]
// const repeat = (str, index) => {return str.repeat(index)}
// const rr = string.map(repeat)
// console.log(rr)

// const outMap = (arr,callback)=>{
//     const newArr = [];
//     for(let i=0; i<arr.length; i++){
//         newArr.push(callback(arr[i], i, arr))
//     } return newArr
// }
// const result = ourMap(strings, function (val,index){
//     return val.repeat
// })

// arr = [1,2,3,4,5]
// let sum = (arr)=>{
//     if (arr.length == 0){
//         return 0;
//     }return arr[0]+sum(arr.slice(1))
// }
// console.log(sum(arr))

// const factorial = n => {
//     if (n==1){
//         return n;
//     } return n* factorial(n-1)
// }
// console.log(factorial(4))

// const reverse = (str)=>{if(str.length==0){return ''}
//     return str[str.length-1] + reverse(str.slice(0,-1)) }
// console.log(reverse('Hello World'));

