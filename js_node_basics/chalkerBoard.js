const chalk = require('chalk');
const color = `bg${process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1).toLowerCase()}`
const width = process.argv[3], height = process.argv[4]
for (let i=0; i<height; i++){
    if (i%2==0){
    console.log(`${chalk[color](" ")}${chalk.bgWhite(" ")}`.repeat(width/2) )
    } else {
    console.log(`${chalk.bgWhite(" ")}${chalk[color](" ")}`.repeat(width/2) )
    }
}
