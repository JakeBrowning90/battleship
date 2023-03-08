import { Gameboard } from "./gameboardFactory";

class Player {
    constructor(name, cpuCheck, autoPlaceCheck) {
        this.name = name;
        this.isCPU = cpuCheck;
        this.autoPlace = autoPlaceCheck;
        this.gameBoard = new Gameboard(cpuCheck, autoPlaceCheck);
        this.moveHistory = [];
        this.isTurn = false;
        this.lastHit = null;
    }

    // OBSOLETE with tile event listeners? Modify to be the the AI's attack input.
    getPlayerAttack() {
        let attack;
        let row;
        let col; 
        do {
            // Get nearby coordinates for last valid hit
            if (this.lastHit != null) {
                this.lastHit[0] + 1
                this.lastHit[0] - 1
                this.lastHit[1] + 1
                this.lastHit[1] - 1
            }
            // Get random coordinates for a CPU player
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
            
            attack = [row, col];
            // Don't allow repeat moves, give reminder to human player
            if (this.moveHistory.includes(`${row}, ${col}`) &&  this.isCPU == false) {
                console.log("Square already played, try again.")
            }
        } while (this.moveHistory.includes(`${row}, ${col}`))
        // Add legal move to player's history
        this.moveHistory.push(`${row}, ${col}`);
        return attack;
     }
}

export { Player };