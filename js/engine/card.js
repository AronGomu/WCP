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