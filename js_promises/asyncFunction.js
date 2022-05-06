const wait = require('./wait')

async function awesome(){
    console.time('timer')
    // const red = await wait(1000, 'red')
    // console.log(red)
    // console.timeLog('timer')
    // const blue = await wait(2000, 'blue')
    // console.log(blue)
    // console.timeLog('timer')
    const colours = await Promise.all([
        wait(1000, 'red'),
        wait(2000, 'blue')

    ])
    console.log(colours)
    console.timeLog('timer')
}

awesome()
console.log('a')
console.log('b')