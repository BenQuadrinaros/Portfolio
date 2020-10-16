/*
Ben Rowland
ClickErosion
DATE

This is a clicker game about the incremental process 
of erosion via water. It was inspired by a roadtrip
across the Southwest of the United States and seeing how 
waterways transformed the landscape, especially the Rio
Grande River.

The plant featured in this game is Sentry Milk-Vetch,
a small, endangered perennial herb. This 'Gorge Watchman'
is endemic to the Grand Canyon region. Learn more at
https://www.nps.gov/grca/learn/nature/astragalus.htm.

Ecological advisement provided by Vanessa Morales,
Ecology and Evolutionary Biology student at UC Santa Cruz.

Programming, art, and music by Ben Rowland, Computer
Science: Game Design student at UC Santa Cruz. See more
of his work at https://ben-quadrinaros.itch.io/.
*/

let config = {
    type: Phaser.CANVAS,
    width: 1200,
    height: 700,

    scene: [Play]

};

let game = new Phaser.Game(config);

//reserve some keyboard variables
let keyZERO, keyONE, keyTWO, keyTHREE, keyFOUR, keyFIVE, keySIX, keySEVEN, keyEIGHT, keyNINE;