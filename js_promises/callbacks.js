const fs = require('fs')

fs.readFile('./files/page_1.md','utf8',(err,data)=>{ err? console.log('errer happend', err):console.log(data) })
fs.readFile('./files/page_2.md','utf8',(err,data)=>{ err? console.log('errer happend', err):console.log(data) })
fs.readFile('./files/page_3.md','utf8',(err,data)=>{ err? console.log('errer happend', err):console.log(data) })
