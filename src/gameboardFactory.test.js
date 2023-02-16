import { Gameboard } from "./gameboardFactory";

test('creates new 10x10 gameboard', () => {
    expect(new Gameboard()).toEqual({allSpaces: [], missedShots: []});
});

