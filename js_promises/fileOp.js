const fs = require('fs')
const dir = './files'

function readdir(dir){
    return new Promise((res, rej)=>{
        fs.readdir(dir?dir:__dirname, (err, files) => { 
            if (err){rej(err)}
            res(files) 
        })
    })
}
function readFile(...path){
    return new Promise((res, rej)=>{
        fs.readFile(...path, (err,data)=>{
            if (err) return rej(err) 
            res(data)
        })
    })
}
function writeFile(...path){
    return new Promise((res, rej)=>{
        fs.writeFile(...path, err=>{
            if (err) return rej(err) 
            res()
        })
    })
}

readdir(dir)
.then(data => Promise.all(data.map(i => readFile(`${dir}/${i}`, 'utf8'))) )
.then(data=> writeFile(`${dir}/Allfiles.txt`, data.join('\n') ))
.then(()=>console.log('Completed writing files!'))
.catch(console.error)


