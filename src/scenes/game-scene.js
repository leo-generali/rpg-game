import Phaser from "phaser";
import Player from "@/objects/player";
import NPC from "@/objects/npc";
import Dialogue from "@/plugins/dialogue";
import spritesheet from "@/assets/images/dog/walk.png";

const npcTextOne = new Dialogue([
  { text: "I am the NPC on the left" },
  { text: "Hello world! 1, 2, 3 :)" },
]);

const npcTextTwo = new Dialogue([
  { text: "I am the NPC on the right" },
  { text: "Goodbye world! 4, 5, 6 :)" },
]);

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });

    // Variables
    this.npcs = [];
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
    this.npcs.push(
      new NPC(this, 100, 100, { dialogue: npcTextOne }),
      new NPC(this, 200, 100, { dialogue: npcTextTwo })
    );
  }

  update() {
    this.player.update();
    for (const npc of this.npcs) {
      npc.update();
    }
    // this.npc.update();
  }

  pause() {
    this.scene.pause();
  }

  resume() {
    this.scene.resume();
  }
}

export default Game;
