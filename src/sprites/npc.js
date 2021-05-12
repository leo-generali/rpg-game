import GraphicsComponent from "@/components/graphics";

class NPC {
  constructor(scene, x, y) {
    // Constants
    this.VELOCITY = 100;
    this.ANIM_KEYS = {
      IDLE: "npc/idle",
      WALKING: "npc/walking",
    };

    this.scene = scene;

    scene.anims.create({
      key: this.ANIM_KEYS.IDLE,
      frames: scene.anims.generateFrameNumbers("spritesheet", {
        frames: [8, 9],
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.sprite = scene.physics.add.sprite(x, y, "npc", 0);

    // Components
    this.graphics = new GraphicsComponent(this);
  }

  update() {
    this.graphics.update();
  }
}

export default NPC;
