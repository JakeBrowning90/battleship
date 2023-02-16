
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hitCounter = 0;
        this.sunk = false;
    }

    // Add to the ship's hit counter
    hit() {
        this.hitCounter++;
        return this.hitCounter;
    }

    // Mark ship as sunk when hit counter == length
    isSunk() {
        if (this.hitCounter == this.length) {
            this.sunk = true;
            return this.sunk;
        }
    }
}

export { Ship };