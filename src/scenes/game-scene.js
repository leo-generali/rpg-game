import Player from "@/sprites/player";
import spritesheet from "@/images/spritesheet.png";

class Game extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.spritesheet("spritesheet", spritesheet, {
      frameWidth: 16,
      frameHeight: 32,
      margin: 0,
      spacing: 0,
    });
  }

  create() {
    this.player = new Player(this, 50, 50);
  }

  update() {
    this.player.update();
  }
}

export default Game;
