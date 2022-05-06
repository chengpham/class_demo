'use strict';
// console.log(this); // this will refer to global object, or `undefined` if we're in strict mode

// function printThis() {console.log(this)}
// printThis();

// const obj = {
//   printThis: function() {console.log(this)}
// }
// obj.printThis();

// function can(fn) {fn()}

// console.log('logging can');
// can(obj.printThis);
// const bindedPrintThis = obj.printThis.bind(obj)
// console.log('logging a binded ob.printthis function')
// can(bindedPrintThis)