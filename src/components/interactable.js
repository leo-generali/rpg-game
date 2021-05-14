import Phaser from "phaser";

class InteractableComponent {
  constructor(object) {
    this.object = object;
    this.scene = this.object.scene;
    this.player = this.scene.player;
    this.graphics = this.scene.add.graphics();
    this.graphics.visible = false;

    const talkableIndicator = Phaser.Geom.Triangle.BuildEquilateral(
      this.object.sprite.body.x + this.object.sprite.body.width,
      this.object.sprite.body.y - 5,
      7
    );

    this.graphics.fillStyle(0xffd700, 1);
    this.graphics.fillTriangleShape(talkableIndicator);

    object.scene.physics.add.collider(this.object.sprite, this.player.sprite);
  }

  update() {
    const isPlayerInRange = this._checkWithinRange();

    if (isPlayerInRange) {
      this.graphics.visible = true;
    } else {
      this.graphics.visible = false;
    }

    // TODO: This has too much information about the player...
    if (isPlayerInRange && this.player.input.keys.space.isDown) {
      this.scene.dialogue.speak("Hello World! 1, 2, 3 :)", {
        isAnimated: true,
      });
    }
  }

  // Private
  _checkWithinRange() {
    const playerBounds = this.player.sprite.getBounds();
    const objectBounds = this.object.sprite.getBounds();

    return Phaser.Geom.Intersects.RectangleToRectangle(
      playerBounds,
      objectBounds
    );
  }

  _calculateTrianglePoints() {
    const { x, y, width } = this.object.sprite.body;

    console.log(x + width / 2);

    return {
      x1: x + width / 2,
      y1: x + width / 2,
    };

    100, 100, 95, 105, 105, 105;
  }
}

export default InteractableComponent;
