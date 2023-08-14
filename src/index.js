import './reset.css';
import './style.css';
// import { testFunction } from "./testFunction";
// import { Ship } from "./shipFactory.js";
// import { Gameboard } from "./gameboardFactory";
import { drawStartScreen } from "./drawStartScreen";
import { clearContent } from './clearContent';
import { drawGameScreen } from "./drawGameScreen";
import { gameloop } from './gameloop';
import { Player } from './playerFactory';

// testFunction();
drawStartScreen();

// Create new players with name inputs and checkboxes
// const startScreenBase = document.querySelector(".startScreenBase");
// startScreenBase.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let player1 = new Player(player1NameInput.value, player1AICheckbox.checked, player1AutoPlaceCheckbox.checked);
//     let player2 = new Player(player2NameInput.value, player2AICheckbox.checked, player2AutoPlaceCheckbox.checked);
//     clearContent();
//     drawGameScreen();
//     gameloop(player1, player2);
// });
