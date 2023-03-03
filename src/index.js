import './reset.css';
import './style.css';
// import { testFunction } from "./testFunction";
// import { Ship } from "./shipFactory.js";
// import { Gameboard } from "./gameboardFactory";
import { drawStartScreen } from "./drawStartScreen";
import { Player } from './playerFactory';

// testFunction();
console.log("Anchors aweigh!");

drawStartScreen();

// Create new players with name inputs and AI checkboxes
const startScreenBase = document.querySelector(".startScreenBase");
startScreenBase.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Start game!");
    let player1 = new Player(player1NameInput.value, player1AICheckbox.checked);
    console.log(player1.name);
    console.log(player1.isCPU);
    let player2 = new Player(player2NameInput.value, player2AICheckbox.checked);
    console.log(player2.name);
    console.log(player2.isCPU);
});


// alert("Welcome to Battleship!")
// let player1 = new Player(prompt("Enter Player 1 name:"))
// player1.isCPUcheck();
// let player2 = new Player(prompt("Enter Player 2 name:"))
// player2.isCPUcheck();

// alert(player1.name + ", place ships");
// player1.gameBoard.placeShips();
// alert(player2.name + ", place ships");
// player2.gameBoard.placeShips();

// do {
//     //alert(player1.name + ", enter attack coordinates");
//     player2.gameBoard.receiveAttack(player1.getPlayerAttack());
//     if (player2.gameBoard.isFleetSunk() == true) {
//         console.log(player1.name + " wins!");
//         break;
//     }
//     //alert(player2.name + ", enter attack coordinates");
//     player1.gameBoard.receiveAttack(player2.getPlayerAttack());
//     if (player1.gameBoard.isFleetSunk() == true) {
//         console.log(player2.name + " wins!")
//         break;
//     }
// } while (player1.gameBoard.isFleetSunk() == false && player2.gameBoard.isFleetSunk() == false)

console.log("Game over")