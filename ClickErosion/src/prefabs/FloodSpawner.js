class FloodSpawner extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 0);
        scene.add.existing(this);

        this.setScale(1.1, .75);
        this.depth = 10;

        //establish neccessary fields
        this.scene = scene;
        this.hidden = true;
        this.ready = false;

        //timer so it cannot be spammed
        this.cooldown = this.scene.time.addEvent({
            delay: 30000,
            callback: () => { this.ready = true; },
            loop: false,
            callbackScope: this
        });

        //establish text space
        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "12px",
            color: "#FFF",
            align: "center",
            padding: {
                top: 0,
                bottom: 0
            },
            fixedWidth: 0
        };
        this.cost = this.scene.add.text(this.x, this.y - 0 * this.height / 20, "COST: 50 DROPS; 50% PLANTS", menuConfig).setOrigin(.5);
        this.reward = this.scene.add.text(this.x, this.y + 4 * this.height / 20, "REWARD: FERTILITY", menuConfig).setOrigin(.5);
        this.cost.depth = 11;
        this.reward.depth = 11;

        menuConfig.color = "#000";
        this.explanation = this.scene.add.text(this.x, this.y + .625 * this.height, "FERTILITY INCREASES THE CHANCE THAT\n" +
            "A PLANT REPRODUCES. THIS WILL\nHELP MAINTAIN THE POPULATION.", menuConfig).setOrigin(.5);
        this.explanation.depth = 11;
        this.cooldownText = this.scene.add.text(this.x, this.y + .9 * this.height, "RECHARGE: " +
            Math.ceil(100 * this.cooldown.getProgress()) + "%", menuConfig).setOrigin(.5);
        this.cooldownText.depth = 11;

        menuConfig.color = "#FFF";
        menuConfig.fontSize = "18px";
        this.title = this.scene.add.text(this.x, this.y - 4 * this.height / 20, "SPAWN FLOOD", menuConfig).setOrigin(.5);
        this.title.depth = 11;

        //interactive mouse controls
        let mouse = game.input.mousePointer;

        this.scene.input.on('pointerdown', () => {
            //if conditions met
            if (this.ready && !this.hidden && mouse.x > this.x - this.width / 2 &&
                mouse.x < this.x + this.width / 2 && mouse.y > this.y - this.height / 2 &&
                mouse.y < this.y + this.height / 2 && this.scene.maxDrops - this.scene.currentDrops >= 50) {
                //reset cooldown and spawn a wave of drops across the top
                //then, kill half the plants and raise fertility by that much
                this.ready = false;
                this.fertility++;
                this.cooldown = this.scene.time.addEvent({
                    delay: 30000,
                    callback: () => { this.ready = true; },
                    loop: false,
                    callbackScope: this
                });
                for (let i = 1; i <= 50; i++) {
                    this.scene.spawnDrop(game.config.width * .275 + (game.config.width * .45 * (i / 50)), 25);
                }
                let preSize = this.scene.plants.length;
                for (let i = 0; this.scene.plants.length > 0 && i < preSize / 2; i++) {
                    this.scene.plants[0].death();
                    this.scene.fertility++;
                }
            }
        });
    }

    update() {
        if (this.hidden) {
            this.alpha = 0;
            this.title.alpha = 0;
            this.cost.alpha = 0;
            this.reward.alpha = 0;
            this.explanation.alpha = 0;
            this.cooldownText.alpha = 0;
        } else {
            let alpha = this.cooldown.getProgress();
            this.alpha = alpha;
            this.title.alpha = alpha;
            this.cost.alpha = alpha;
            this.reward.alpha = alpha;
            this.explanation.alpha = 1;
            this.cooldownText.alpha = 1;
            this.cooldownText.text = "RECHARGE: " + Math.ceil(100 * this.cooldown.getProgress()) + "%";
        }
    }

    hide() {
        this.hidden = true;
    }

    reveal() {
        this.hidden = false;
    }
}