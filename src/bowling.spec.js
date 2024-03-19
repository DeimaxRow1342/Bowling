import Game from './bowling.js';

describe("Bowling", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    const rollMany = (n, pins) => {
        for (let i = 0; i < n; i++) {
          game.roll(pins);
        }
    };

    const rollSpare = () => {
        game.roll(5);
        game.roll(5);
    };

    const rollStrike = () => {
        game.roll(10);
    };

    it("deberia calcular el puntaje de un juego sin puntos", () => {
      rollMany(20,0);
      expect(game.getScore()).toEqual(0);
    });

    it("deberia calcular el puntaje con todos los lanzamientos de un punto", () => {
        rollMany(20,1);
        expect(game.getScore()).toEqual(20);
    });

    it("deberia calcular el puntaje con un spare", () => {
        rollSpare();
        game.roll(3);
        rollMany(17,0);
        expect(game.getScore()).toEqual(16);
    });

    it("deberia calcular el puntaje con un strike", () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.getScore()).toEqual(24);
    });

    it("deberia calcular el puntaje de un juego perfecto", () => {
        rollMany(12,10);
        expect(game.getScore()).toEqual(300);
    });
});