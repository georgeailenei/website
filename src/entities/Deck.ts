export default class Deck {
  suits: string[];
  values: string[];
  valuesFourPlayers: string[];

  constructor() {
    this.suits = ["♣", "♠", "♦", "♥"];
    this.values = [
      "A",
      "K",
      "Q",
      "J",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];
    this.valuesFourPlayers = ["A", "K", "Q", "J", "10", "9", "8", "7"];
  }

  newDeck() {
    return this.suits.flatMap((suit) => {
      return this.values.map((value) => {
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
