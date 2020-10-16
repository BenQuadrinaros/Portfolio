class Cosmetic extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, depth, frame = 0) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.depth = depth;
    }
}