function gameloop(player1, player2) {

    // const gameInfoBanner = document.querySelector("#gameInfoBanner");

    const player1Grid = document.querySelector("#player1Grid");
    const player2Grid = document.querySelector("#player2Grid");

    const player1LastAttack = document.querySelector("#player1LastAttack");
    const player2LastAttack = document.querySelector("#player2LastAttack");

    const player1Fleet = document.querySelector("#player1Fleet");
    const player2Fleet = document.querySelector("#player2Fleet");

    player1Fleet.textContent = player1.name + "'s fleet";
    player2Fleet.textContent = player2.name + "'s fleet";

    // alert(player1.name + ", place ships");
    player1.gameBoard.placeShips();
    drawTiles(player1, player1Grid, player1LastAttack, player2);
    // alert(player2.name + ", place ships");
    player2.gameBoard.placeShips();
    drawTiles(player2, player2Grid, player2LastAttack, player1);

    player2.gameBoard.isActiveBoard = true;

    function drawTiles(defender, board, lastAttackDiv, attacker) {
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
                            defender.gameBoard.receiveAttack([i, j], lastAttackDiv);
                            // ... change the appearance of the tile
                            defender.gameBoard.updateTile(tile);
                      
                            // TODO: end game and change DOM with new game options
                            if (defender.gameBoard.isFleetSunk()) {
                                endGame(attacker, defender);
                            }

                            //If playing against CPU, let CPU make turn
                            else if (defender.isCPU == true && !defender.gameBoard.isFleetSunk()) {
                                let cpuTry = defender.getPlayerAttack();
                                if (attacker.gameBoard.receiveAttack(cpuTry, player1LastAttack)!= null) {
                                    defender.lastHit = cpuTry;
                                }
                                //TODO: logic to have CPU try shots near last successful hit (what if the last hit sinks the ship?)
                                // console.log(defender.lastHit);
                                let targetedTile = document.getElementById(cpuTry);
                                attacker.gameBoard.updateTile(targetedTile);

                                // TODO: end game and change DOM with new game options
                                if (attacker.gameBoard.isFleetSunk()) {
                                    endGame(defender, attacker);
                                }
                            }
                             //...if human opponent, lock the current board and unlock the opponent's board
                            else if (defender.isCPU == false && !defender.gameBoard.isFleetSunk()) {
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

    // When a fleet is sunk, declare player that just attacked as winner and block further moves
    function endGame(attacker, defender) {
        const gameInfoBanner = document.querySelector("#gameInfoBanner");
        gameInfoBanner.textContent = attacker.name  + " wins!";
        defender.gameBoard.isActiveBoard = false;
        attacker.gameBoard.isActiveBoard = false;
    }
}

export { gameloop };