import { Card, Cost } from "../gameEngine.js";

export const testSet = [
    new Card('test-001', 'Draw 1', new Cost(1,0,0,0), null, (gameEngine) => gameEngine.draw(1))
    ];