function areValidArray(arr){
    for (let i of arr){
        return (Array.isArray(i)) ? true : false; 
    } 
}

console.log("Check 1: ", areValidArray([[1], [2], [4, 5]]));
console.log("Check 2: ", areValidArray([1, [2], [6, 7, 8]]));
console.log("Check 3: ", areValidArray([1], 2, [6, 7, 8]));
console.log("Check 3: ", areValidArray([[1], 2, [6, 7, 8]])); //Problem
console.log("Check 4: ", areValidArray(['true', 'false']));
