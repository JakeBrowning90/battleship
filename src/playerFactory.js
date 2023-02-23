import { Gameboard } from "./gameboardFactory";

class Player {
    constructor(name) {
        this.name = name;
        this.gameBoard = new Gameboard;
    }
}

export { Player };