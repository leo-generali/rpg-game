import Phaser from "phaser";
import DialogueManagerPlugin from "@/plugins/dialogue-manager";

class HUD extends Phaser.Scene {
  constructor() {
    super({ key: "hud" });
  }

  preload() {
    this.load.scenePlugin(
      "DialogueManagerPlugin",
      DialogueManagerPlugin,
      null,
      "dialogueManager"
    );
  }
}

export default HUD;
