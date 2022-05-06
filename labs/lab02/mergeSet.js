
function mergeSet(arr1, arr2){
    let newArr = [];
    for (let i of arr1){
        newArr.push(i);
    }
    for (let j of arr2){
        if (!newArr.includes(j)){
            newArr.push(j);
        }
    }
    return newArr;
}



console.log(mergeSet([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]