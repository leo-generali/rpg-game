import Phaser from "phaser";
import Game from "@/scenes/game-scene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: Game,
};

new Phaser.Game(config);
