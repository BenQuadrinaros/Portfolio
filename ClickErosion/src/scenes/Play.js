class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load image files
        this.load.image("drop1", "./assets/drop1.png");
        this.load.image("drop2", "./assets/drop2.png");
        this.load.image("drop3", "./assets/drop3.png");
        this.load.image("drop4", "./assets/drop4.png");
        this.load.image("drop5", "./assets/drop5.png");
        this.load.image("drop6", "./assets/drop6.png");
        this.load.image("panel", "./assets/panel.png");
        this.load.image("cloud1", "./assets/cloud1.png");
        this.load.image("cloud2", "./assets/cloud2.png");
        this.load.image("tributary", "./assets/tributary.png");
        this.load.image("lake", "./assets/lake.png");
        this.load.image("plant1", "./assets/plant1.png");
        this.load.image("plant2", "./assets/plant2.png");
        this.load.image("plant3", "./assets/plant3.png");
        this.load.image("house", "./assets/house.png");
        this.load.image("farm", "./assets/farm.png");

        //load audio files
        this.load.audio("menuSelect", "./assets/menuSelect.wav");
    }

    create() {
        //establish variables
        let borderWidth = 15;
        let mouse = game.input.mousePointer;
        this.paused = false;

        //parameters for water drops
        this.maxDrops = 1;
        this.currentDrops = 0;
        this.dropSaturation = 1;
        this.saturationChance = .003;
        this.drops = [];

        //parameters for clouds
        this.cloudReleaseTimer = 5;
        this.cloudReleaseAmount = 1;
        this.cloudMade = false;
        this.clouds = [];

        //parameters for tributary
        this.clickValue = 1;
        this.tributaryMade = false;

        //parameters for lake
        this.lakeSedTake = 25;
        this.lakeConversionTimer = 12;
        this.lakeMade = false;

        //parameters for collectables
        this.sediment = 0;
        this.minerals = 0;
        this.gold = 0;
        this.electricity = 0;

        //parameters for manageabales
        this.pollutants = 0;
        this.plants = [];
        this.people = 0;

        //hidden variables
        this.fertility = 5;
        this.cyclePeople();
        this.peopleConditions = peopleBuildConditions[0];
        this.peoplePointer = 0;

        //structures people can build
        this.houseMade = false;
        this.farmMade = false;
        this.townMade = false;
        this.damMade = false;

        //area for the game to take place in
        this.playArea = this.add.rectangle(.25 * game.config.width + .5 * borderWidth, borderWidth,
            .5 * game.config.width - .5 * borderWidth, game.config.height - 2 * borderWidth,
            0xA65600).setOrigin(0, 0);

        //area for displaying text and collectable counters
        this.textPanel = this.add.rectangle(.5 * borderWidth, borderWidth,
            .25 * game.config.width - .5 * borderWidth, game.config.height - 2 * borderWidth,
            0xD1D1D1).setOrigin(0, 0);
        this.textPanel.alpha = .75;

        //area for upgrades and text to be displayed
        this.upgradePanel = this.add.rectangle(.75 * game.config.width + .5 * borderWidth, borderWidth,
            .25 * game.config.width - borderWidth, game.config.height - 2 * borderWidth,
            0xD1D1D1).setOrigin(0, 0);
        this.upgradePanel.alpha = .55;

        //key configurations (if neccessary)
        keyZERO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);

        let menuConfig = {
            fontFamily: "Ariel",
            fontSize: "20px",
            color: "#000",
            align: "center",
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        };

        // [↑] & [↓]
        // [←] & [→]
        // text to guide player
        this.guideStage = 0;
        this.guide = this.add.text(.125 * game.config.width + 7, 115, "Click in the middle 'play area'\nto create water drops." +
            "\nDrops will run down the screen\ncollecting sediment and will be\ncollected at the bottom.",
            menuConfig).setOrigin(.5);

        // text to display active count and max water drops
        this.dropDisplay = this.add.text(.125 * game.config.width + 7, 235, "Reserve drops / maximum drops:\n" +
            (this.maxDrops - this.currentDrops) + " / " + this.maxDrops, menuConfig).setOrigin(.5);

        // collectables counter text (left side)
        this.sedimentDisplay = this.add.text(.125 * game.config.width + 7, 280, "Sediment accumulated:" + this.sediment,
            menuConfig).setOrigin(.5);
        this.mineralsDisplay = this.add.text(.125 * game.config.width + 7, 310, "Minerals accumulated:" + this.minerals,
            menuConfig).setOrigin(.5);
        this.mineralsDisplay.alpha = 0;
        this.goldDisplay = this.add.text(.125 * game.config.width + 7, 340, "Gold accumulated:" + this.gold,
            menuConfig).setOrigin(.5);
        this.goldDisplay.alpha = 0;
        this.electricityDisplay = this.add.text(.125 * game.config.width + 7, 370, "Electricity accumulated:" + this.electricity,
            menuConfig).setOrigin(.5);
        this.electricityDisplay.alpha = 0;

        //manageables counter text (left side)
        this.pollutantsDisplay = this.add.text(.125 * game.config.width + 7, 500, "Active pollutants:" + this.pollutants,
            menuConfig).setOrigin(.5);
        this.pollutantsDisplay.alpha = 0;
        this.plantsDisplay = this.add.text(.125 * game.config.width + 7, 530, "Active plants:" + this.plants.length,
            menuConfig).setOrigin(.5);
        this.plantsDisplay.alpha = 0;
        this.peopleDisplay = this.add.text(.125 * game.config.width + 7, 560, "Active people:" + this.people,
            menuConfig).setOrigin(.5);
        this.peopleDisplay.alpha = 0;

        //toggleable panels (left side)
        this.condense = new Condense(this, .125 * game.config.width + 7, 435, "panel").setOrigin(.5);
        this.condense.alpha = 0;
        this.condense.enabledText.alpha = 0;
        this.natureNurture = this.add.text(.875 * game.config.width, 30, "NATURE", menuConfig).setOrigin(.5);
        this.nToggle = new NToggle(this, .125 * game.config.width + 7, 635, "panel");
        this.nToggle.alpha = 0;
        this.nToggle.enabledText.alpha = 0;

        //upgrade panels (right side)
        this.dropUpgrade = new DropUpgrade(this, .875 * game.config.width, 110, "panel", dropUpgradeList);
        this.cloudUpgrade = new CloudUpgrade(this, .875 * game.config.width, 245, "panel", cloudUpgradeList);
        this.tributaryUpgrade = new TributaryUpgrade(this, .875 * game.config.width, 380, "panel", tributaryUpgradeList);
        this.lakeUpgrade = new LakeUpgrade(this, .875 * game.config.width, 515, "panel", lakeUpgradeList);

        //nurture panels (right side)
        this.plantSpawner = new PlantSpawner(this, .875 * game.config.width, 110, "panel");
        this.floodSpawner = new FloodSpawner(this, .875 * game.config.width, 265, "panel");
        this.goldTrader = new GoldTrader(this, .875 * game.config.width, 435, "panel");

        //mouse listener event for water drops
        this.input.on('pointerdown', () => {
            //if not maximum drops && inside of playArea
            if (mouse.x < this.playArea.x + this.playArea.width - borderWidth &&
                mouse.x > this.playArea.x + borderWidth && mouse.y > this.playArea.y + borderWidth) {
                for (let i = 1; i <= this.clickValue; ++i) {
                    this.spawnDrop(mouse.x, mouse.y);
                }
            }
        });
    }

    update() {
        if (!this.paused) {
            //update all water drops
            for (let i = 0; i < this.drops.length; ++i) {
                this.drops[i].update();
                if (this.drops[i].y > game.config.height - 1 * this.drops[i].height) {
                    this.drops[i].claim();
                    this.drops.splice(i, 1);
                    this.currentDrops--;
                }
            }

            //update collectable displays
            this.dropDisplay.text = "Reserve drops / maximum drops:\n" + (this.maxDrops - this.currentDrops) +
                " / " + this.maxDrops;
            this.sedimentDisplay.text = "Sediment accumulated: " + this.sediment;
            if (this.mineralsDisplay.alpha == 0 && this.minerals > 0) { this.mineralsDisplay.alpha = 1; }
            this.mineralsDisplay.text = "Minerals accumulated: " + this.minerals;
            if (this.goldDisplay.alpha == 0 && this.gold > 0) { this.goldDisplay.alpha = 1; }
            this.goldDisplay.text = "Gold accumulated: " + this.gold;
            if (this.electricityDisplay.alpha == 0 && this.electricity > 0) { this.electricityDisplay.alpha = 1; }
            this.electricityDisplay.text = "Electricity accumulated: " + this.electricity;

            //update manageable displays
            this.pollutants = Math.floor(this.sediment / 1000) + Math.floor(this.people / 10) - this.plants.length;
            if (this.pollutants < 0) { this.pollutants = 0; }
            if (this.pollutantsDisplay.alpha == 0 && this.pollutants > 0) {
                this.pollutantsDisplay.alpha = 1;
                this.nToggle.alpha = 1;
                this.nToggle.enabledText.alpha = 1;
            }
            this.pollutantsDisplay.text = "Active pollutants: " + this.pollutants;
            if (this.plantsDisplay.alpha == 0 && this.plants.length > 0) { this.plantsDisplay.alpha = 1; }
            this.plantsDisplay.text = "Active plants: " + this.plants.length;
            if (this.peopleDisplay.alpha == 0 && this.people > 0) { this.peopleDisplay.alpha = 1; }
            this.peopleDisplay.text = "Active people: " + this.people;

            //update upgrade panels
            this.dropUpgrade.update();
            this.cloudUpgrade.update();
            this.tributaryUpgrade.update();
            this.lakeUpgrade.update();

            //update all clouds
            for (let i = 0; i < this.clouds.length; ++i) { this.clouds[i].update(); }

            //conditions to spawn first cloud and unhide panel
            if (!this.cloudMade && this.cloudUpgrade.conditionsMet()) {
                this.cloudMade = true;
                this.spawnCloud();
                this.cloudUpgrade.reveal();
            }

            //conditions to unhide panel
            if (!this.tributaryMade && this.tributaryUpgrade.conditionsMet()) {
                this.tributaryMade = true;
                this.tributaryUpgrade.reveal();
            }

            //conditions to make lake and unhide panel
            if (!this.lakeMade && this.lakeUpgrade.conditionsMet()) {
                this.lakeMade = true;
                new Lake(this, game.config.width / 2, 19 * game.config.height / 20 - 4, "lake", 0);
                this.condense.alpha = 1;
                this.condense.enabledText.alpha = 1;
                this.lakeUpgrade.reveal();
            }

            //update condense toggle
            if (this.lakeMade) { this.condense.update(); }

            //update nurture panels
            this.plantSpawner.update();
            this.floodSpawner.update();
            this.goldTrader.update();

            //update guide text for new thresholds
            if (this.guideStage < guideStages.length) {
                let advance = false;
                let conditions = guideStages[this.guideStage][1];
                if (this.sediment >= conditions[0] && this.minerals >= conditions[1] &&
                    this.gold >= conditions[2] && this.electricity >= conditions[3]) {
                    advance = true;
                }
                if (advance) {
                    this.guide.text = guideStages[this.guideStage][0];
                    ++this.guideStage;
                }
            }
        }
    }

    spawnDrop(x, y) {
        if (this.currentDrops < this.maxDrops) {
            let rand = Phaser.Math.Between(1, 6);
            if (rand == 1) {
                this.drops.push(new Drop(this, Phaser.Math.Between(x - 5, x + 5),
                    Phaser.Math.Between(y - 5, y + 5), "drop1", 0));
            } else if (rand == 2) {
                this.drops.push(new Drop(this, Phaser.Math.Between(x - 5, x + 5),
                    Phaser.Math.Between(y - 5, y + 5), "drop2", 0));
            } else if (rand == 3) {
                this.drops.push(new Drop(this, Phaser.Math.Between(x - 5, x + 5),
                    Phaser.Math.Between(y - 5, y + 5), "drop3", 0));
            } else if (rand == 4) {
                this.drops.push(new Drop(this, Phaser.Math.Between(x - 5, x + 5),
                    Phaser.Math.Between(y - 5, y + 5), "drop4", 0));
            } else if (rand == 5) {
                this.drops.push(new Drop(this, Phaser.Math.Between(x - 5, x + 5),
                    Phaser.Math.Between(y - 5, y + 5), "drop5", 0));
            } else if (rand == 6) {
                this.drops.push(new Drop(this, Phaser.Math.Between(x - 5, x + 5),
                    Phaser.Math.Between(y - 5, y + 5), "drop6", 0));
            }
            this.currentDrops++;
        }
    }

    spawnCloud() {
        let rand = Phaser.Math.Between(1, 2);
        if (rand == 1) {
            this.clouds.push(new Cloud(this, game.config.width / 2, 40, "cloud1", 0));
        } else {
            this.clouds.push(new Cloud(this, game.config.width / 2, 40, "cloud2", 0));
        }
    }

    spawnTributary(x, y, flip) {
        let temp = new Cosmetic(this, x * game.config.width, y * game.config.height, "tributary", 0);
        temp.setScale(1.3, 1.1);
        temp.toggleFlipY();
        if (!flip) { temp.toggleFlipX(); }
    }

    spawnPlant(x = 0, y = 0) {
        if (x <= game.config.width * .275 || x >= game.config.width * .725) {
            x = Phaser.Math.Between(.3 * game.config.width, .7 * game.config.width);
        }
        if (y <= 75 || y >= game.config.height - 75) {
            y = Phaser.Math.Between(90, game.config.height - 90);
        }
        if (this.plants.length < this.maxDrops / 2) {
            let random = Phaser.Math.Between(1, 3);
            if (random == 1) {
                this.plants.push(new Plant(this, x, y, "plant1", 0));
            } else if (random == 2) {
                this.plants.push(new Plant(this, x, y, "plant2", 0));
            } else if (random == 3) {
                this.plants.push(new Plant(this, x, y, "plant3", 0));
            }
        }
    }

    removePlant(plant) {
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].x == plant.x && this.plants[i].y == plant.y) {
                this.plants.splice(i, 1);
                return;
            }
        }
    }

    cyclePeople() {
        let random;
        if (this.houseMade) {
            random = Phaser.Math.Between(0, Math.floor(this.plants.length * 1.5));
        } else {
            random = Phaser.Math.Between(0, Math.floor(this.plants.length));
        }
        if (this.people > random) {
            this.gold += (this.people - random);
            this.people = random;
        } else {
            for (; this.people < random; this.people++) {
                if (this.plants.length > 0) {
                    this.plants[0].death();
                }
            }
        }
        if (this.townMade) {
            this.gold += Math.floor(this.people / 5);
        } else {
            this.gold += Math.floor(this.people / 20);
        }

        if (this.peopleConditions != null && this.people >= this.peopleConditions[0]) {
            this.peopleConditions[1]--;
            if (this.peopleConditions[1] <= 0) {
                this.peoplePointer++;

                if (this.peoplePointer == 1) {
                    this.houseMade = true;
                    //make house sprite
                    new Cosmetic(this, game.config.width * .32, game.config.height * .2, "house", 15);

                } else if (this.peoplePointer == 2) {
                    this.farmMade = true;
                    //make farm sprite
                    new Cosmetic(this, game.config.width * .68, game.config.height * .4, "farm", 3);

                } else if (this.peoplePointer == 3) {
                    this.townMade = true;
                    //make town sprite

                } else {
                    this.damMade = true;
                    //make dam sprite

                }

                if (this.peoplePointer == this.peopleConditions.length) {
                    this.peoplePointer = null;
                } else {
                    this.peopleConditions = peopleBuildConditions[this.peoplePointer];
                }
            }
        }

        this.time.addEvent({
            delay: Phaser.Math.FloatBetween(.5, 1.5) * 5000,
            callback: () => { this.cyclePeople(); },
            loop: false,
            callbackScope: this
        });
    }
}
