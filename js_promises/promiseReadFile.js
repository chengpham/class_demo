const fs = require('fs')

function pReadFile(path,option){
    return new Promise((res, rej)=>{
        fs.readFile(path,option,(err,data)=>{
            if (err){
                reject(err)
            }
            res(data)
        })
    })
}
pReadFile('./files/page_1.md', 'utf8')
    .then(data=>{
        console.log(data)
        return pReadFile('./files/page_2.md','utf8')     
    })
    .then(data=>{
        console.log(data)
        return pReadFile('./files/page_3.md','utf8')
    })
    .then(data=>{
        console.log(data)
        return 'Hello World'
    })
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })