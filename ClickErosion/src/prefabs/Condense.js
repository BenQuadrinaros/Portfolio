class Condense extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 0);
        scene.add.existing(this);

        this.setScale(1.1, .65);
        this.depth = 10;

        //establish neccessary fields
        this.scene = scene;
        this.tier = 0;
        this.enabled = false;

        this.convert();

        //establish text space
        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "16px",
            color: "#FFF",
            align: "center",
            padding: {
                top: 0,
                bottom: 0
            },
            fixedWidth: 0
        };
        this.enabledText = this.scene.add.text(this.x, this.y, this.scene.lakeSedTake +
            " SEDIMENT → 2 MINERALS:\nDISABLED", menuConfig).setOrigin(.5);
        this.enabledText.depth = 11;

        //interactive mouse controls
        let mouse = game.input.mousePointer;

        this.scene.input.on('pointerdown', () => {
            //if conditions met
            if (mouse.x > this.x - this.width / 2 && mouse.x < this.x + this.width / 2 &&
                mouse.y > this.y - this.height / 2 && mouse.y < this.y + this.height / 2 &&
                this.alpha == 1) {
                this.enabled = !this.enabled;
            }
        });
    }

    update() {
        if (this.enabled) {
            this.enabledText.text = this.scene.lakeSedTake + " SEDIMENT → 2 MINERALS:\nENABLED";
        } else {
            this.enabledText.text = this.scene.lakeSedTake + " SEDIMENT → 2 MINERALS:\nDISABLED";
        }
    }

    convert() {
        if (this.enabled && this.scene.sediment >= this.scene.lakeSedTake) {
            this.scene.sediment -= this.scene.lakeSedTake;
            this.scene.minerals++;
            this.scene.minerals++;
        }
        this.scene.time.addEvent({
            delay: this.scene.lakeConversionTimer * 1000,
            callback: () => { this.convert(); },
            loop: false,
            callbackScope: this
        });
    }

}