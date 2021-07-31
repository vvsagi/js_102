// const rubiksCube = {
//     material: 'plastic',
//     isFun: true,
//     colors: ['red', 'blue', 'yellow', 'white', 'orange', 'green'],
//     sides: 6,
//     shape: 'cube',
//     isBiDirectional: true
// };

// // module.exports = rubiksCube;

// // in terminal, node
// // then const r = require('./objects.js');
// // r.material <<--prferred
// // r.['shape']
// // r.amount = 15 to add a property after defining the object
// // delete r.amount

// // Loops

// // While

// let n = 1

// while (n <= 10) {
//     console.log(n);
//     n = n + 1;
// }

// while (n <= 10) {
//     console.log(n);
//     n += 1;
// }

// while (n <= 10) {
//     console.log(n);
//     n++;
// }

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// };

// for(let i = 0; i <= 5; i++) {
//     console.log(r.colors[i]);
// };

// for(let i = 0; i <= r.colors.length; i++) {
//     console.log(r.colors[i]);
// };

function sayGreeting(name) {
    console.log(`Hello, ${name}!`);
};

// module.exports = sayGreeting;

function printRubicksCubeColors(name) {
    const rubiksCube = {
            material: 'plastic',
            isFun: true,
            colors: ['red', 'blue', 'yellow', 'white', 'orange', 'green'],
            sides: 6,
            shape: 'cube',
            isBiDirectional: true
        };

    for(let i = 0; i < rubiksCube.colors.length; i++) {
        if(rubiksCube.colors[i].length < 5) {
            console.log(rubiksCube.colors[i]);
        };
    };
};

module.exports = printRubicksCubeColors;