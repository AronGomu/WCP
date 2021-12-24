import { test } from "./test.js";

console.log("HELLO");

function newGame() {
    document.getElementById('menu').remove();
    test();
}

function myFunction() {
    console.log("do somth");
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}               