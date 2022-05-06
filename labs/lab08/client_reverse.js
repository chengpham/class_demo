const net = require("net");
const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
const client = new net.Socket();
let response = ''

client.on("data", function (data) {
    console.log("Response: " + data);
    return response = data
})
client.connect(5000, "127.0.0.1", function () {
    const talk = ()=>{
        rl.question('Send: ', (data)=>{
            if (data == 'q'){
                rl.close()
            }
            else{ client.write(data) }
            talk()
        }) 
        
    }
    talk()
});