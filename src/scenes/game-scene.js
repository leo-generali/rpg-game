import Phaser from "phaser";
import Player from "@/sprites/player";
import NPC from "@/sprites/npc";
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
    this.npc = new NPC(this, 200, 100);
  }

  update() {
    this.player.update();
    this.npc.update();
  }
}

export default Game;
