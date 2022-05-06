const num = parseInt(process.argv[2]);
switch(true){
    case num >= 80: 
        console.log("A");
        break;
    case num >= 68:
        console.log("B");
        break;
    case num >= 55:
        console.log("C");
        break;
    case num >= 50:
        console.log("D");
        break;
    default: 
        console.log("F");
}
