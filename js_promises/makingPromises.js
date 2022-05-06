

// const waitOneSecond = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('waited 1 second')
//         resolve(1)
//         // reject()
//     }, 2000)
    
// })

// waitOneSecond
// .then((a)=>{
//     console.log(a)
//     console.log('good value')  
// })
// .catch((a)=>{
//     console.log(a)
//     console.log('failed')
// })
// console.log('a')
// console.log('b')

function wait(n){
    return new Promise((res,rej)=>
    setTimeout(()=>{
        res(n)
    },n)  
)}
console.time('t')
wait(3000)
    .then(()=>{
        console.log('waited 3 seconds')
        console.timeLog('t')
})