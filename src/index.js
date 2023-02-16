import './style.css';
import { testFunction } from "./testFunction";

testFunction();
console.log("Anchors aweigh!");

import { Ship } from "./shipFactory.js";

let battleship = new Ship("battleship", 4);
console.log(battleship);
battleship.hit();
console.log(battleship);