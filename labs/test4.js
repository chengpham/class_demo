// const NOW = new Date()
// const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000]]

// function timeAgo(date) {
//     let diff = Math.round((NOW - date) / 1000)
//     for (let t = 0; t < times.length; t++) {
//         if (diff < times[t][1]) {
//             if(t == 0) {
//                 return "Just now"
//             } else {
//                 diff = Math.round(diff / times[t - 1][1])
//                 return diff + " " + times[t - 1][0] + (diff == 1?" ago":"s ago")
//             }
//         }
//     }
// }

// console.log(timeAgo(1608583573369))

// console.log(Date('2015-10-10').getTime())

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Ap");
// console.log(a)
// let string = "Best guns in the world! #gunsRcool #toysRfun #gunsRcool"

// let strArray = []
// strArray.push(string.match(/\#[a-zA-Z0-9]+/g))
// console.log(strArray)

let testarr = [ 
[ [ '#snowDay', '#gunsRfun' ] ], 
[ [ '#tombraider', '#gunsRus', '#noGunning' ] ],  
[ [ '#gunsRcool' ] ],
[ null ],
[ null ],
[ null ],
[ null ]  
]  

 function flatten(arr){
    let flat = a=>[].concat(...a)
    return flat(arr.map(i=>Array.isArray(i)?flatten(i):i))}
  let newArray = flatten(testarr).reduce((prev, cur)=>{
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {})

const mycounts = testarr.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1
 }), {});
console.log(counts)
let newarr = ['#snowDay', '#gunsRfun', '#tombraider', '#gunsRus', '#noGunning', '#gunsRcool' ]
let counts = {};
// console.log(newarr.forEach(function(x) { counts[x] = (counts[x] || 0)+1; }))

let tweets = testarr.reduce((prev, cur)=>{
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
// console.log(tweets)