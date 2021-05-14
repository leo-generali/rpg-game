import Phaser from "phaser";

class InteractableComponent {
  constructor(object) {
    this.object = object;
    this.player = object.scene.player;
    this.isPlayerTouching = false;

    object.scene.physics.add.collider(this.object.sprite, this.player.sprite);
  }

  update() {
    if (this._checkWithinRange()) {
      console.log("asd");
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
}

export default InteractableComponent;
