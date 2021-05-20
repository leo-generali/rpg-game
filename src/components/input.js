import Phaser from "phaser";

const { LEFT, RIGHT, UP, DOWN, SPACE } = Phaser.Input.Keyboard.KeyCodes;

class InputComponent {
  constructor(object, scene) {
    this.keys = scene.input.keyboard.addKeys({
      interact: SPACE,
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
    });
    this.sprite = object.sprite;
    this.VELOCITY = object.VELOCITY;
  }

  update() {
    const { left, right, up, down } = this.keys;
    this.sprite.setVelocity(0);

    if (left.isDown) {
      this.sprite.setVelocityX(-this.VELOCITY);
    } else if (right.isDown) {
      this.sprite.setVelocityX(this.VELOCITY);
    }

    if (up.isDown) {
      this.sprite.setVelocityY(-this.VELOCITY);
    } else if (down.isDown) {
      this.sprite.setVelocityY(this.VELOCITY);
    }
  }
}

export default InputComponent;
