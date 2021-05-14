const PADDING = 10;

class DialoguePlugin extends Phaser.Plugins.ScenePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);

    this.graphics = null;
    this.text = null;
    this.borderColor = 0x907748;
    this.borderAlpha = 1;
    this.windowAlpha = 0.8;
    this.windowColor = 0x303030;
  }

  drawWindow() {
    this.graphics = this.scene.add.graphics();
    this._drawWindowToScreen();
    this._drawWindowWrapperToScreen();
  }

  drawText(text, { isAnimated }) {
    this.eventCounter = 0;
    this.dialog = text.split("");
    if (this.timedEvent) this.timedEvent.remove();

    var tempText = isAnimated ? "" : text;
    this._drawText(tempText);

    if (isAnimated) {
      this.timedEvent = this.scene.time.addEvent({
        delay: 30,
        callback: this._animateText,
        callbackScope: this,
        loop: true,
      });
    }
  }

  boot() {
    const eventEmitter = this.systems.events;

    eventEmitter.on("update", this.update, this);
    eventEmitter.on("destroy", this.destroy, this);
  }

  update() {}

  destroy() {
    this.pluginManager = null;
    this.game = null;
    this.scene = null;
    this.systems = null;
  }

  displayTalkable(x, y) {
    this.graphics.fillStyle(this.borderColor, this.windowAlpha);
    this.graphics.fillRect(x - 2, y - 8, 4, 4);
  }

  hideTalkable() {
    console.log(this.graphics);
  }

  // Private

  _drawWindowToScreen() {
    const { x, y, width, height } = this._getWindowDimensions();
    this.graphics.fillStyle(this.windowColor, this.windowAlpha);
    this.graphics.fillRect(x, y, width, height);
  }

  _drawWindowWrapperToScreen() {
    const { x, y, width, height } = this._getWindowDimensions();
    this.graphics.lineStyle(2, this.borderColor, this.borderAlpha);
    this.graphics.strokeRect(x, y, width, height);
  }

  _getWindowDimensions() {
    const gameWidth = this.scene.sys.game.config.width;
    const gameHeight = this.scene.sys.game.config.height;

    return {
      x: PADDING,
      y: gameHeight - 50 - PADDING,
      width: gameWidth - PADDING * 2,
      height: 50,
    };
  }

  _drawText(text) {
    if (this.text) this.text.destroy();

    const x = PADDING + 10;
    const y = this.scene.sys.game.config.height - 50 - PADDING + 10;

    this.text = this.scene.make.text({
      x,
      y,
      text,
      style: {
        fontFamily: "Kylarzio",
        fontSize: "16px",
        wordWrap: {
          width: this.scene.sys.game.config.width - PADDING * 2 - 25,
        },
      },
    });
  }

  _animateText() {
    this.eventCounter++;
    this.text.setText(this.text.text + this.dialog[this.eventCounter - 1]);
    if (this.eventCounter === this.dialog.length) {
      this.timedEvent.remove();
    }
  }
}

export default DialoguePlugin;
