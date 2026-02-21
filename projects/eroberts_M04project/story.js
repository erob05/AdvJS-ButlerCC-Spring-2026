const _ = require('lodash');
const dayjs = require('dayjs');

const generate = (choices) => {
    const [char, wep, comp] = choices;
    const timestamp = dayjs().format('MMMM D, YYYY h:mm A');

    let story = '';
    let image = '';

    if (char === 'Link' && wep === 'Sword' && comp === 'Companion Cube') {
        story = 'Link swung his sword valiantly as the companion cube silently hummed. You saved the realm!';
        image = 'https://static.wikia.nocookie.net/characterprofile/images/a/a1/LinkZelda.png';
    } else if (char === 'Mario' && wep === 'Fireball' && comp === 'Luigi') {
        story = 'Mario spammed Fireballs everywhere while Luigi sucked up enemies in his ghost vacuum. You saved the realm!';
        image = 'https://static.wikia.nocookie.net/mario/images/2/24/Fire_Mario_SM3DW.png';
    } else if (char === 'Kirby' && wep === 'Crowbar' && comp === 'Gordon Freeman') {
        story = 'Kirby inhaled Gordon Freeman, stealing his genius intelligence. He wields his mighty crowbar against the fierce zombie hordes. You saved the realm!';
        image = 'https://preview.redd.it/choose-this-your-kirby-v0-m1vmipzas3kg1.png?width=640&crop=smart&auto=webp&s=057842cfc1257bd9bd7641dceb9982d0e18690b3';
    } else {
        const fallbacks = [
            `${char} wielded their ${wep} against the horde. But... it wasn't enough. ${comp} was the first to go. The realm is lost.`,
            `${char} tried their best with a ${wep} but ${comp} abandoned them in the heat of battle. Tragic.`,
            `${comp} betrayed ${char} at the worst possible moment. The ${wep} was no match alone. The realm is lost.`,
        ];
        story = _.sample(fallbacks)
        image = 'https://media.tenor.com/HgfzKvP9OeAAAAAM/loser-you-lose.gif';
    }

    return {
        story,
        image,
        timestamp: `Story generated on ${timestamp}`
    };
};

module.exports = {generate};