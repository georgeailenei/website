export default class Deck {
  suits: string[];
  values: string[];

  constructor() {
    this.suits = ["♣", "♠", "♦", "♥"];
    this.values = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3"];
  }

  newDeck(players: number) {
    let removeCards = 0;

    if (players === 5) {
      removeCards = 2;
    } else if (players === 4) {
      removeCards = 4;
    } else if (players === 3) {
      removeCards = 6;
    } else {
      removeCards = 0;
    }

    const deck = this.values.slice(0, this.values.length - removeCards);

    return this.suits.flatMap((suit) => {
      return deck.map((value) => {
        return new Card(suit, value);
      });
    });
  }
}

class Card {
  suit: string;
  value: string;

  constructor(suit: string, value: string) {
    this.suit = suit;
    this.value = value;
  }
}
