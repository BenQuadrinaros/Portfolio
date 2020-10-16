class NToggle extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 0);
        scene.add.existing(this);

        this.setScale(1.1, .65);
        this.depth = 10;

        //establish neccessary fields
        this.scene = scene;
        this.enabled = true;

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
        this.enabledText = this.scene.add.text(this.x, this.y, "NATURE/NURTURE TOGGLE", menuConfig).setOrigin(.5);
        this.enabledText.depth = 11;

        //interactive mouse controls
        let mouse = game.input.mousePointer;

        this.scene.input.on('pointerdown', () => {
            //if conditions met
            if (mouse.x > this.x - this.width / 2 && mouse.x < this.x + this.width / 2 &&
                mouse.y > this.y - this.height / 2 && mouse.y < this.y + this.height / 2 &&
                this.alpha == 1) {
                if (this.enabled) {
                    this.scene.dropUpgrade.hide();
                    this.scene.cloudUpgrade.hide();
                    this.scene.tributaryUpgrade.hide();
                    this.scene.lakeUpgrade.hide();
                    this.scene.natureNurture.text = "NURTURE";
                    this.scene.plantSpawner.reveal();
                    this.scene.floodSpawner.reveal();
                    this.scene.goldTrader.reveal();
                } else {
                    this.scene.plantSpawner.hide();
                    this.scene.floodSpawner.hide();
                    this.scene.goldTrader.hide();
                    this.scene.natureNurture.text = "NATURE";
                    this.scene.dropUpgrade.reveal();
                    this.scene.cloudUpgrade.reveal();
                    this.scene.tributaryUpgrade.reveal();
                    this.scene.lakeUpgrade.reveal();
                }
                this.enabled = !this.enabled;
            }
        });
    }
}