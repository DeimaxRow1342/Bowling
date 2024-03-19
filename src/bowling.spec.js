import bowling from './bowling.js'

describe("Bowling", () => {
    it("deberia calcular el puntaje de un juego sin puntos", () => {
      const game = new Game(); 
      for(let i=0; i<20; i++){
        game.roll(0);
      }  
      expect(game.score()).toEqual(0);
    });
  });

  class Game{
    roll(pins){
    }
    score(){
        return 0;
    }
  }