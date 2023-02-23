import './style.css';
import { testFunction } from "./testFunction";
import { Ship } from "./shipFactory.js";
import { Gameboard } from "./gameboardFactory";
import { Player } from './playerFactory';


testFunction();
console.log("Anchors aweigh!");

//let player1Board = new Gameboard();
alert("Welcome to Battleship!")
let player1 = new Player(prompt("Enter Player 1 name:"))
let player2 = new Player(prompt("Enter Player 2 name:"))

alert(player1.name + ", place ships");
player1.gameBoard.placeShips();
alert(player2.name + ", place ships");
player2.gameBoard.placeShips();

do {
    alert(player1.name + ", enter attack coordinates");
    player2.gameBoard.receiveAttack();
    if (player2.gameBoard.isFleetSunk() == true) {
        console.log(player1.name + " wins!");
        break;
    }
    alert(player2.name + ", enter attack coordinates");
    player1.gameBoard.receiveAttack();
    if (player1.gameBoard.isFleetSunk() == true) {
        console.log(player2.name + " wins!")
        break;
    }
} while (player1.gameBoard.isFleetSunk() == false && player2.gameBoard.isFleetSunk() == false)

console.log("Game over")