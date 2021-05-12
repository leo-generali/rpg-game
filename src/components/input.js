import Phaser from "phaser";

const { LEFT, RIGHT, UP, DOWN } = Phaser.Input.Keyboard.KeyCodes;

class InputComponent {
  constructor(gameObject, scene) {
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
    });
    this.sprite = gameObject.sprite;
    this.VELOCITY = gameObject.VELOCITY;
  }

  update() {
    this.sprite.setVelocity(0);

    if (this.keys.left.isDown) {
      this.sprite.setVelocityX(-this.VELOCITY);
    } else if (this.keys.right.isDown) {
      this.sprite.setVelocityX(this.VELOCITY);
    }

    if (this.keys.up.isDown) {
      this.sprite.setVelocityY(-this.VELOCITY);
    } else if (this.keys.down.isDown) {
      this.sprite.setVelocityY(this.VELOCITY);
    }
  }
}

export default InputComponent;
