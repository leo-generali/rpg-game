import Phaser from "phaser";

const { LEFT, RIGHT, UP, DOWN } = Phaser.Input.Keyboard.KeyCodes;
const ACCELERATION = 150;

class InputComponent {
  constructor(sprite, scene) {
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
    });
    this.sprite = sprite;
  }

  update() {
    this.sprite.setVelocity(0);

    if (this.keys.left.isDown) {
      this.sprite.setVelocityX(-ACCELERATION);
    } else if (this.keys.right.isDown) {
      this.sprite.setVelocityX(ACCELERATION);
    }

    if (this.keys.up.isDown) {
      this.sprite.setVelocityY(-ACCELERATION);
    } else if (this.keys.down.isDown) {
      this.sprite.setVelocityY(ACCELERATION);
    }
  }
}

export default InputComponent;
