const net = require("net");

const server = net.createServer(function (socket) {
    socket.on("data", function (data) { 
        if (typeof Number(data)){
            let newNum = String(data).split(',').map(i=>{return parseInt(i)}) 
            let maxNum = String(Math.max(...newNum))
            socket.write(maxNum)
        }
        else {
            let responseData = String(data).split('').reverse().join('')
            socket.write(responseData)
        }
    });
    socket.on('end', ()=>{
        console.log('-------------Connection closed---------')
    })
});
const ADDRESS='127.0.0.1'
const PORT=5000
server.listen(5000, ADDRESS, ()=>{
    console.log(`Server is listening on ${ADDRESS}:${PORT}`)
});