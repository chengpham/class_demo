const net = require("net");
const client = new net.Socket();
client.on("data", function (data) {
    console.log("Response: " + data);
})
client.connect(5000, "127.0.0.1", function () {
    client.write("1,2,3,4,5,6,7,8,9")
});