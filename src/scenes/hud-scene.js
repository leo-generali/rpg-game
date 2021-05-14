import Phaser from "phaser";
import DialoguePlugin from "@/plugins/dialogue";

class HUD extends Phaser.Scene {
  constructor() {
    super({ key: "hud" });
  }

  preload() {
    this.load.scenePlugin("DialoguePlugin", DialoguePlugin, null, "dialogue");
  }
}

export default HUD;
