const reduce = (arr, func, val) => {
    for (let i=0; i < arr.length; i++){
        val = func(val, arr[i])
        console.log(val)
    } return val
}



const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

// console.log(reduce(numbers, plus, 0)); // 15
console.log(reduce(numbers, (a, b) => a * b, 1)); // 120

// console.log(numbers.reduce((a,b) => a * b))