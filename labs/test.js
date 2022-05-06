// const word = process.argv.splice(2);
// const text = word.slice(-1);
// console.log(word);
// console.log(text);
//console.log("Hello world. This is my calling.".replace(/\./g, ""));

//  const arr = ["1", "2", "3", "4", "5"];
//  console.log(arr.slice(-1));
//  console.log(arr.splice(-1));
//  console.log(arr);
// console.log(arr.concat(["6", "7", "8", "9"]));
// console.log(arr.join());

// const sum = (a,b) => a+b;

// function sum(num){
//     let summed = 0;
//     for (let n of num){
//         summed+=n;
//     } return summed;
// }
// console.log(sum([2, 3, 4, 5, 6]));

// console.log("Hello world".split("").reverse().join(""));

// function filteredArray(arr, elem) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(elem) === -1) {
//             newArr.push(arr[i]);
//         }
//     } return newArr;
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// console.log(["1", "2", "3", "4", "5"].indexOf("6")) // returns -1

// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.splice(arr.indexOf(6),1));
// console.log(arr);

// let foods = {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27};
// ['oranges','plums','strawberries'].forEach(i => delete foods[i]);
// console.log(foods); //{ apples: 25, bananas: 13, grapes: 35 }
// const {oranges, plums, strawberries, ...updatedObject} = foods; //  deconstruct object
// console.log(updatedObject);
  
// let users = {Alan: {age: 27, online: true}, Jeff: {age: 32, online: true}, Sarah: {age: 48, online: true}, Ryan: {age: 19, online: true}};
// function isEveryoneHere(obj) {
    // return users.hasOwnProperty('Alan') && users.hasOwnProperty('Jeff') && users.hasOwnProperty('Sarah') && users.hasOwnProperty('Ryan');
//     return 'Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users;
// }
// console.log(isEveryoneHere(users));
    

// const obj = {Alan: {online: false}, Jeff: {online: true}, Sarah: {online: false}};
// function countOnline(usersObj) {
//     let n = 0;
//     for (let user in usersObj) {
//         if (usersObj[user].online){
//             n++;
//         } 
//     } return n;
// }
// console.log(countOnline(obj));

// function findLongestWordLength(str) {
//     let string = str.split(' ');
//     let wordCount = 0;
//     for (let i=0; i<string.length; i++){
//         if (string[i].length >= wordCount){
//             wordCount = string[i].length;
//         }
//     } return wordCount;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// function largestOfFour(arr) {  
//     let array = []
//     for (let i=0; i<arr.length; i++){
//         array.push(Math.max(...arr[i]))  
//     } return array;
// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  
// function confirmEnding(str, target) {

//     return str.substring(target);
//   }
  
// console.log(confirmEnding("Bastian", "n"));

// function findElement(arr, func) {
//     for (let i=0; i<arr.length; i++){
//         if (func(arr[i])){
//             return arr[i];
//         }  
//     } return 'undefined'; 
// }
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // return 8.
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

// function titleCase(str) {
//     return str.toLowerCase().replace(/(^\D{1})|(\s{1}\D{1})/g, match => match.toUpperCase());
//   }
// console.log(titleCase("I'm a little tea pot"));

// function titleCase(str) {
//     let newStr = '';
//     let string = str.toLowerCase().split(' ');
//     for (let i = 0; i < string.length; i++){
//         newStr += string[i].charAt(0).toUpperCase() + string[i].slice(1) + ' ';
//     } 
//     let strs = '';
//     // string.forEach(s => s.charAt(0).toUpperCase() + s.slice(1) + ' ') //not working
//     return newStr;  
// }
// console.log(titleCase("I'm a little tea pot"));


// function frankenSplice(arr1, arr2, n) {
//     console.log(arr1)
//     // return arr2.splice(n,, 2);
//     return arr2.slice(0,n).concat(arr1).concat(arr2.slice(n));
//   }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// function bouncer(arr) {
//     let array = [];
//     for (let i of arr){
//       i ? array.push(i): i
//     }
//     return  array
// }
// console.log(bouncer([7, "ate", "", false, 9]));
  
// function getIndexToIns(arr, num) {
//     arr.push(num); 
//     return arr.sort((a, b) => a - b).indexOf(num)
// }
// console.log(getIndexToIns([40, 50, 30, 10, 20], 35));
// console.log(getIndexToIns([5, 3, 20, 3], 5))
// console.log(getIndexToIns([3, 10, 5], 3))


// const toArray = obj => Object.entries(obj)
// console.log(toArray({a:1, b:2, c:3, d:4}))

// const ArrayUtils = {
//     last: l => l[l.length-1],
//     first: f => f[0],
//     take: (t,n) => t.slice(n)
// }
// console.log(ArrayUtils.last([1,2,3,4,5,6]))
// console.log(ArrayUtils.first([1,2,3,4,5,6]))
// console.log(ArrayUtils.take([1,2,3,4,5,6], 3))
// console.log(ArrayUtils.take([1,2,3,4,5,6]))

// const counter = {
//     count: 0, step: 1,
//     inc(){this.count+=this.step; return this},
//     dec(){this.count-=this.step; return this},
//     now(){console.log(this.count); return this},
//     set(n){this.count = n; return this},
//     setStep(n){this.step=n; return this}
// }
// counter.now().inc().now().set(5).now().setStep(5).inc().now()


// function mutation(arr) {
//     for (let i of arr[1]){
//         if (!arr[0].toLowerCase().includes(i.toLowerCase())){
//             return false;
//         }
//     }  return true;
// }
// console.log(mutation(["hello", "hey"]))
// console.log(mutation(["hello", "Hello"]))
// console.log(mutation(["Mary", "Army"]))



// const food = [
//     { name: "Banana", type: "fruit" },
//     { name: "Apple", type: "fruit" },
//     { name: "Chocolate", type: "candy" },
//     { name: "Orange", type: "fruit" }
//   ];
  
//   console.log(food
//     .map(item => item.type)
//     .reduce((result, fruit) => {
//       result.push(fruit);
//       return [...new Set(result)];
//     }, []));

// function chunkArrayInGroups(arr, size) {
//     let newArray = [];
//     for (let i=0; i< arr.length; i+=size){
//         newArray.push(arr.slice(i, i+size))
//     } return newArray;
//   }
//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))


// function toArr(obj){
//     const myArr= [];
//     for (let i in obj){
//         myArr.push([i,obj[i]]);
//     } return myArr
// }
// console.log(toArr({name: "Simba", age: 16, numLegs: 4, "Potty Trained": true, barks(){console.log("Woof woof!")}}))


// const numbers = [65, 44, 12, 4];
// numbers.forEach((item,i,arr)=> arr[i] = item*10)
// console.log(numbers)

// const Window = function(tabs){this.tabs = tabs};
// Window.prototype.join = function(otherWindow){this.tabs = this.tabs.concat(otherWindow.tabs); return this};
// Window.prototype.tabOpen = function(){this.tabs.push('new tab'); return this};
// Window.prototype.tabClose = function(index){this.tabs = this.tabs.splice(0, index).concat(this.tabs.splice(1)); return this};
// let workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
// let socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
// let videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
// let finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);
//  //console.log(socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen()));


// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// function add(bookName,i) {
//     return bookName.concat(i);}
// function remove(bookName,i) {
//     return bookName.slice(0,bookName.indexOf(i)).concat(bookName.slice(bookName.indexOf(i)+1));}
// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
// console.log("newBookList: ", newBookList);
// console.log("newerBookList: ", newerBookList);
// console.log("newestBookList: ", newestBookList);
// console.log("Original: ", bookList);
// var filteredBook = bookList.filter(i=>i!="On The Electrodynamics of Moving Bodies")
// console.log(filteredBook)

// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];
// let bigCities = cities.filter(function (e) {
//     return e.population > 3000000;
// });
// console.log(cities.filter(i=>i.population > 300000).sort((c1,c2)=>c1.population-c2.population).map(c=>c.name+' : '+c.population))


// function isInRange(value) {
//     if (typeof value !== 'number') {
//         return false;
//     }
//     return value >= this.lower && value <= this.upper;
// }
// let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];
// console.log(data.filter(function(v){(typeof v !=='number')?console.log("false:", false): console.log("true: ", v>=this.lower&&v<=this.upper)}, {lower:1,upper:10}));
// console.log(data.filter(isInRange, {lower:1,upper:10}));

// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
//   ];
  
//   const sumOfAges = users.reduce((sum, user) => sum + user.age, 1);
//   console.log(sumOfAges); // 64

//   const usersObj = users.reduce((obj, user) => {
//     obj[user.name] = user.age;
//     return obj;
//   }, {});
//   console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

// function alphabeticalOrder(arr) {
// // return arr.sort((a,b)=> { return a.charCodeAt()-b.charCodeAt() })}
// return arr.sort((a,b)=> { return a===b ? 0: a > b ? 1 : -1  })}
// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

  
// function diffArray(arr1, arr2) {
//     var arr = arr1.concat(arr2).sort((a,b)=>{return a-b});
//     return arr1.filter((i)=>{ return arr2.indexOf(i) == -1 }).concat(arr2.filter((j)=>{ return arr1.indexOf(j) == -1 }))  }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) // should return ["pink wool"]
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))

// function destroyer(arr) {
//     return arr.filter(i=>[...arguments].slice(1).indexOf(i)==-1)    
//     //  return arr.filter(i => ![...arguments].slice(1).includes(i));
// };   
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
    
// function whatIsInAName(collection, source){
//     return collection.filter(i=>Object.keys(source).every(j=>i.hasOwnProperty(j) && i[j]==source[j]))  };
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

  
// function fearNotLetter(str) {
//     let arr = str.split('').map(i=>(i.charCodeAt()));
//     for (let i=0; i<arr.length; i++){
//       if (arr[i+1] - arr[i] != 1){
//         if(arr[i]==122){
//           return undefined
//         } return String.fromCharCode(arr[i]+1) }}}
  
//   console.log(fearNotLetter("abce"))
//   console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
  
// function uniteUnique(arr) {
//   return [].concat(...arguments).filter((e, i, a) => a.indexOf(e) == i);}
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


// function sumFibs(num) {
//     let p = 0, c = 1, r = 0;
//     while(c <= num){ 
//       if (c % 2 !== 0){ r += c;} c += p; p = c - p;
//     } return r;
//   }
//   console.log(sumFibs(4))
//   console.log(sumFibs(1000))


// function isPrime(v){
//     for(var i = 2; i < v; i++){
//         if(v % i === 0) { return 0; }
//     } return v}
// function sumPrimes(num) {
//     let r = 0;
//     for (let i = 2; i <= num; i++){
//     r += isPrime(i);
//     } return r }
// console.log(sumPrimes(10))


// let gcd = (a,b)=>{if(b==0) return a; if(a>=b && b>0) return gcd(b,a%b); return gcd(b,a)}
// let lcm = (a,b)=>a/gcd(a,b)*b
// let smallestCommons = (arr)=>{
//     let min = Math.min(...arr), max = Math.max(...arr), r=[];
//     for (let i = max; i >= min; i--){r.push(i)}
//     return r.reduce((p,c)=>lcm(c,p)) }
// console.log(smallestCommons([23,18]))
// console.log(smallestCommons([1,5]))

// function dropElements(arr, func){
//     return arr.findIndex(func)==-1?[]:arr.slice(arr.findIndex(func))}
//   console.log(dropElements([1, 2, 3], function(n) {return n < 3}))
//   console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3}))
  

// function steamrollArray(arr){
//     var flat = [];
//     arr.forEach(flatten);
//     return flat;
// function flatten(i){
//     if (!Array.isArray(i)){flat.push(i)} else{i.forEach(flatten)}} }
// console.log(steamrollArray([1, [2], [3, [[4]]]]))
  
  // function steamrollArray(arr){
  //   let flat = a=>[].concat(...a)
  //   return flat(arr.map(i=>Array.isArray(i)?steamrollArray(i):i))}
  // console.log(steamrollArray([1, [2], [3, [[4]]]]))

  // function truthCheck(collection, pre) {
  //   return collection.every(i => i.hasOwnProperty(pre) && (i[pre]))}
  // console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))
  // console.log(truthCheck([{"single": "yes"}], "single"))

  // function addTogether() {
  //   let f=arguments[0]
  //   if (typeof arguments[0]=='number' && typeof arguments[1]=='number'){ return arguments[0]+arguments[1]} 
  //   if (arguments.length==1 && typeof arguments[0] == 'number'){
  //     return function(){if (typeof arguments[0] == 'number') return f+arguments[0]}
  //   } return undefined
  // } 
  // console.log(addTogether(5)(7))
  // console.log(addTogether(2)([3]))

// let Person = function(firstAndLast) {
//   let fullname = firstAndLast.split(' ')
//   this.setFirstName = a=>{fullname[0] = a; return fullname[0]}
//   this.setFullName = a=>{fullname = fullname = a.split(' '); return fullname}
//   this.setLastName = a=>{fullname[1] = a; return fullname[1] }
//   this.getFullName = ()=>fullname.join(' ')
//   this.getFirstName = ()=>fullname[0]
//   this.getLastName = ()=>fullname[1]
// };
// let bob = new Person('Bob Ross');
// console.log(bob.getFirstName()); 
// console.log(bob.getFirstName()); 

// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   arr.forEach(i=>{
//     let temp = Math.round(2*3.141592653589793 * Math.sqrt(Math.pow(earthRadius + i.avgAlt, 3) / GM));
//     delete i.avgAlt; i.orbitalPeriod = temp }); return arr}
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])) 

// function integer_to_roman(num) {
//   if (typeof num !== 'number') 
//   return false; 
  
//   var digits = String(+num).split(""),
//   key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//   "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//   "","I","II","III","IV","V","VI","VII","VIII","IX"],
//   roman_num = "",
//   i = 3;
//   while (i--)
//   roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
//   return Array(+digits.join("") + 1).join("M") + roman_num;
//   }
  
//   console.log(integer_to_roman(27));

// let convertToRoman = (num)=>{
//   let n = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}, roman = '';
//   for (let i in n ) {
//     while ( num >= n[i] ) {roman += i;num -= n[i]}
//   } return roman;
// }
// console.log(convertToRoman(99))


// function checkCashRegister(price, cash, cid) {
//   let data={"ONE HUNDRED":10000,"TWENTY":2000,"TEN":1000,"FIVE":500,"ONE":100,"QUARTER":25,"DIME":10,"NICKEL":5,"PENNY":1};
//   let changeBack = cash*100-price*100, change = [], cidSum=0;
//     let changeSumCheck = changeBack
//     cid.reverse().forEach(i=>{
//     let currSum = i[1]*100, amount=0;
//     cidSum += currSum;
//     while(changeBack >= data[i[0]] && currSum){
//       amount += data[i[0]];
//       changeBack -= data[i[0]];
//       currSum -= data[i[0]];
//     } if (amount > 0){
//       change.push([i[0], amount/100]);
//     } })
//   if(changeBack>0){return {"status": "INSUFFICIENT_FUNDS","change": []}}
//   if(changeBack == 0 && (changeSumCheck) == cidSum){return {"status": "CLOSED", "change":cid.reverse()}}
//   return {"status":"OPEN", "change": change}}
// console.log(checkCashRegister(19.5, 20,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]] ));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))




