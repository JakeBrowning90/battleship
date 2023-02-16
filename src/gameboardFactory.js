
class Gameboard {
    constructor() {
        this.allSpaces = this.generateSpaces();
        // this.occupiedSpaces = placeShips();
        this.missedShots = [];
    }

    generateSpaces() {
        let playfield = [];
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                let cell = [];
                cell.push(i);
                cell.push(j);
                row[j] = cell;
            }
            playfield[i] = row;
        }
        return playfield;
    }

    placeShips() {

    }

    receiveAttack() {

    }

    checkFleet() {

    }
}

export { Gameboard };