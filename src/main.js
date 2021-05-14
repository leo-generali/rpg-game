import Phaser from "phaser";
import Game from "@/scenes/game-scene";
import HUD from "@/scenes/hud-scene";
import "@/assets/font/styles.css";

const GAMEBOY_WIDTH = 160;
const GAMEBOY_HEIGHT = 144;
const SIZE_MODIFIER = 2;

const config = {
  type: Phaser.AUTO,
  width: GAMEBOY_WIDTH * SIZE_MODIFIER,
  height: GAMEBOY_HEIGHT * SIZE_MODIFIER,
  parent: "game-container",
  pixelArt: false,
  backgroundColor: "#1d212d",
  scene: [Game, HUD],
  zoom: 3,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 0 },
    },
  },
};

new Phaser.Game(config);
