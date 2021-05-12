class GraphicsComponent {
  constructor(gameObject) {
    this.ANIM_KEYS = gameObject.ANIM_KEYS;
    this.sprite = gameObject.sprite;
  }

  update() {
    if (
      this.sprite.body.velocity.x === 0 &&
      this.sprite.body.velocity.y === 0
    ) {
      this.sprite.anims.play(this.ANIM_KEYS.IDLE, true);
    }

    if (
      this.sprite.body.velocity.x !== 0 ||
      this.sprite.body.velocity.y !== 0
    ) {
      this.sprite.anims.play(this.ANIM_KEYS.WALKING, true);
    }

    if (this.sprite.body.velocity.x < 0) {
      this.sprite.setFlipX(true);
    }

    if (this.sprite.body.velocity.x > 0) {
      this.sprite.setFlipX(false);
    }
  }
}

export default GraphicsComponent;
