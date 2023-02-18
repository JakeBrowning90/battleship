import { Gameboard } from "./gameboardFactory";

// test('creates new 10x10 gameboard', () => {
//     expect(new Gameboard()).toEqual({allSpaces: [], missedShots: []});
// });

test('horizontal ship  of length 5 in square 0,0 returns true', () => {
    expect(new Gameboard().isShipOnBoard([0, 0], 5, "h")).toBe(true);
});

test('horizontal ship  of length 5 in square 5,0 returns true', () => {
    expect(new Gameboard().isShipOnBoard([5, 0], 5, "h")).toBe(true);
});

test('horizontal ship  of length 5 in square 6,0 returns false', () => {
    expect(new Gameboard().isShipOnBoard([6, 0], 5, "h")).toBe(false);
});

test('vertical ship  of length 5 in square 0,0 returns true', () => {
    expect(new Gameboard().isShipOnBoard([0, 0], 5, "v")).toBe(true);
});

test('vertical ship  of length 5 in square 0,5 returns true', () => {
    expect(new Gameboard().isShipOnBoard([0, 5], 5, "v")).toBe(true);
});

test('vertical ship  of length 5 in square 0,6 returns false', () => {
    expect(new Gameboard().isShipOnBoard([0, 6], 5, "v")).toBe(false);
});