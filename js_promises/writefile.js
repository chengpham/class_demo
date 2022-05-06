
const fs = require('fs')
function writeFile(path,option){
    return new Promise((res, rej)=>{
        fs.writeFile(path,option,(err,data)=>{
            if (err){
                reject(err)
            }
            res(data)
        })
    })
}

writeFile("./file.txt", "The contents of my file")
  .then(function () { console.log("File write complete!") })
  .catch(function (error) { console.error(error) })

async function writeFiles(){
    await Promise.all([
        writeFile("./file1.txt", "This is file 1"),
        writeFile("./file2.txt", "This is file 2")
    ])
}
writeFiles()

