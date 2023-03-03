function gameloop(player1, player2) {

    const instructionDiv = document.querySelector(".instructionDiv");
    instructionDiv.textContent = player1.name + ", place ships";
    // alert(player1.name + ", place ships");
    player1.gameBoard.placeShips();
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
    
}

export { gameloop };