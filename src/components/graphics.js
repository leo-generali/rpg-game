class GraphicsComponent {
  constructor(sprite) {
    this.sprite = sprite;
  }

  update() {
    if (this.sprite.body.velocity.x < 0) {
      this.sprite.setFlipX(true);
    }

    if (this.sprite.body.velocity.x > 0) {
      this.sprite.setFlipX(false);
    }
  }
}

export default GraphicsComponent;
