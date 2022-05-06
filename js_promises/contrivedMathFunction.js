function add(a=0,val=0){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        if (isNaN(a) || isNaN(val)){
            rej('error')
        } 
        res(a+val)
    },1000)  
} )}
function mult(a=0,val=0){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        if (isNaN(a) || isNaN(val)){
            rej('error')
        } 
        res(a*val)
    },1000)  
} )}
function div(a=0,val=0){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        if (isNaN(a) || isNaN(val)){
            rej('error')
        } 
        res(a/val)
    },1000)  
} )}
function sub(a=0,val=0){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        if (isNaN(a) || isNaN(val)){
            rej('error')
        } 
        res(a-val)
    },1000)  
} )}
function pow(a=0,val=0){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        if (isNaN(a) || isNaN(val)){
            rej('error')
        } 
        res(a**val)
    },1000)  
} )}

add(9)
.then(val=> add(9,val) )
.then(val=> add(2,val) )
.then(val=> mult(5, val))
.then(val=> div(val, 10) )
.then(console.log)
.catch(err=>console.log(err))