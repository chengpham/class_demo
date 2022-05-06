const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('what did you have for breakfast? \n', (answer) => {
    console.log(`ewww I hate, ${answer}.`)
    rl.close()
})
