import { Game } from "./engine/game.js";

export function test () {

    ge = new Game();

    console.log(ge);

    ge.addToDeck('test-001', 5);

    console.log(ge);

    ge.draw(1);

    console.log(ge);

    ge.playCardFromHand(ge.hand[hand.length-1]);

    console.log(ge);
};