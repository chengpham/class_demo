const [num1,num2] = [parseFloat(process.argv[2]), parseFloat(process.argv[3])];
let total = 0;
for (let i=0; i < num1; i++){
    const dice = Math.ceil(Math.random()*num2);
    console.log("Rolled: ", dice);
    total += dice;
};
console.log("---------------------");
console.log("Average Roll: ", total/num1);
console.log("Total: ", total)
