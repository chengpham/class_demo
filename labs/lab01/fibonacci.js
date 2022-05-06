const num = Number(process.argv[2]);
if (!Number(num)){
    console.log("A number argument is required");
} else{
    let seq = [1,1];
    for(let i=0; i < num-2; i++){
        seq.push(seq[i] + seq[i+1])
    } console.log(seq); 
}