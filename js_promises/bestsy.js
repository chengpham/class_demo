
const fs = require('fs');

function readFile(path,option) {
    return new Promise((res,rej)=>{
        fs.readFile(path,option,(err,data)=>{
            if(err) {
                rej(err);
            }
            else{
                res(data);
            }
        })
    })
}
function append(str,buffer=''){
    buffer=buffer+str
    return buffer
}
// fs.appendFile('message.txt', 'data to append', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });
function writeFile(path,data) {
    return new Promise((res,rej)=>{
        fs.writeFile(path,data,(err)=>{
            if(err) {
                rej(err);
            }
            //console.log("content is:", data)
            res(data);
        })
    })
} 
function readDir(path){
    return new Promise((res,rej)=>{
        fs.readdir(path,(err,files)=>{
            if(err){
                rej(err)
            }
            console.log("file in dir:",files)
            res(files);
        })
    })
}
readDir('.')
.then((data)=>{
    //console.log(data);
    let str=''
    let array=Promise.all(data.map((file)=>{
        str='./'+file;
        readFile(str,'utf8')
    }))
    console.log(array)
})
.then((data)=>{
  writeFile('file.txt',data)
})
.then((data)=> {
        return writeFile("file.txt",data)
    })
.then(function () { console.log("File write complete!") })
.catch(function (error) { console.error(error) })

