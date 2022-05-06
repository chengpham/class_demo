const wait = require('./wait')

// const red = wait(1000, 'red')
// red.then(val=>{ console.log(val) })
// Promise.resolve(red).then(val=>{ console.log(val) })

console.time('a')
const red = wait(1000, 'red')
const blue = wait(1000, 'blue')
const green = wait(1000, 'green')

red.then((val)=>{ 
    console.log(val)
    console.timeLog('a')
})
blue.then((val)=>{ 
    console.log(val)
    console.timeLog('a')
})
green.then((val)=>{ 
    console.log(val)
    console.timeLog('a')
})

console.time('b')
Promise.all([
    wait(1000, 'purple'),
    wait(2000, 'yellow'),
    wait(1000, 'orange')
]).then((val)=>{ 
    console.log(val)
    console.timeEnd('b')
 })

 console.time('c')
 wait(1000, 'dog')
    .then(val=>{
        console.log(val)
        console.timeLog('c')
        return wait(1000, 'cat')
    })
    .then(val=>{
        console.log(val)
        console.timeLog('c')
        return wait(100, 'bird')
    })
    .then(val=>{
        console.log(val)
        console.timeLog('c')
    })


    Promise.race([
        wait(1000, 'Vancouver'),
        wait(2000, 'Burnaby'),
        wait(3000, 'Coquitlam')
    ])
    .then(val=>{
        console.log(val)
    })