function gameloop(player1, player2) {

    const instructionDiv = document.querySelector(".instructionDiv");
    instructionDiv.textContent = player1.name + ", place ships";

    const player1Grid = document.querySelector("#player1Grid");
    const player2Grid = document.querySelector("#player2Grid");

    const player1Fleet = document.querySelector("#player1Fleet");
    const player2Fleet = document.querySelector("#player2Fleet");

    player1Fleet.textContent = player1.name;
    player2Fleet.textContent = player2.name;

    // alert(player1.name + ", place ships");
    player1.gameBoard.placeShips();
    drawTiles(player1, player1Grid, player2);
    // alert(player2.name + ", place ships");
    player2.gameBoard.placeShips();
    drawTiles(player2, player2Grid, player1);

    player2.gameBoard.isActiveBoard = true;

    function drawTiles(defender, board, attacker) {
        // Grid from gameboard Object
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let tile = document.createElement("div");
                tile.classList.add("tile");
                tile.setAttribute("id", `${[i, j]}`);

                if (defender.gameBoard.allSpaces[i][j].contains != null) {
                    tile.classList.add("hasShip"); 
                }

                //On clicking a tile:
                tile.addEventListener('click', () => {
                    if (defender.gameBoard.isActiveBoard == true) {
                        // ...that hasn't been clicked yet...
                        if (defender.gameBoard.allSpaces[i][j].tried == false) {
                            // ... send the attack...
                            // console.log(attacker.name + " fires at " + i + ", " + j)
                            defender.gameBoard.receiveAttack([i, j]);
                            // ... change the appearance of the tile
                            defender.gameBoard.updateTile(tile);
                            // TODO: end game and change DOM with new game options
                            if (defender.gameBoard.isFleetSunk()) {
                                console.log(attacker.name + " wins!");
                                instructionDiv.textContent = attacker.name + " wins!";
                                defender.gameBoard.isActiveBoard = false;
                                attacker.gameBoard.isActiveBoard = false;
                            }
                            //If playing against CPU, let CPU make turn

                            //TODO: consolidiate "turn"
                            if (defender.isCPU == true && !defender.gameBoard.isFleetSunk()) {
                                // console.log("Now it's the CPU's turn")
                                let cpuTry = defender.getPlayerAttack();
                                // console.log(defender.name + " fires at " + cpuTry[0] + ", " + cpuTry[1]);
                                attacker.gameBoard.receiveAttack(cpuTry);
                                let targetedTile = document.getElementById(cpuTry);
                                attacker.gameBoard.updateTile(targetedTile);
                                // TODO: end game and change DOM with new game options
                                if (attacker.gameBoard.isFleetSunk()) {
                                    // console.log(defender.name + " wins!");
                                    defender.gameBoard.isActiveBoard = false;
                                    attacker.gameBoard.isActiveBoard = false;
                                }
                            }
                             //...if human opponent, lock the current board and unlock the opponent's board
                            else {
                                defender.gameBoard.isActiveBoard = false;
                                attacker.gameBoard.isActiveBoard = true;
                            }
                        }
                    }
                });

                board.appendChild(tile);
            }
        }
    }
}

export { gameloop };