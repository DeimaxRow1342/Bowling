class Game{
    constructor(){
        this.scoreValue = 0;
    }

    roll(pins){
        this.scoreValue += pins;
    }

    getScore(){
        return this.scoreValue;
    }
  }
  export default Game;