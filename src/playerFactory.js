import { Gameboard } from "./gameboardFactory";

class Player {
    constructor(name, cpuCheck) {
        this.name = name;
        this.isCPU = cpuCheck;
        this.gameBoard = new Gameboard(cpuCheck);
        this.moveHistory = [];
    }

    // OBSOLETE, is CPU now determined by checkbox
    // isCPUcheck() {
    //     if (this.name.includes("CPU")) {
    //         this.isCPU = true;
    //         console.log("CPU player ready")
    //         this.gameBoard.CPU = true;
    //     } 
    // }

    // OBSOLETE with tile event listeners? Modify to be the the AI's attack input.
    getPlayerAttack() {
        let attack;
        let row;
        let col; 
        do {
            // Get random coordinates for a CPU player
            if (this.isCPU == true) {
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * 10);
            } else {
                // Get input for human player's turn
                do {
                    row = parseInt(prompt("Enter attack row"));
                } while (row < 0 || row > 9 || isNaN(row))
                do {
                    col = parseInt(prompt("Enter attack column"));
                } while (col < 0 || col > 9 || isNaN(col))
            }
            attack = [row, col];
            // Don't allow repeat moves, give reminder to human player
            if (this.moveHistory.includes(`${row}, ${col}`) &&  this.isCPU == false) {
                console.log("Square already played, try again.")
            }
        } while (this.moveHistory.includes(`${row}, ${col}`))
        // Add legal move to player's history
        this.moveHistory.push(`${row}, ${col}`);
        console.log(this.name + " fires at " + attack);
        return attack;
     }
}

export { Player };