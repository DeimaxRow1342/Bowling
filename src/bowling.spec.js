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

    const rollSpare = () => {
        game.roll(5);
        game.roll(5);
    };
});