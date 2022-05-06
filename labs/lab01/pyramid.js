const num = parseInt(process.argv[2]);
let hash="";

for (let i=0; i<=num; i++){
    hash+= "#";
    console.log(hash);
};
/*
for (let i = 1; i <= num; i++){
    console.log(`${(' ').repeat(num-i)}${('# ').repeat(i)} \n`)
}
*/