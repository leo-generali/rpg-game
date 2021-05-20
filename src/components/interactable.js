import Phaser from "phaser";

class InteractableComponent {
  constructor(object, dialogue) {
    this.object = object;
    this.scene = this.object.scene;
    this.player = this.scene.player;
    this.graphics = this.scene.add.graphics();
    this.graphics.visible = false;
    this.dialogue = dialogue;

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
    const dialogueManager =
      this.scene.game.scene.getScene("hud").dialogueManager;

    if (isPlayerInRange) {
      this.graphics.visible = true;
    } else {
      this.graphics.visible = false;
    }

    // TODO: This has too much information about the player...
    if (
      isPlayerInRange &&
      Phaser.Input.Keyboard.JustDown(this.player.input.keys.interact)
    ) {
      dialogueManager.startDialogue(this.dialogue);
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

  _pauseGame() {
    this.scene.pause();
  }

  _resumeGame() {
    this.scene.resume();
  }

  _dialogueManager() {
    return;
  }
}

export default InteractableComponent;
