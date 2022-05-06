const net = require("net");

const server = net.createServer(function (socket) {
    socket.on("data", function (data) { 
        // Waiting for data from client side 
        console.log("Data received on server: " + data)
        socket.write('Roger ' + data)
        // dispaying data received 
        socket.write("Roger, " + data); 
        //Acknowledging data received
        
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