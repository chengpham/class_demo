let bbt = "Penny, Sheldon, Lenard, Amy, Raj, Bernadette, Howard, Steward, Barry, Will"

let new_bbt = bbt.replace(/\s/g,'').split(',')


const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 





// const n = 3
// const result = [[], [], []] //we create it, then we'll fill it

// const wordsPerLine = Math.ceil(items.length / 3)

// for (let line = 0; line < n; line++) {
//   for (let i = 0; i < wordsPerLine; i++) {
//     const value = items[i + line * wordsPerLine]
//     if (!value) continue //avoid adding "undefined" values
//     result[line].push(value)
//   }
// }


// const partitionArray = (array, size) =>   array.map( (e,i) => (i % size === 0)     ? array.slice(i, i + size)     : null   )   .filter( (e) => e )
// console.log(partitionArray(items,3))

// var chunk_size = 3;
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var groups = arr.map( function(e,i){ 
//      return i%chunk_size===0 ? arr.slice(i,i+chunk_size) : null; 
// }).filter(function(e){ return e; });
// console.log({arr, groups})


// var newArr4 = items.slice(0,Number(items.length/3))

// function recursiveSplit(arr) { 
//     return arr.length <= 3 ? [arr] : 
//         recursiveSplit(arr.slice(0, Math.ceil(arr.length / 2)))
//         .concat(recursiveSplit(arr.slice(Math.ceil(arr.length /3))));
// }
// console.log(recursiveSplit(items))
// console.log(result)
// console.log(chunk(new_bbt,3))
// if (bbt.length%2==0){
//     console.log( [].concat(...new_bbt.splice(0,3)) )
// } else {
//     console.log('bottom', new_bbt.splice(3))
// }
  
// var chunks = function(array, size) {
//     var results = [];
//     while (array.length) {
//       results.push(array.splice(0, size));
//     }
//     return results;
//   };

//   console.log(chunks(new_bbt,3))
  
// Array.prototype.numTeam = function(n){
//     if ( !this.length ) { return [] }
//     return [ this.slice( 0, n ) ].concat( this.slice(n).numTeam(n) );
// };
// const numTeams = function(arr,n){
//     if ( !this.length ) { return [] }
//     return [ this.slice( 0, n ) ].concat( this.slice(n).numTeams(n) );
// };

// console.log(numTeams(new_bbt, 3))
// console.log(new_bbt.numTeam(3))
// let mylist2 = Array(3).fill().map(()=> new_bbt.length%2==0 ? [...new_bbt.splice(0,quantity)] : [...new_bbt.splice(0,quantity+1)] )
let arrL = new_bbt.length
// let mylist = Array(7).fill().map(()=> {
//     if (arrL % 7==0 ){ 
//         console.log('top')
//         return [...new_bbt.splice(0,1)]
//     } else if (new_bbt.length%3==0 || new_bbt.length/7 != arrL/7){
//         console.log('middle')
//         return [...new_bbt.splice(0,2)] 
//     } else {
//         console.log('bottom')
//         return [...new_bbt.splice(0,1)]
//     }
// })
// let mylist = Array(6).fill().map(()=> 
//     arrL % 6==0 ? [...new_bbt.splice(0,1)] :
//     new_bbt.length%3==0 || new_bbt.length/6 != arrL/6 ?
//      [...new_bbt.splice(0,2)]  :
//      [...new_bbt.splice(0,1)]
//   )

// console.log(mylist)

// let mylist = Array(6).fill().map(()=> 
//     arrL % 6==0 ? [...new_bbt.splice(0,1)] :
//     new_bbt.length%3==0 || new_bbt.length/6 != arrL/6 ?
//      [...new_bbt.splice(0,2)]  :
//      [...new_bbt.splice(0,1)]
//   )
// <% let arrL = cohort.length, c = parseInt(quantity) %>
// <% let mylist = Array(parseInt(quantity)).fill().map(()=> arrL % c==0 ? 
// [...cohort.splice(0,c)] : cohort.length%3==0 || cohort.length/c != arrL/6 ?
// [...cohort.splice(0,Math.floor(arrL/c)+1)] : [...cohort.splice(0,Math.floor(arrL/c))]

// cohort.length%3!=0? [...cohort.splice(0,Math.floor(cohortL/parseInt(quantity)))] : [...cohort.splice(0,Math.floor(cohortL/parseInt(quantity)) )] ) %>





function splitTeams(names, teams_count) {
    let teams = [];
    while (teams_count > 0) {
    teams.push(names.splice(0, Math.floor(names.length/teams_count)))
    teams_count--;
    } return teams
}

console.log(splitTeams(new_bbt, 4))