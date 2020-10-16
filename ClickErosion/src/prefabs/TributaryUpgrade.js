class TributaryUpgrade extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, list) {
        super(scene, x, y, texture, 0);
        scene.add.existing(this);

        this.setScale(1.1, 1);
        this.depth = 10;

        //establish neccessary fields
        this.scene = scene;
        this.list = list;
        this.tier = 0;
        this.condition = this.list[this.tier][0];
        this.effect = this.list[this.tier][1];
        this.atMax = false;
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
        this.cost = this.scene.add.text(this.x, this.y - 3 * this.height / 20, "COST: ", menuConfig).setOrigin(.5);
        this.reward = this.scene.add.text(this.x, this.y + 5 * this.height / 20, "REWARD: ", menuConfig).setOrigin(.5);
        this.cost.depth = 11;
        this.reward.depth = 11;

        menuConfig.fontSize = "16px";
        this.title = this.scene.add.text(this.x, this.y - 7 * this.height / 20, "TRIBUTARIES", menuConfig).setOrigin(.5);
        this.title.depth = 11;

        //create display text
        this.displayMetrics();

        //interactive mouse controls
        let mouse = game.input.mousePointer;

        this.scene.input.on('pointerdown', () => {
            //if conditions met
            if (!this.hidden && this.conditionsMet() && mouse.x > this.x - this.width / 2 &&
                mouse.x < this.x + this.width / 2 && mouse.y > this.y - this.height / 2 &&
                mouse.y < this.y + this.height / 2) {
                //remove collectables for condition
                this.scene.sediment -= this.condition[0];
                this.scene.minerals -= this.condition[1];
                this.scene.gold -= this.condition[2];
                this.scene.electricity -= this.condition[3];
                //implement effects
                this.scene.clickValue += this.effect[0];
                this.scene.spawnTributary(this.effect[1], this.effect[2], this.effect[3]);
                //update costs and tracking
                this.tier++;
                if (this.tier >= this.list.length) {
                    this.atMax = true;
                } else {
                    this.condition = this.list[this.tier][0];
                    this.effect = this.list[this.tier][1];
                }
                this.displayMetrics();
            }
        });
    }

    update() {
        if (this.hidden) {
            this.alpha = 0;
            this.title.alpha = 0;
            this.cost.alpha = 0;
            this.reward.alpha = 0;
        } else if (!this.atMax && this.conditionsMet()) {
            this.alpha = 1;
            this.title.alpha = 1;
            this.cost.alpha = 1;
            this.reward.alpha = 1;
        } else {
            this.alpha = .65;
            this.title.alpha = .65;
            this.cost.alpha = .65;
            this.reward.alpha = .65;
        }
    }

    conditionsMet() {
        if (this.atMax) { return false; }
        if (this.scene.sediment >= this.condition[0] && this.scene.minerals >= this.condition[1] &&
            this.scene.gold >= this.condition[2] && this.scene.electricity >= this.condition[3]) {
            return true;
        } else {
            return false;
        }
    }

    displayMetrics() {
        if (this.atMax) {
            this.cost.text = "AT MAXIMUM";
            this.reward.text = "";
            return;
        }
        //display text for cost of upgrade
        this.cost.text = "COST: "
        let numText = 0;
        for (let i = 0; i < 4; ++i) {
            if (this.condition[i] > 0) {
                if (numText == 0) {
                    if (i == 0) {
                        this.cost.text += this.condition[0] + " Sediment";
                    } else if (i == 1) {
                        this.cost.text += this.condition[1] + " Mineral(s)";
                    } else if (i == 2) {
                        this.cost.text += this.condition[2] + " Gold";
                    } else {
                        this.cost.text += this.condition[3] + " Gem(s)";
                    }
                    ++numText;
                    continue;
                } else if (numText % 2 == 0) {
                    if (i == 2) {
                        this.cost.text += "\n" + this.condition[2] + " Gold";
                    } else {
                        this.cost.text += "\n" + this.condition[3] + " Gem(s)";
                    }
                    ++numText;
                    continue;
                } else {
                    if (i == 1) {
                        this.cost.text += "; " + this.condition[1] + " Mineral(s)";
                    } else if (i == 2) {
                        this.cost.text += "; " + this.condition[2] + " Gold";
                    } else {
                        this.cost.text += "; " + this.condition[3] + " Gem(s)";
                    }
                    ++numText;
                    continue;
                }
            }
        }

        //display text for reward of upgrade
        this.reward.text = "REWARD: "
        if (this.effect[0] > 0) {
            this.reward.text += "Click Value";
        }
    }

    hide() {
        this.hidden = true;
    }

    reveal() {
        this.hidden = false;
    }
}