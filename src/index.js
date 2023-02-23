import './style.css';
import { testFunction } from "./testFunction";
import { Ship } from "./shipFactory.js";
import { Gameboard } from "./gameboardFactory";
import { Player } from './playerFactory';


testFunction();
console.log("Anchors aweigh!");

// let battleship = new Ship("battleship", 4);
// console.log(battleship);
// battleship.hit();
// battleship.isSunk();
// console.log(battleship);

//let player1Board = new Gameboard();
let player1 = new Player(prompt("Enter Player 1 name:"))
let player2 = new Player(prompt("Enter Player 2 name:"))

alert(player1.name + ", place ships");
player1.gameBoard.placeShips();
alert(player2.name + ", place ships");
player2.gameBoard.placeShips();

do {
    alert(player1.name + ", enter attack coordinates");
    player2.gameBoard.receiveAttack();
    alert(player2.name + ", enter attack coordinates");
    player1.gameBoard.receiveAttack();
} while (player1.gameBoard.isFleetSunk() == false && player2.gameBoard.isFleetSunk() == false)