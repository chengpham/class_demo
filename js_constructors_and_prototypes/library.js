
class Library {
    constructor(){
        this.shelf = [];  
    }
    shelve(i){this.shelf.push(i); return this}
    findByTitle(a){
        for (let i=0; i<this.shelf.length; i++){
        if(this.shelf[i].title.toLowerCase().includes(a.toLowerCase())) console.log(`Book {title: "${this.shelf[i].title}", authors: Array(${this.shelf[i].authors.length}), edition: ${this.shelf[i].edition}}`) 
        }
    }
    list(){console.log(this.shelf)}
}
class Book extends Library {
    constructor(title, authors, edition){
        super();
        this.title = title;
        this.authors = authors;
        this.edition = edition;
    }
}
const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
  "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);
const lib = new Library();
lib.shelve(eloquentJS).shelve(speakingJS).shelve(theRustProgLang);
lib.findByTitle("eloquent"); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
lib.findByTitle("Rust"); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}

lib.list()