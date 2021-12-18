import { testSet } from "./sets/test.js";

export class Database {

    cards; // Card list

    // On construction, will add all created cards to the database
    constructor() {
        cards = [];
        this.cards.push(testSet);
    }

    getCard(id) {
        for (let i = 0; i < cards.length; i++) {
            if (this.cards[i].id === id) return cards[i];
        }
    }
}
