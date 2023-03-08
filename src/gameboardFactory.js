import { Player } from "./playerFactory";
import { Ship } from "./shipFactory";

class Gameboard {
    constructor(cpuCheck, autoPlaceCheck) {
        this.allSpaces = this.generateSpaces();
        // this.occupiedSpaces = placeShips();
        this.occupiedSpaces = [];
        this.missedShots = [];
        this.fleet = [new Ship("Carrier", 5), new Ship("Battleship", 4), new Ship("Destroyer", 3), new Ship("Submarine", 3), new Ship("Patrol boat", 2)];
        this.CPU = cpuCheck;
        this.autoPlace = autoPlaceCheck;
        //TODO: property to enable clicks on player's turn / disable on opponent's turn
        this.isActiveBoard = false
    }

    generateSpaces() {
        let playfield = [];
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                let cell = {};
                cell.coord = `${i}, ${j}`;
                cell.contains = null; 
                cell.tried = false;
                row[j] = cell;
            }
            playfield[i] = row;
        }
        return playfield;
    }

    placeShips() {
        // For each ship:
        for (let i = 0; i < this.fleet.length; i++) {
            // const instructionDiv = document.querySelector(".instructionDiv");
            // instructionDiv.textContent = "Place " + this.fleet[i].name + " (" + this.fleet[i].length + " tiles long)";
            // instructionDiv.textContent = "Place " + fleet[i].name + " ("+fleet[i].length + ") tiles" ;

            // Get coordinates and horizontal/vertical orientation
            let orientation;
            // Get prospective placement 
            let placement;
            let proposedSpaces;
            do {
                do {
                    orientation = this.getOrientation(this.fleet[i].name);
                    placement = this.getPlacement(this.fleet[i].length, orientation);
                    
                    // AUTOMATIC PLACEMENT FOR DOM TESTS
                    // orientation = "h";
                    // placement = [i, i];
                    
                // Check that placement is on board 
                } while ((this.isShipOnBoard(placement, this.fleet[i].length, orientation) == false));
                proposedSpaces = this.getProposedSpaces(orientation, placement, this.fleet[i].length);
                // Check that placement doesn't conflict with prior ships
            } while(this.doesPlacementClash(proposedSpaces))
            // Add the ship to the gameboard
            for (let j = 0; j < this.fleet[i].length; j++) {
                if (orientation == 'h') {
                    this.allSpaces[placement[0]][placement[1] + j].contains = this.fleet[i];
                } else if (orientation == 'v') {
                    this.allSpaces[placement[0] + j][placement[1]].contains = this.fleet[i];
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
        // Randomly determine direction for CPU 
        if (this.autoPlace == true || this.CPU == true) {
            let randomDirection = Math.floor(Math.random() * 2);
            if (randomDirection == 0) {
                direction = 'h';
            } else if (randomDirection == 1) {
                direction = 'v';
            }
        } 
        // Manually get direction for human player
        else {
            do { 
                direction = prompt("Enter " + shipName + " orientation (h or v)");
                if (direction == 'h' || direction == 'v') {
                    check = 1;
                }
            } while(check != 1);
        }
        return direction;
    }

    // Get starting square for a new ship placement
    getPlacement() {
        let row;
        let col; 
        // Generate random coordinates for a computer player
        if (this.autoPlace == true || this.CPU == true) {
            // console.log("CPU is placing")
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
        } else {
            // Get coordinates from human player
            do {
                row = parseInt(prompt("Enter row"));
            } while (row < 0 || row > 9)
            do {
                col = parseInt(prompt("Enter column"));
            } while (col < 0 || col > 9)
        }
        return [row, col];
    };

    // Get the spaces the ship would occupy for legality check
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
        return false;
    }

    // Update gameboard Object properties for occupied and unoccupied tiles
    receiveAttack(attackCoord, lastAttackDiv) {
        let targetedSquare = this.allSpaces[attackCoord[0]][attackCoord[1]];
        // Update targeted square for display
        targetedSquare.tried = true
        // Check if attack hits a ship
        if (targetedSquare.contains == null) {
            // If miss, push coordinates to missedShots array
            this.missedShots.push(attackCoord);
            lastAttackDiv.textContent = "Miss!"
            return null;
            // console.log("Miss!")
        } else {
            // If hit, run hit() function on affected ship and check if it is sunk
            console.log(targetedSquare.contains.name + " hit!")
            lastAttackDiv.textContent = targetedSquare.contains.name + " hit!"
            targetedSquare.contains.hit();
            targetedSquare.contains.isSunk();
            if (targetedSquare.contains.sunk == true) {
                lastAttackDiv.textContent = targetedSquare.contains.name + " sunk!";
                // console.log(targetedSquare.contains.name + " sunk!");
            }
            return targetedSquare.contains.name;
        }
    }

    // Modify appearance of clicked tiles
    updateTile(tile) {

        if (tile.classList.contains("hasShip")) {
            tile.classList.remove("hasShip"); 
            tile.classList.add("struckShip"); 
        } else if (!tile.classList.contains("hasShip") && !tile.classList.contains("struckShip")) {
            tile.classList.add("missedShot"); 
        } 
    }

    // Randomly generate coordinates for CPU ship placement
    getCoordForCPU() {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        return [row, col];
    }

    // Check status of all ships to determine if game is over
    isFleetSunk() {
        let sunkShips = 0;
        for (let i = 0; i < this.fleet.length; i++) {
            if (this.fleet[i].sunk == true) {
                sunkShips++
            }
        }
        if (sunkShips == this.fleet.length) {
            console.log("All ships sunk!")
            return true;
        } else {
            return false;
        }
    }
}

export { Gameboard };