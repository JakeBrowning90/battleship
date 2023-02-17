import { Gameboard } from "./gameboardFactory";

// test('creates new 10x10 gameboard', () => {
//     expect(new Gameboard()).toEqual({allSpaces: [], missedShots: []});
// });

test('', () => {
    expect(new Gameboard().isShipOnBoard([0, 0], 5, "h")).toBe(true);
});

test('', () => {
    expect(new Gameboard().isShipOnBoard([6, 0], 5, "h")).toBe(false);
});