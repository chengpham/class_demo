const args = process.argv.slice(2);
//console.log('Largest Number is: ', Math.max(...args));

if (args[0] >= args[1] && args[0] >= args[2]){
    console.log(args[0]);
} 
else if (args[1] >= args[0] && args[1] >= args[2]){
    console.log(args[1]);
} else {
    console.log(args[3]);
}
