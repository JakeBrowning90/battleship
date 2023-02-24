import './style.css';
import { testFunction } from "./testFunction";
// import { Ship } from "./shipFactory.js";
// import { Gameboard } from "./gameboardFactory";
import { Player } from './playerFactory';

// testFunction();
// console.log("Anchors aweigh!");

alert("Welcome to Battleship!")
let player1 = new Player(prompt("Enter Player 1 name:"))
player1.isCPUcheck();
let player2 = new Player(prompt("Enter Player 2 name:"))
player2.isCPUcheck();

alert(player1.name + ", place ships");
player1.gameBoard.placeShips();
alert(player2.name + ", place ships");
player2.gameBoard.placeShips();

do {
    //alert(player1.name + ", enter attack coordinates");
    player2.gameBoard.receiveAttack(player1.getPlayerAttack());
    if (player2.gameBoard.isFleetSunk() == true) {
        console.log(player1.name + " wins!");
        break;
    }
    //alert(player2.name + ", enter attack coordinates");
    player1.gameBoard.receiveAttack(player2.getPlayerAttack());
    if (player1.gameBoard.isFleetSunk() == true) {
        console.log(player2.name + " wins!")
        break;
    }
} while (player1.gameBoard.isFleetSunk() == false && player2.gameBoard.isFleetSunk() == false)

console.log("Game over")