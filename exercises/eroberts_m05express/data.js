const items = [
    {
        id: 1,
        name: 'paper',
        common: 1,
        strength: 'rock',
        weakness: 'scissors',
        fingers: 5,
        elem: 'wood',
        desc: 'A flat material best used for wrapping opponents.',
    },
    {
        id: 2,
        name: 'rock',
        common: 1,
        strength: 'scissors',
        weakness: 'paper',
        fingers: 0,
        elem: 'earth',
        desc: 'A bulky object capable of crushing but not piercing.',
    },
    {
        id: 3,
        name: 'scissors',
        common: 1,
        strength: 'paper',
        weakness: 'rock',
        fingers: 2,
        elem: 'metal',
        desc: 'A very sharp tool capable of slicing fibers.',
    },
    {
        id: 4,
        name: 'cleaver',
        common: 2,
        strength: 'paper',
        weakness: 'rock',
        fingers: 4,
        elem: 'metal',
        desc: 'A heavy, bladed weapon meant for slicing.'
    }
]
module.exports = {items}