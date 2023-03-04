import { drawShipPlacer } from "./drawShipPlacer";

function drawGameScreen() {
    const content = document.querySelector("#content");

    const gameScreenBase = document.createElement("div");
    gameScreenBase.classList.add("gameScreenBase");

    // Top portion of game screen
    const gameInfoBanner = document.createElement("div");
    gameInfoBanner.classList.add("gameInfoBanner");
    
    // const instructionDiv = document.createElement("div");
    // instructionDiv.classList.add("instructionDiv");
    // instructionDiv.textContent = "TBA: Prompts for placing ships and indicate player turn";

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
    player1Fleet.classList.add("fleetStatus");
    const player2Fleet = document.createElement("div");
    player2Fleet.classList.add("fleetStatus");

    // const corner = document.createElement("div");
    // corner.classList.add("corner");

    const player1Grid = document.createElement("div");
    player1Grid.classList.add("grid");
    const player2Grid = document.createElement("div");
    player2Grid.classList.add("grid");

    //Fill gameboard with 100 tiles
    // function drawTiles(board) {
    //     for (let i = 0; i < 100; i++) {
    //         let tile = document.createElement("div");
    //         tile.classList.add("tile");
    //         board.appendChild(tile);
    //     }
    // }

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


    content.appendChild(gameScreenBase);
    
    gameScreenBase.appendChild(gameInfoBanner);
    // gameInfoBanner.appendChild(instructionDiv);


    gameScreenBase.appendChild(player1Half);
    player1Half.appendChild(player1Fleet);
    // player1Half.appendChild(corner);
    player1Half.appendChild(player1Grid);
    // drawTiles(player1Grid);
    drawMarkers(player1Half)

    gameScreenBase.appendChild(player2Half);
    player2Half.appendChild(player2Fleet);
    // player1Half.appendChild(corner);
    player2Half.appendChild(player2Grid);
    // drawTiles(player2Grid);
    drawMarkers(player2Half);

    //Function to fill banner with ship placement form
    drawShipPlacer();
}

export {drawGameScreen}