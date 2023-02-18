import { Ship } from "./shipFactory";

class Gameboard {
    constructor() {
        this.allSpaces = this.generateSpaces();
        // this.occupiedSpaces = placeShips();
        this.occupiedSpaces = [];
        this.missedShots = [];
    }

    generateSpaces() {
        let playfield = [];
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                let cell = {};
                cell.row = i;
                cell.col = j;
                // Give each cell a "contains" property to indicate which ship is there?
                cell.contains = null;
                row[j] = cell;
            }
            playfield[i] = row;
        }
        return playfield;
    }

    placeShips() {
        // Make 5 ships
        let fleet = [new Ship("carrier", 5), new Ship("battleship", 4), new Ship("destroyer", 3), new Ship("submarine", 3), new Ship("patrol boat", 2)];
        
        // For each ship:
        for (let i = 0; i < fleet.length; i++) {
            // Get coordinates and horizontal/vertical orientation
            let orientation = prompt("Enter ship orientation (h or v)");
            let row = parseInt(prompt("Enter row"));
            let col = parseInt(prompt("Enter column"));
            let placement = [row, col]

            // Check that placement is on board
            if (this.isShipOnBoard(placement, fleet[i].length, orientation) == true) {
                for (let j = 0; j < fleet[i].length; j++) {
                    if (orientation == 'h') {
                        this.allSpaces[placement[0]][placement[1] + j].contains = fleet[i].name;
                    } else if (orientation == 'v') {
                        this.allSpaces[placement[0] + j][placement[1]].contains = fleet[i].name;
                    }
                } 

            }
            // Check that placement does not conflict with other ships

            // Push legal coordinates to occupiedSpaces

        }
    }

    isShipOnBoard(startingCell, shipLength, orientation) {
        if (orientation == 'h') {
            if (startingCell[0] + shipLength <= 10) {
                return true;
            } else {
                return false;  
            }    
        } else if (orientation == 'v') {
            if (startingCell[1] + shipLength <= 10) {
                return true;  
            } else {
                return false;  
            }    
        } 
        
    }

    receiveAttack() {

    }

    checkFleet() {

    }
}

export { Gameboard };