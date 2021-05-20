import Phaser from "phaser";

const { SPACE } = Phaser.Input.Keyboard.KeyCodes;

class DialogueInputComponent {
  constructor(scene) {
    this.keys = scene.input.keyboard.addKeys({ interact: SPACE });
  }

  // update() {
  //   if (Phaser.Input.Keyboard.JustDown(this.keys.interact)) {
  //     console.log("asd");
  //   }
  // }
}

export default DialogueInputComponent;
