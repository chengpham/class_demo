class SubstitutionCipher {
    constructor(first, second){
        this.first = first
        this.second = second
    }
    encode(str){
        let cipher = ''
        for (let i of str){
            cipher += this.second.charAt(this.first.indexOf(i))
        } return cipher
    }
    decode(str){
        let cipher = ''
        for (let i of str){
            cipher += this.first.charAt(this.second.indexOf(i))
        } return cipher
    }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz"; 
let abc2 = "etaoinshrdlucmfwypvbgkjqxz"; 
const sub = new SubstitutionCipher(abc1, abc2); 
console.log(sub.encode("abc")) // => "eta"
// console.log(sub.encode("xyz")) // => "qxz"
// console.log(sub.encode("aeiou")) // => "eirfg"
// console.log(sub.decode("eta")) // => "abc"
// console.log(sub.decode("qxz")) // => "xyz"
// console.log(sub.decode("eirfg")) // => "aeiou"


