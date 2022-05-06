const insults = ["you doofus!", "you bum, get a job", "you ugly duck"];

function insult(name){
    return `${name}, ${insults[Math.floor(Math.random()*3)]}`;
}
const ins = n => `${n}, ${["you doofus!", "get a job", "you ugly duck"][Math.floor(Math.random()*3)]}`;
const ins2 = () => `${["you doofus!", "get a job", "you ugly duck"][Math.floor(Math.random()*3)]}`;

console.log(ins("Bob"));
console.log(insult("Tom"));
console.log("John", ins2());