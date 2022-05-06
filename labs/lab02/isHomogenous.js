function isHomogenous(val){
    for (let i=0; i<val.length; i++){
        let boolcheck = true;
        if (typeof(val[i]) != typeof(val[i+1])){
            boolcheck = false;
        }
        if (typeof(val[i]) == 'object' && typeof(val[i+1]) == 'object'){
            if (Array.isArray(val[i]) != Array.isArray(val[i+1])){
                boolcheck = false;
            }
        } return boolcheck;
    }
}

console.log(isHomogenous([1, 2, 3])); // true
console.log(isHomogenous(['a', 'b', 'c'])); // true
console.log(isHomogenous([[2], 'Xavier'])); // false
console.log(isHomogenous([[2], {colour: 'blue'}])); // false
console.log(isHomogenous([1, '2', 3])); // false