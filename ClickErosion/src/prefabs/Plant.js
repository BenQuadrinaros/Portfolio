class Plant extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.scene = scene;
        this.depth = 8;
        this.spreadChance = .1 + (.4 * (1 - Math.pow(.975, this.scene.fertility)));
        this.deathChance = .3 - (.6 * (Math.pow(.8, this.scene.people)));

        this.first = true;
        this.last = false;
        this.preserved = this.scene.farmMade;

        if (!this.preserved) {
            this.scene.maxDrops--;
            this.scene.fertility--;
        }

        this.loop();
    }

    loop() {
        this.spreadChance = .1 + (.6 * (1 - Math.pow(.3, this.scene.fertility)));
        this.deathChance = .5 + (.5 * (1 - Math.pow(.75, this.scene.people)));
        if (!this.first) {
            let random = Phaser.Math.FloatBetween(0, 1);
            if (random < this.spreadChance) {
                this.scene.spawnPlant(Phaser.Math.Between(this.x - 25, this.x + 25),
                    Phaser.Math.Between(this.y - 25, this.y + 25));
                if (random < this.spreadChance * this.spreadChance) {
                    this.scene.spawnPlant(Phaser.Math.Between(this.x - 25, this.x + 25),
                        Phaser.Math.Between(this.y - 25, this.y + 25));
                }
            }
            if (random < this.deathChance) {
                this.death();
                this.last = true;
            }
            if (!this.last) {
                this.looper = this.scene.time.addEvent({
                    delay: Phaser.Math.FloatBetween(.85, 1.15) * 10000,
                    callback: () => { this.loop(); },
                    loop: false,
                    callbackScope: this
                });
            }
        } else {
            this.first = false;
            this.looper = this.scene.time.addEvent({
                delay: Phaser.Math.FloatBetween(.85, 1.15) * 10000,
                callback: () => { this.loop(); },
                loop: false,
                callbackScope: this
            });
        }
    }

    death() {
        this.last = true;
        this.looper.callback = null;
        if (this.preserved) {
            this.scene.maxDrops++;
            this.scene.fertility++;
        }
        this.scene.removePlant(this);
        super.destroy();
    }
}