import Phaser from "phaser";

const ACCELERATION = 150;

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

    const { LEFT, RIGHT, UP, DOWN } = Phaser.Input.Keyboard.KeyCodes;
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
    });
  }

  update() {
    this.sprite.anims.play("player-idle", true);

    this.sprite.setVelocity(0);

    // Apply horizontal acceleration when left/a or right/d are applied
    if (this.keys.left.isDown) {
      this.sprite.setVelocityX(-ACCELERATION);
      this.sprite.setFlipX(true);
    } else if (this.keys.right.isDown) {
      this.sprite.setVelocityX(ACCELERATION);
      this.sprite.setFlipX(false);
    }

    if (this.keys.up.isDown) {
      this.sprite.setVelocityY(-ACCELERATION);
    } else if (this.keys.down.isDown) {
      this.sprite.setVelocityY(ACCELERATION);
    }
  }
}

export default Player;
