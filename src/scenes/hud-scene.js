import Phaser from "phaser";
import DialoguePlugin from "@/plugins/dialogue";

class HUD extends Phaser.Scene {
  constructor() {
    super({ key: "hud" });
  }

  preload() {
    this.load.scenePlugin("DialoguePlugin", DialoguePlugin, null, "dialogue");
  }

  create() {
    // this.dialogue.drawWindow();
    // this.dialogue.drawText("Hello world! :) 1, 2, 3", {
    //   isAnimated: true,
    // });
  }
}

export default HUD;
