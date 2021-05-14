import InputComponent from "@/components/input";
import GraphicsComponent from "@/components/graphics";

class Player {
  constructor(scene, x, y) {
    // Constants
    this.VELOCITY = 100;
    this.ANIM_KEYS = {
      IDLE: "player/idle",
      WALKING: "player/walking",
    };

    scene.anims.create({
      key: this.ANIM_KEYS.IDLE,
      frames: scene.anims.generateFrameNumbers("spritesheet", {
        frames: [0],
      }),
    });

    scene.anims.create({
      key: this.ANIM_KEYS.WALKING,
      frames: scene.anims.generateFrameNumbers("spritesheet", {
        frames: [1, 2, 3, 0],
      }),
      frameRate: 4,
      repeat: -1,
    });

    this.sprite = scene.physics.add.sprite(x, y, "player", 0);
    this.sprite.setSize(16, 16);
    this.sprite.setOffset(0, 0);

    // Components
    this.input = new InputComponent(this, scene);
    this.graphics = new GraphicsComponent(this);
  }

  update() {
    this.input.update();
    this.graphics.update();
  }
}

export default Player;
