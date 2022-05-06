
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log(`I'm thinking of a number between 1 and 10\n`)
let num = Math.ceil(Math.random()*10), guesses = 0;
const guessNum = ()=>{
    guesses++
    rl.question(`> `, (answer) => {
        if(answer !== num){
            guessNum();
        }
        if(answer == num){
            console.log(`Guessed "${answer}" correctly in ${guesses} attempts!`)
            rl.close()
        } else{ 
            console.log('Nope.  Try again.')
        }
})}
guessNum(); 