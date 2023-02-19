import './style.css';
import { testFunction } from "./testFunction";
import { Ship } from "./shipFactory.js";
import { Gameboard } from "./gameboardFactory";


testFunction();
console.log("Anchors aweigh!");

// let battleship = new Ship("battleship", 4);
// console.log(battleship);
// battleship.hit();
// battleship.isSunk();
// console.log(battleship);

let player1Board = new Gameboard();
console.log(player1Board);
//player1Board.placeShips();