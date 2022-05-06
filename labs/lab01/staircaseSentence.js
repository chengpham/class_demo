const arr = process.argv.splice(2);
let n = 1;
let space = '';
if (Number(arr.slice(-1))){
    n = arr.pop();
}
for (let word of arr){
    if (space.length > n) {
        space += ' |' + ' '.repeat(n);
    } else {
        space += ' '.repeat(n); 
    }
    if (word[word.length - 1] === '.') {
        console.log(space, word.slice(0,-1));
        space = ''; //space resets
    } else {
        console.log(space, word);
    }
}
