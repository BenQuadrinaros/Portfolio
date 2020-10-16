class PlantSpawner extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 0);
        scene.add.existing(this);

        this.setScale(1.1, .75);
        this.depth = 10;

        //establish neccessary fields
        this.scene = scene;
        this.hidden = true;

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
        this.cost = this.scene.add.text(this.x, this.y - 0 * this.height / 20, "COST: 1 MAX DROP", menuConfig).setOrigin(.5);
        this.reward = this.scene.add.text(this.x, this.y + 4 * this.height / 20, "REWARD: 1 PLANT", menuConfig).setOrigin(.5);
        this.cost.depth = 11;
        this.reward.depth = 11;

        menuConfig.color = "#000";
        this.explanation = this.scene.add.text(this.x, this.y + .625 * this.height, "PLANTS REDUCE POLLUTANTS WHILE THEY\n" +
            "LIVE. EVERY 10 SECONDS THEY CAN\nREPRODUCE AND/OR DIE OFF.", menuConfig).setOrigin(.5);
        this.explanation.depth = 11;

        menuConfig.color = "#FFF";
        menuConfig.fontSize = "18px";
        this.title = this.scene.add.text(this.x, this.y - 4 * this.height / 20, "SPAWN PLANT", menuConfig).setOrigin(.5);
        this.title.depth = 11;

        //interactive mouse controls
        let mouse = game.input.mousePointer;

        this.scene.input.on('pointerdown', () => {
            //if conditions met
            if (!this.hidden && mouse.x > this.x - this.width / 2 &&
                mouse.x < this.x + this.width / 2 && mouse.y > this.y - this.height / 2 &&
                mouse.y < this.y + this.height / 2) {
                //reroute to scene function
                if (this.scene.plants.length < .5 * this.scene.maxDrops) {
                    this.scene.spawnPlant();
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
        } else {
            this.alpha = 1;
            this.title.alpha = 1;
            this.cost.alpha = 1;
            this.reward.alpha = 1;
            this.explanation.alpha = 1;
        }
    }

    hide() {
        this.hidden = true;
    }

    reveal() {
        this.hidden = false;
    }
}