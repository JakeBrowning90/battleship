import { Ship } from "./shipFactory.js";

test('creates new ship with name and length', () => {
    expect(new Ship("carrier", 5)).toEqual({name: "carrier", length: 5, hitCounter: 0, sunk: false});
  });

test('hit function increases hitCounter by 1', () => {
    expect(new Ship("battleship", 4).hit()).toEqual(1);
});

test('isSunk function sets sunk property to true if hitCounter = length', () => {
    expect(new Ship("flying dutchman", 0).isSunk()).toEqual(true);
});