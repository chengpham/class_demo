
const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', ((err,data)=>err?console.log(err):
fs.writeFile(process.argv[3], data.split('\n').filter(i=>!i.includes('yes') ), err=>err?console.log(err):console.log('File created!'))))

