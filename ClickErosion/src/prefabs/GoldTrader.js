class GoldTrader extends Phaser.GameObjects.Sprite {

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
            delay: 15000,
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
        this.cost = this.scene.add.text(this.x, this.y - 0 * this.height / 20, "COST: 50 GOLD", menuConfig).setOrigin(.5);
        this.reward = this.scene.add.text(this.x, this.y + 4 * this.height / 20, "REWARD: RANDOM RESOURCES", menuConfig).setOrigin(.5);
        this.cost.depth = 11;
        this.reward.depth = 11;

        menuConfig.color = "#000";
        this.explanation = this.scene.add.text(this.x, this.y + .625 * this.height, "PEOPLE WILL COME AND GO BASED\n" +
            "ON YOUR CURRENT SUPPLY OF PLANTS.\nTHEY WILL OCCASIOANLLY GIVE YOU GOLD.", menuConfig).setOrigin(.5);
        this.explanation.depth = 11;
        this.cooldownText = this.scene.add.text(this.x, this.y + .9 * this.height, "RECHARGE: " +
            Math.ceil(100 * this.cooldown.getProgress()) + "%", menuConfig).setOrigin(.5);
        this.cooldownText.depth = 11;

        menuConfig.color = "#FFF";
        menuConfig.fontSize = "18px";
        this.title = this.scene.add.text(this.x, this.y - 4 * this.height / 20, "TRADE GOLD", menuConfig).setOrigin(.5);
        this.title.depth = 11;

        //interactive mouse controls
        let mouse = game.input.mousePointer;

        this.scene.input.on('pointerdown', () => {
            //if conditions met
            if (this.ready && !this.hidden && mouse.x > this.x - this.width / 2 &&
                mouse.x < this.x + this.width / 2 && mouse.y > this.y - this.height / 2 &&
                mouse.y < this.y + this.height / 2 && this.scene.gold >= 50) {
                //trade in 50 gold for random rewards
                this.ready = false;
                this.cooldown = this.scene.time.addEvent({
                    delay: 15000,
                    callback: () => { this.ready = true; },
                    loop: false,
                    callbackScope: this
                });
                for (let i = 1; i <= 50; i++) {
                    this.scene.gold--;
                    let random = Phaser.Math.FloatBetween(0, 1);
                    if(random < .75) { this.scene.sediment++; }
                    if(random < .45) { this.scene.minerals++; }
                    if(random < .15) { this.scene.gold++; }
                    if(random < .05) { this.scene.electricity ++; }
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