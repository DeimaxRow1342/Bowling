import Game from './bowling.js'

describe("Bowling", () => {
    const game = new Game();

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
  });