

// Create a class, Deck, that represents a deck of playing cards. In the constructor, initialize a full "deck" of Card instances representing all 52 possible cards without jokers storing it in the `Deck` instance. You must not create all 52 cards manually. Use iteration to create all cards.

// Finally, add the following prototype methods to Deck:
// - shuffle method that will randomly reorder the cards in the deck.
// - draw that will remove and return the top card of the deck.
// - reset method which resets deck to all 52 cards in order.
class Card {
    constructor(value, suit){
        this.value = value
        this.suit = suit
    }
    cards = {10: `10 of `, 11: `Jack of `, 12: `Queen of `, 13: `King of `, 14: `Ace of `}
    toString(){return `Card { ${this.cards[this.value]} ${this.suit.charAt(0).toUpperCase() + this.suit.slice(1)} }`}
}
const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');
console.log(kingOfDiamonds.toString()) // returns 'Card { King of Diamonds }'
console.log(aceOfSpades.toString()) // returns 'Card { Ace of Spades }'
console.log(tenOfHearts.toString()) // returns 'Card { 10 of Hearts }'

const cards = ()=>{}
class Deck {
    constructor()
}