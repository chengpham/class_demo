const text = process.argv.splice(2).join(' ');
let texts = '';
for (let i=0; i < text.length; i++) {
    if (i % 2 != 0) {
        texts += text[i].toUpperCase()
    } else {
        texts += text[i].toLowerCase();
    }
}
console.log(texts);
