import DialogueInputComponent from "@/components/dialogue-input";

class DialogueManagerPlugin extends Phaser.Plugins.ScenePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);
    this.game = this.scene.game.scene.getScene("game");

    // Components
    this.input = new DialogueInputComponent(scene);

    // Variables
    this.dialogue = null;
    this.timedEvent = null;
    this.currentLine = 0;
  }

  startDialogue(dialogue) {
    this.dialogue = dialogue;
    this._pauseGame();
    this._typeDialogue(this.dialogue.lines[this.currentLine]);
  }

  boot() {
    const eventEmitter = this.systems.events;

    eventEmitter.on("update", this.update, this);
    eventEmitter.on("destroy", this.destroy, this);
  }

  update() {
    const down = Phaser.Input.Keyboard.JustDown(this.input.keys.interact);

    if (down && this.dialogue) {
      this.currentLine++;
      if (this.currentLine < this.dialogue.length) {
        this._typeDialogue(this.dialogue.lines[this.currentLine]);
      } else {
        this._endDialogue();
      }
    }
  }

  // Private Methods
  _typeDialogue(line) {
    const text = line.text;
    this._drawTextToScreen(text);
  }

  _endDialogue() {
    this.currentLine = 0;
    this.dialogue = null;
    this.text.destroy();
    this._resumeGame();
  }

  _drawTextToScreen(text) {
    if (this.text) this.text.destroy();
    this.text = this.scene.make.text({
      x: 20,
      y: 20,
      text: text,
    });
  }

  _pauseGame() {
    this.game.pause();
  }

  _resumeGame() {
    this.game.resume();
  }
}

export default DialogueManagerPlugin;
