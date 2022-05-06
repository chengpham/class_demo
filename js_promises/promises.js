const fs = require('fs').promises

const p = fs.readFile('./files/page_1.md', 'utf8')
p.then(data=>{ 
    console.log(data);
    return fs.readFile('./files/page_2.md', 'utf8')
}).then(data=>{
    console.log(data)
    return fs.readFile('./files/page_3.md', 'utf8')
}).then(data=>{
    console.log(data)
})
console.log('a')
console.log('b')