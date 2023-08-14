import { drawShipPlacer } from "./drawShipPlacer";
import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";

function drawGameScreen() {
    const main = document.querySelector("main");

    const gameScreenBase = document.createElement("div");
    gameScreenBase.classList.add("gameScreenBase");

    // Top portion of game screen
    const gameInfoBanner = document.createElement("div");
    gameInfoBanner.setAttribute("id", "gameInfoBanner");
    gameInfoBanner.classList.add("gameInfoBanner");
    
    const gameStatus = document.createElement("div");
    gameStatus.setAttribute("id", "gameStatus");
    const gameInstructions = document.createElement("div");
    gameInstructions.setAttribute("id", "gameInstructions");
    gameInstructions.textContent = "Click a square on your opponent's grid to attack. Sink all 5 ships to win!"
    const shipsKey = document.createElement("div");
    shipsKey.setAttribute("id", "shipsKey");
    const shipList = document.createElement("ul");
    const carrier = document.createElement("li");
    carrier.textContent = "Carrier - 5";
    const battleship = document.createElement("li");
    battleship.textContent = "Battleship - 4";
    const destroyer = document.createElement("li");
    destroyer.textContent = "Destroyer - 3";
    const submarine = document.createElement("li");
    submarine.textContent = "Submarine - 3";
    const patrolBoat = document.createElement("li");
    patrolBoat.textContent = "Patrol boat - 2";
    shipList.appendChild(carrier)
    shipList.appendChild(battleship)
    shipList.appendChild(destroyer)
    shipList.appendChild(submarine)
    shipList.appendChild(patrolBoat)

    const resetButton = document.createElement("button");
    resetButton.setAttribute("id", "resetButton");
    resetButton.textContent = "Reset game";

    resetButton.addEventListener('click', () => {
        console.log("Reset!")
        clearContent();
        drawStartScreen();
    })

    // Each player's half of the screen
    const player1Half = document.createElement("div");
    player1Half.classList.add("player1Half", "playerHalf");
    const player2Half = document.createElement("div");
    player2Half.classList.add("player2Half", "playerHalf");

    // Each player's interface
    const player1Board = document.createElement("div");
    player1Board.classList.add("playerBoard");
    const player2Board = document.createElement("div");
    player2Board.classList.add("playerBoard");

    const player1Fleet = document.createElement("div");
    player1Fleet.setAttribute("id", "player1Fleet");
    player1Fleet.classList.add("fleetStatus");
    const player2Fleet = document.createElement("div");
    player2Fleet.setAttribute("id", "player2Fleet");
    player2Fleet.classList.add("fleetStatus");

    const player1LastAttack = document.createElement("div");
    player1LastAttack.setAttribute("id", "player1LastAttack");
    player1LastAttack.classList.add("lastAttack");
    const player2LastAttack = document.createElement("div");
    player2LastAttack.setAttribute("id", "player2LastAttack");
    player2LastAttack.classList.add("lastAttack");

    const player1Grid = document.createElement("div");
    player1Grid.classList.add("grid");
    player1Grid.setAttribute("id", "player1Grid");
    const player2Grid = document.createElement("div");
    player2Grid.classList.add("grid");
    player2Grid.setAttribute("id", "player2Grid");

    // Populate edges of grid with numbers
    function drawMarkers(board) {
        let corner = document.createElement("div");
        corner.classList.add("corner");
        board.appendChild(corner);
        for (let i = 0; i < 10; i++) {
            let navMarker = document.createElement("div");
            navMarker.classList.add("navMarker");
            navMarker.textContent = i;
            board.appendChild(navMarker);
        }
        for (let i = 0; i < 10; i++) {
            let navMarker = document.createElement("div");
            navMarker.classList.add("navMarker");
            navMarker.textContent = i;
            board.appendChild(navMarker);
        }
    }


    main.appendChild(gameScreenBase);
    
    gameScreenBase.appendChild(gameInfoBanner);
    gameInfoBanner.appendChild(gameStatus);
    gameInfoBanner.appendChild(gameInstructions);
    gameInfoBanner.appendChild(shipsKey);
    shipsKey.appendChild(shipList);
    gameInfoBanner.appendChild(resetButton);

    gameScreenBase.appendChild(player1Half);
    player1Half.appendChild(player1Fleet);
    player1Half.appendChild(player1LastAttack);
    player1Half.appendChild(player1Grid);
    drawMarkers(player1Half)

    gameScreenBase.appendChild(player2Half);
    player2Half.appendChild(player2Fleet);
    player2Half.appendChild(player2LastAttack);
    player2Half.appendChild(player2Grid);
    drawMarkers(player2Half);

    //Function to fill banner with ship placement form
    // drawShipPlacer();
}

export {drawGameScreen}