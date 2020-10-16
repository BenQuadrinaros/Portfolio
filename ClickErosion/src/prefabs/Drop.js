class Drop extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.scene = scene;
        this.saturation = 0;

        this.setScale(.75, .75);
    }

    update() {
        if (this.saturation < this.scene.dropSaturation && Phaser.Math.FloatBetween(0, 1) < this.scene.saturationChance) {
            this.saturation++;
        }
        this.y += Phaser.Math.Between(1, 3);
        let percentSat = this.saturation / this.scene.dropSaturation;
        if (percentSat > .5) {
            this.tint = (0xA65600);
        } else if (percentSat > .25) {
            this.tint = (0x923300);
        } else if (percentSat > 0) {
            this.tint = (0x331500);
        } else {
            this.tint = (0x000000);
        }
        //console.log("tint " + this.tintBottomLeft);
    }

    claim() {
        if (this.scene.damMade) {
            if (this.pollutants <= 20) {
                this.scene.electricity++;
            }
        } else {
            let ret = this.saturation - this.scene.pollutants;
            if (ret <= 0) { ret = 1; }
            this.scene.sediment += ret;
            super.destroy();
        }
    }
}