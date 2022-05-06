
function matchingSet(arr1, arr2){
    let newArr = [];
    for (let i of arr1){
        if (!newArr.includes(i) && arr2.includes(i)){
            newArr.push(i);
        }
    } return newArr;
}



console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])); // [3, 4]
console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])) // ['j', 'n']