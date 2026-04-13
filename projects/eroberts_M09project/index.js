const eventEmitter = require('events');
const firEmitter = new eventEmitter();
const secEmitter = new eventEmitter();
const thiEmitter = new eventEmitter();

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// global variables
let fight = false;
let run = false;
let joke = false;
let cubed = null;

// first emitter: cube number processing
firEmitter.on('event', (root) => {
    if (isNaN(root)) {
        console.log('Please enter a valid number.');
    } else {
        let cubeRaw = root * root * root;
        cubed = cubeRaw.toFixed(2);
        console.log(`${root} cubed is ${cubed}.`)
        secEmitter.emit('event');
    }
});

// second emitter: story choices
secEmitter.on('event', () => {
    console.log('A funny looking goblin man jumps out of the bushes! He has a big hammer.');
    rl.question('Will you: 1. Fight! 2. Run! 3. Tell a joke! ', (ans) => {
        // user input processing
        if (ans === '1' || ans === '1. Fight!' || ans === 'Fight' || ans === 'fight') {
            fight = true; // state change
            console.log(`You chose Fight.`);
            console.log(`You bonk him on the head! The goblin squeaks and runs away crying. You monster!`);
            thiEmitter.emit('event');
        } else if (ans === '2' || ans === '2. Run!' || ans === 'Run' || ans === 'run') {
            run = true; // state change
            console.log(`You chose Run.`);
            console.log(`You hear distant goblin screeching as you run away. It seems like he wanted to tell you something.`);
            thiEmitter.emit('event');
        } else if (ans === '3' || ans === '3. Tell a joke!' || ans === 'Tell a joke' || ans === 'tell a joke') {
            joke = true; // state change
            console.log(`You chose to tell a joke.`);
            console.log(`The goblin drops his hammer and laughs so hard he falls over. He gives you a bunch of gold!`);
            thiEmitter.emit('event');
        } else {
            console.log(`${ans} is not a valid choice. Please choose one of the options.`);
        }
        rl.close();
    })
});

// third emitter: results
thiEmitter.on('event', () => {
    let random = Math.floor(Math.random() * Math.PI * cubed);
    if (fight === true) {
        console.log(`You dealt ${random} points of damage.`);
    } else if (run === true) {
        console.log(`You ran ${random} miles!`);
    } else if (joke === true) {
        console.log(`He gave you ${random} gold pieces.`);
    } else {
        console.log(`Error.`);
    }
});

// start program
firEmitter.emit('event', 67);