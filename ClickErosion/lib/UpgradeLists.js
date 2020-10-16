let guideStages = [
    /*
    [
        "GUIDE TEXT",
        CONDITION FOR CHANGE: [SEDIMENT, MINERALS, GOLD, ELECTRICITY]
    ]
    */
    [
        "Click on the panels on the\nright to upgrade your ability\nto errode. They will become\n" +
        "active as you collect materials.",
        [3, 0, 0, 0]
    ],
    [
        "The further a drop rolls the\nhigher chance it has to\nbecome saturated with sediment.\n" +
        "Try dropping them from the top\nof the 'play area'.",
        [12, 0, 0, 0]
    ],
    [
        "Good job getting this far, but\nwe are going to need a\nlot more sediment where we are\n" +
        "going. Keep up the good work.",
        [50, 0, 0, 0]
    ],
    [
        "Looks like there are clouds\ngathering. They will release a\nfew unused drops for you\n" +
        "automatically every few\nseconds. Try collecting some\nmore sediment to increase their\n" +
        "potency and frequency.",
        [115, 0, 0, 0]
    ],
    [
        "Don't get discouraged if you\nfeel like you are making slow\nprogress. Erosion takes a long\n" +
        "time to work, but will it will\neventually tear down the largest\nmountains. You can always sit\n" +
        "back and let the clouds do\nthe work for you.",
        [210, 0, 0, 0]
    ],
    [
        "Congratulations! We have have\nenough sediment to acquire our\nfirst tributary. Tributaries vastly\n" +
        "increase the water flow and\npotential of the river. Make sure\nto keep upgrading them.",
        [490, 0, 0, 0]
    ],
    [
        "Rawr, XD ~nuzzlez~ :3\n*notices bulge*\nUwU What's this?",
        [621, 0, 0, 0]
    ],
    [
        "Congratulations! We have have\nenough sediment to acquire our\nfirst tributary. Tributaries vastly\n" +
        "increase the water flow and\npotential of the river. Make sure\nto keep upgrading them.",
        [622, 0, 0, 0]
    ],
    [
        "All this water coming through\nhas formed into a lake; we can\ncondense sediment into minerals\n" +
        "and create more clouds. You\ncan toggle conversion using the\nnew button below.",
        [795, 0, 0, 0]
    ],
    [
        "Oh no. With all the sediment\nyou have been pulling in, you have\nunearthed some pollutants.\n" +
        "Pollutants reduce the amount\nof sediment you get per drop.\nLuckily, we can counteract\n" +
        "its effect by growing plants.\nI've unlocked the NURTURE menu\nfor you to use.",
        [1000, 0, 0, 0]
    ],
    [
        "Make sure to keep upgrading\nall of the different aspects\nof the water system to unlock the\n" +
        "full potential of erosion.\nKeep in mind to balance the\nupgrades to not overload any\n" +
        "particular part of the system.",
        [0, 15, 0, 0]
    ],
    [
        "I see you have acquired some\ngold from the people by the banks.\nYou can trade that back to them\n" +
        "to receive random amounts of\nresources in return.",
        [0, 0, 15, 0]
    ],
    [
        "DUMMY TEXT PLACEHOLDER\n\nHow did you even get here?\nIt shouldn't be possible!",
        [0, 0, 0, 999]
    ]
]

let dropUpgradeList = [
    /*
    [
        COST
        [SEDIMENT, MINERAL, GOLD, ELECTRICITY],
        GIVES
        [DROP MAX, SAT CHANCE, SAT MAX]
    ]
    */
    [
        [1, 0, 0, 0],
        [1, 0, 0]
    ],
    [
        [2, 0, 0, 0],
        [1, 0, 0]
    ],
    [
        [5, 0, 0, 0],
        [1, 0, 0]
    ],
    [
        [10, 0, 0, 0],
        [1, .001, 0]
    ],
    [
        [20, 0, 0, 0],
        [1, 0, 1]
    ],
    [
        [30, 0, 0, 0],
        [1, .001, 0]
    ],
    [
        [40, 0, 0, 0],
        [1, 0, 0]
    ],
    [
        [50, 0, 0, 0],
        [2, .001, 1]
    ],
    [
        [60, 0, 0, 0],
        [2, 0, 0]
    ],
    [
        [70, 0, 0, 0],
        [1, 0, 1]
    ],
    [
        [80, 0, 0, 0],
        [2, 0, 0]
    ],
    [
        [90, 0, 0, 0],
        [2, .001, 0]
    ],
    [
        [100, 0, 0, 0],
        [3, 0, 1]
    ],
    [
        [125, 0, 0, 0],
        [2, .001, 0]
    ],
    [
        [150, 0, 0, 0],
        [1, 0, 0]
    ],
    [
        [175, 0, 0, 0],
        [2, 0, 0]
    ],
    [
        [200, 0, 0, 0],
        [2, 0, 1]
    ],
    [
        [240, 0, 0, 0],
        [2, 0, 0]
    ],
    [
        [280, 0, 0, 0],
        [2, 0, 0]
    ],
    [
        [320, 0, 0, 0],
        [3, .001, 0]
    ],
    [
        [360, 0, 0, 0],
        [2, .001, 1]
    ],
    [
        [400, 0, 0, 0],
        [4, 0, 0]
    ],
    [
        [450, 0, 0, 0],
        [2, 0, 1]
    ],
    [
        [500, 0, 0, 0],
        [3, 0, 0]
    ],
    [
        [550, 0, 0, 0],
        [5, .001, 1]
    ],
    [
        [600, 0, 0, 0],
        [2, 0, 0]
    ],
    [
        [650, 0, 0, 0],
        [3, 0, 0]
    ],
    [
        [700, 0, 0, 0],
        [2, .001, 0]
    ],
    [
        [750, 1, 0, 0],
        [8, 0, 1]
    ],
    [
        [750, 2, 0, 0],
        [5, .001, 0]
    ],
    [
        [750, 3, 0, 0],
        [5, 0, 1]
    ],
    [
        [750, 4, 0, 0],
        [5, .001, 0]
    ],
    [
        [750, 5, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 6, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 7, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 8, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 9, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 10, 0, 0],
        [10, .001, 1]
    ],
    [
        [750, 11, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 12, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 13, 0, 0],
        [5, 0, 1]
    ],
    [
        [750, 14, 0, 0],
        [5, .001, 0]
    ],
    [
        [750, 15, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 16, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 17, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 18, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 19, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 20, 0, 0],
        [10, .001, 1]
    ],
    [
        [750, 21, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 22, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 23, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 24, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 25, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 26, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 27, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 28, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 29, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 30, 0, 0],
        [10, .001, 1]
    ],
    [
        [750, 31, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 32, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 33, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 34, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 35, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 36, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 37, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 38, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 39, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 40, 0, 0],
        [10, .001, 1]
    ],
    [
        [750, 41, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 42, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 43, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 44, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 45, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 46, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 47, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 48, 0, 0],
        [10, .001, 0]
    ],
    [
        [750, 49, 0, 0],
        [10, 0, 1]
    ],
    [
        [750, 50, 0, 0],
        [10, .001, 1]
    ]
    /*
    [
        COST
        [SEDIMENT, MINERAL, GOLD, ELECTRICITY],
        GIVES
        [DROP MAX, SAT CHANCE, SAT MAX]
    ]
    */
];

let cloudUpgradeList = [
    /*
    [
        COST
        [SEDIMENT, MINERAL, GOLD, ELECTRICITY],
        GIVES
        [REL TIMER MOD, REL AMOUNT]
    ]
    */
    [
        [120, 0, 0, 0],
        [.9, 0]
    ],
    [
        [150, 0, 0, 0],
        [.9, 1]
    ],
    [
        [180, 0, 0, 0],
        [.9, 0]
    ],
    [
        [210, 0, 0, 0],
        [1, 1]
    ],
    [
        [240, 0, 0, 0],
        [.9, 0]
    ],
    [
        [270, 0, 0, 0],
        [.9, 0]
    ],
    [
        [300, 0, 0, 0],
        [.9, 1]
    ],
    [
        [350, 0, 0, 0],
        [.9, 0]
    ],
    [
        [400, 0, 0, 0],
        [.9, 0]
    ],
    [
        [450, 0, 0, 0],
        [.9, 0]
    ],
    [
        [500, 0, 0, 0],
        [.9, 1]
    ],
    [
        [575, 0, 0, 0],
        [1, 1]
    ],
    [
        [650, 1, 0, 0],
        [.9, 0]
    ],
    [
        [725, 2, 0, 0],
        [.9, 1]
    ],
    [
        [800, 3, 0, 0],
        [1, 1]
    ],
    [
        [900, 4, 0, 0],
        [.9, 0]
    ],
    [
        [1000, 5, 0, 0],
        [.9, 1]
    ],
    [
        [1000, 6, 0, 0],
        [.9, 1]
    ],
    [
        [1000, 7, 0, 0],
        [.9, 1]
    ],
    [
        [1000, 8, 0, 0],
        [.9, 1]
    ],
    [
        [1000, 9, 0, 0],
        [.9, 1]
    ],
    [
        [1000, 10, 0, 0],
        [.9, 1]
    ]
    /*
    [
        COST
        [SEDIMENT, MINERAL, GOLD, ELECTRICITY],
        GIVES
        [REL TIMER MOD, REL AMOUNT]
    ]
    */
];

let tributaryUpgradeList = [
    /*
    [
        COST
        [SEDIMENT, MINERAL, GOLD, ELECTRICITY],
        GIVES
        [CLICK VALUE, X, Y, FLIP]
    ]
    */
    [
        [500, 0, 0, 0],
        [1, 2 / 3, 1 / 6, false]
    ],
    [
        [500, 100, 0, 0],
        [2, 1 / 3, 2 / 6, true]
    ],
    [
        [500, 100, 250, 0],
        [3, 2 / 3, 3 / 6, false]
    ],
    [
        [500, 100, 250, 50],
        [3, 1 / 3, 4 / 6, true]
    ]
];

let lakeUpgradeList = [
    /*
    [
        COST
        [SEDIMENT, MINERAL, GOLD, ELECTRICITY],
        GIVES
        [SEDIMENT COST REDUCTION, CONVERSION TIMER MOD, BONUS CLOUDS]
    ]
    */
    [
        [750, 0, 0, 0],
        [1, 1, 0]
    ],
    [
        [800, 0, 0, 0],
        [1, 1, 0]
    ],
    [
        [850, 0, 0, 0],
        [0, .75, 0]
    ],
    [
        [900, 0, 0, 0],
        [1, 1, 0]
    ],
    [
        [950, 1, 0, 0],
        [1, .75, 0]
    ],
    [
        [1000, 2, 0, 0],
        [1, 1, 1]
    ],
    [
        [1075, 3, 0, 0],
        [1, 1, 0]
    ],
    [
        [1150, 4, 0, 0],
        [0, .75, 0]
    ],
    [
        [1225, 5, 0, 0],
        [1, 1, 0]
    ],
    [
        [1300, 6, 0, 0],
        [0, .75, 0]
    ],
    [
        [1400, 7, 0, 0],
        [1, 1, 0]
    ],
    [
        [1500, 8, 0, 0],
        [1, .75, 0]
    ],
    [
        [1500, 9, 0, 0],
        [0, .75, 0]
    ],
    [
        [1500, 10, 0, 0],
        [1, .75, 1]
    ],
    [
        [1500, 11, 0, 0],
        [1, 1, 0]
    ],
    [
        [1500, 12, 0, 0],
        [0, 1, 0]
    ],
    [
        [1500, 13, 0, 0],
        [1, 1, 0]
    ],
    [
        [1500, 14, 0, 0],
        [0, .75, 0]
    ],
    [
        [1500, 15, 0, 0],
        [1, 1, 0]
    ],
    [
        [1300, 16, 0, 0],
        [0, .75, 0]
    ],
    [
        [1400, 17, 0, 0],
        [1, 1, 0]
    ],
    [
        [1500, 18, 0, 0],
        [0, .75, 0]
    ],
    [
        [1500, 19, 0, 0],
        [0, .75, 0]
    ],
    [
        [1500, 20, 0, 0],
        [1, .75, 1]
    ]
];

let peopleBuildConditions = [
    [5, 2],
    [10, 3],
    [20, 5],
    [100, 10]
]