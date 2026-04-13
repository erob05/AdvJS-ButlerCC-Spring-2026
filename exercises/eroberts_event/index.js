//eroberts
const eventEmitter = require('events');
const customEmitter = new eventEmitter();
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

customEmitter.on('mess', (radius) => {
    if (isNaN(radius)) {
        console.log('Sorry, couldn\'t figure out the circumference. Please enter a real number next time.');
    } else {
    let circRaw = 2 * Math.PI * radius;
    let circ = circRaw.toFixed(2);
    console.log(`The circumference is ${circ} units.`);
}
});

customEmitter.on('mess', () => {
    // console.log('Data received.');
    rl.question('What?', (ans) => {
        console.log('Data received.');
        console.log(`Your answer is ${ans}.`);
        rl.close();
    })
});

customEmitter.emit('mess', 27);