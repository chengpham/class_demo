// const map = (arr, func) => {
//     let newArr = []
//     for (let i of arr){
//         newArr.push(func(i))
//     } return newArr
// }

// const map = (arr, func)=>{
//   if (arr.length === 0) return [];
//   let [firstItem, ...rest] = arr;
//   let result = Array.isArray(firstItem) ? map(firstItem, func) : [func(firstItem)];
//   return [...result, ...map(rest, func)];
// }
const map = (arr,func)=>{
    console.log(arr[0], ...arr.slice(1))
    let result = Array.isArray(arr[0]) ? map(arr[0], func) : [func(arr[0])];
    return [...result, ...map(...arr.slice(1), func)]
}

const even = n => n % 2 == 0;
const pow2 = n => n ** 2;
const numbers = [1, 2, 3, 4, 5, 6];
console.log(map(numbers, even)); // [false, true, false, true, false, true]
// console.log(map(numbers, n => n.toString().repeat( n ))) // ['1', '22', '333', '4444', '55555', '666666']
// console.log(map(numbers, pow2)); // [1, 4, 9, 16, 25, 36]
// const names = ["Cersei", "Jon", "Arya"];
// console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']