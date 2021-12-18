import { Database } from "./database.js";

export class GameEngine {
    ressources; // Cost Object
    deck; // Card list
    hand; // Card list
    database; // Card list
    stack; // Card Object

    constructor(ressources = new Cost(0,0,0,0), deck = [], hand = [], database = new Database() ) {
        this.ressources = ressources;
        this.deck = deck;
        this.hand = hand;
        this.database = database;
    }

    // Generate X numnber of a card to the deck
    // id : card id
    // nb : number of card to add
    addToDeck(id, nb) {
        for (let i = 0; i < nb; i++) {
            this.deck.push(database.getCard(id));
        }
    }

    // Put X number of the last card from the deck in the hand
    draw(nb) {
        for (let i = 0; i < nb; i++) {
            this.hand.push(this.deck.pop());
            
        }
    }

    // Put the card on the stack and resolve the card effect
    // i : index of the card in list
    playCardFromHand(i) {
        this.stack = hand[i];
        this.hand.splice(i, 1);
        this.stack.effect(ge);
    }
}


export class Card {
    id; // string
    name; // string
    cost; // Cost
    img; // img relative path
    text; // text effect

    constructor(id, name, cost, img, text) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.img = img;
        this.text = text;
    }
}

export class Cost {

    unc; // int, uncolor cost
    red; // int
    blue; // int
    green; // int

    constructor(unc, red, blue, green) {
        this.unc = unc;
        this.red = red;
        this.blue = blue;
        this.green = green;
    }
}