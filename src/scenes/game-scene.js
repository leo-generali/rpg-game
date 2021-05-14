import Phaser from "phaser";
import Player from "@/objects/player";
import NPC from "@/objects/npc";
import spritesheet from "@/assets/images/dog/walk.png";

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }

  preload() {
    this.load.spritesheet("spritesheet", spritesheet, {
      frameWidth: 16,
      frameHeight: 16,
      margin: 0,
      spacing: 0,
    });
  }

  create() {
    this.scene.launch("hud");
    this.player = new Player(this, 184, 50);
    this.npc = new NPC(this, 200, 100);
  }

  update() {
    this.player.update();
    this.npc.update();
  }

  pause() {
    this.scene.pause();
  }

  resume() {
    this.scene.resume();
  }
}

export default Game;
