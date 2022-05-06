const text = process.argv.splice(2).join(' ');
let texts = '';
for (let i=0; i < text.length; i++) {
    if (text[i] === text[i].toLowerCase()) {
        texts += text[i].toUpperCase();
    } else if (text[i] === text[i].toUpperCase()){
        texts += text[i].toLowerCase();
    } else {
        texts += text[i];
    } 
}
console.log("Old String: ", text);
console.log("New String: ", texts);