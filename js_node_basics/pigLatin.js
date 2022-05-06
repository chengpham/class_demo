
const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', ((err,data)=>err?console.log(err):
fs.writeFile(process.argv[3], 
data.split(' ').map(i=>{
    let text = [];
    if (i.match(/^(th|fr|pr|gr|str)/)){
        if(i.match(/^str/)){
            text.push(i.replace(i.slice(0,3), '')+i.slice(0,3)+'ay' )
        } else if (i.match(/\.$/)){
            text.push(i.replace(i.slice(0,2),'').slice(0,-1) + i.slice(0,2) + 'ay.')
        } else {
            text.push(i.replace(i.slice(0,2), '')+i.slice(0,2)+'ay' )
        }
    } else if (i.match(/^[aeiouAEIOU]/)){
        if (i.match(/\.$/)){
            text.push(i.slice(0,-1) +'way.')
        } else{
            text.push(i +'way')
        } 
    } else {
        if (i[0] === i[0].toUpperCase()){
            text.push(i[1].toUpperCase() + i.slice(2).replace(i[0], '')+i[0].toLowerCase() +'ay')
        } else{
            text.push(i.replace(i[0], '')+i[0]+'ay' )
        }
    } return text }).join(' '), err=>err?console.log(err):console.log('File created!'))))