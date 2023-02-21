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
                cell.coord = `${i}, ${j}`;
                cell.contains = null;
                // cell.row = i;
                // cell.col = j;
                // Give each cell a "contains" property to indicate which ship is there?
                // cell.contains = null;
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
            let orientation;
            // Get prospective placement 
            let placement;
            let proposedSpaces;
            do {
                do {
                    orientation = this.getOrientation(fleet[i].name);
                    placement = this.getPlacement(fleet[i].length, orientation);
                // Check that placement is on board 
                } while ((this.isShipOnBoard(placement, fleet[i].length, orientation) == false));
                proposedSpaces = this.getProposedSpaces(orientation, placement, fleet[i].length);
                // Check that placement doesn't conflict with prior ships
            } while(this.doesPlacementClash(proposedSpaces))
            // Add the ship to the gameboard
            for (let j = 0; j < fleet[i].length; j++) {
                if (orientation == 'h') {
                    this.allSpaces[placement[0]][placement[1] + j].contains = fleet[i].name;
                } else if (orientation == 'v') {
                    this.allSpaces[placement[0] + j][placement[1]].contains = fleet[i].name;
                }
            } 
            // Add newly filled spaces to list of all filled spaces
            this.occupiedSpaces.push(...proposedSpaces);
        }
    }

    // Determine if ship will be placed horizontally or vertically
    getOrientation(shipName) {
        let direction;
        let check;
        do { 
            direction = prompt("Enter " + shipName + " orientation (h or v)");
            if (direction == 'h' || direction == 'v') {
                check = 1;
            }
        } while(check != 1);
        return direction;
    }

    // Get starting square for a new ship placement
    getPlacement() {
        let row;
        let col; 
        do {
            row = parseInt(prompt("Enter row"));
        } while (row < 0 || row > 9)
        do {
            col = parseInt(prompt("Enter column"));
        } while (col < 0 || col > 9)
        return [row, col];
    };

    // Get the spaces the ship would occupy
    getProposedSpaces(orientation, placement, shipLength) {
        let proposedSpaces = [];
        for (let j = 0; j < shipLength; j++) {
            if (orientation == 'h') {
                proposedSpaces.push(this.allSpaces[placement[0]][placement[1] + j].coord)
            } else if (orientation == 'v') {
                proposedSpaces.push(this.allSpaces[placement[0] + j][placement[1]].coord);
            }
        } 
        return proposedSpaces;
    }

    // Check that the ship's length and direction don't go off the board
    isShipOnBoard(startingCell, shipLength, orientation) {
        if (orientation == 'h') {
            if (startingCell[1] + shipLength <= 10) {
                return true;
            } else {
                console.log("off the grid horizontally")
                return false;  
            }    
        } else if (orientation == 'v') {
            if (startingCell[0] + shipLength <= 10) {
                return true;  
            } else {
                console.log("off the grid vertically")
                return false;  
            }    
        } 
        
    }

    // Check if the new ship's squares have already been used by other ships
    doesPlacementClash(proposedSpaces) {
        for (let i = 0; i < proposedSpaces.length; i++) {
            if (this.occupiedSpaces.includes(proposedSpaces[i])) {
                console.log("Ship in the way!")
                return true;
            }
        }
        // console.log("No conflict")
        return false;
    }

    receiveAttack() {
        // Get attack's coordinates
        let attackCoord =  this.getAttackCoord();
        console.log(attackCoord);
        let targetedSquare = this.allSpaces[attackCoord[0]][attackCoord[1]];
        // Check if attack hits a ship
        if (targetedSquare.contains == null) {
            console.log("Miss!")
            this.missedShots.push(attackCoord);
        } else {
            console.log("Hit!")
            let struckShip = targetedSquare.contains;
            console.log(struckShip);
        }
            // If hit, run hit() function on affected ship
            // If miss, push coordinates to missedShots array

    }

    getAttackCoord() {
        let row;
        let col; 
        do {
            row = parseInt(prompt("Enter attack row"));
        } while (row < 0 || row > 9)
        do {
            col = parseInt(prompt("Enter attack column"));
        } while (col < 0 || col > 9)
        return [row, col];
    }

    checkFleet() {

    }
}

export { Gameboard };