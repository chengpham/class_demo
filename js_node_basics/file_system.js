const fs = require('fs');

// fs.readdir('.', (err,data) => {console.log(data) })

// const text = 'Hello, world!'
// fs.writeFile('./abc/myFile.txt', text, err=>err?console.log(err):console.log('File created!'))

// fs.readFile('./abc/myfile.txt', 'utf8', (err,data)=>err?console.log(err): console.log('logging stuff from abc/myFile.txt\n', data))

const path = process.argv[2]
fs.readFile(path, 'utf8',(err,data)=> err? console.log(err):
data.split('\n').forEach((line,i)=>console.log(`${i+1} | ${line}`)))
