import GraphicsComponent from "@/components/graphics";
import InteractableComponent from "@/components/interactable";

class NPC {
  constructor(scene, x, y, params) {
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
        frames: [0],
      }),
    });

    this.sprite = scene.physics.add.sprite(x, y, "npc", 0);
    this.sprite.body.immovable = true;
    this.sprite.setSize(16, 16);
    this.sprite.setOffset(0, 0);

    // Components
    this.graphics = new GraphicsComponent(this);
    this.interactable = new InteractableComponent(this, params.dialogue);
  }

  update() {
    this.graphics.update();
    this.interactable.update();
  }
}

export default NPC;
