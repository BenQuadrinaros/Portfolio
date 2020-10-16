class Cloud extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.depth = 1000;

        this.scene = scene;
        this.spawnDrop();
    }

    update() {
        let mod = ((this.x + this.width / 2) - (game.config.width / 2)) / (game.config.width / 8);
        this.x += Phaser.Math.FloatBetween(-1.5 - mod, 1.5 + mod);
        this.alpha = .35 + .35 * (1 - (this.scene.cloudReleaseTimer / 5));
    }

    spawnDrop() {
        for (let i = 1; i <= this.scene.cloudReleaseAmount; ++i) {
            this.scene.spawnDrop(this.x + Phaser.Math.FloatBetween(-.5, .5) * this.width,
                this.y + 4 * this.height / 5);
        }
        this.scene.time.addEvent({
            delay: Phaser.Math.FloatBetween(.85, 1.15) * this.scene.cloudReleaseTimer * 1000,
            callback: () => { this.spawnDrop(); },
            loop: false,
            callbackScope: this
        });
    }
}