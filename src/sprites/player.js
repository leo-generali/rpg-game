import InputComponent from "@/components/input";
import GraphicsComponent from "@/components/graphics";

class Player {
  constructor(scene, x, y) {
    this.scene = scene;

    scene.anims.create({
      key: "player-idle",
      frames: scene.anims.generateFrameNumbers("spritesheet", {
        start: 8,
        end: 9,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.sprite = scene.physics.add.sprite(x, y, "player", 0);

    // Components
    this.input = new InputComponent(this.sprite, scene);
    this.graphics = new GraphicsComponent(this.sprite);
  }

  update() {
    this.sprite.anims.play("player-idle", true);
    this.input.update();
    this.graphics.update();
  }
}

export default Player;
