import Phaser from "phaser";
import Game from "@/scenes/game-scene";

const config = {
  type: Phaser.AUTO,
  width: 300,
  height: 200,
  parent: "game-container",
  pixelArt: false,
  backgroundColor: "#1d212d",
  scene: Game,
  zoom: 2,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

new Phaser.Game(config);
