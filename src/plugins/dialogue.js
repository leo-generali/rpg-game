const PADDING = 10;

class DialoguePlugin extends Phaser.Plugins.ScenePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);

    this.graphics = null;
    this.text = null;

    // Colors
    this.borderColor = 0x907748;
    this.borderAlpha = 1;
    this.windowAlpha = 0.8;
    this.windowColor = 0x303030;

    //
    this.letterCount = 0;
  }

  speak(text, params, callback) {
    this.graphics = this.scene.add.graphics();
    this.drawWindow();
    this.drawText(text, params, callback);
  }

  drawWindow() {
    this._drawWindowToScreen();
    this._drawWindowWrapperToScreen();
  }

  drawText(text, { isAnimated }, callback) {
    this.letterCount = 0;
    if (this.timedEvent) this.timedEvent.remove();

    this._drawText("");

    if (isAnimated) {
      this.timedEvent = this.scene.time.addEvent({
        delay: 25,
        callback: () => {
          this.letterCount++;
          const textToAdd = text.substring(0, this.letterCount);
          this.text.setText(textToAdd);
          if (this.letterCount === text.length + 1) {
            this.timedEvent.remove();
            this.graphics.destroy();
            this.text.destroy();
            // this.destroy();
            callback();
          }
        },
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
}

export default DialoguePlugin;
