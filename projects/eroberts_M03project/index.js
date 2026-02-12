"use strict"
const fs = require('fs');

const args = process.argv.slice(2);

function intro() {
    console.log("The multiverse is in great danger.");
    console.log("Choose a region to save and your weapon.");
    console.log("Parameters:");
    console.log(" <world> - Your first choice: 'The Shire' or 'Hogwarts'.");
    console.log(" <weapon> - Your second choice: 'Lightsaber' or 'Death Note'.");
}

// Quick check
if (args.length < 2 ) {
    console.log("Error: Invalid number of parameters.");
    intro();
    process.exit(1);
}

const world = args.slice(0, args.length - 1).join(" ");
const weapon = args[args.length - 1];

// Input check
const worldLower = world.toLowerCase();
const weaponLower = weapon.toLowerCase();

const validWorlds = ["the shire", "hogwarts"];
const validWeapons = ["lightsaber", "death note"];

if (!validWorlds.includes(worldLower)) {
    console.log(`Error: Invalid world '${world}'.\n`);
    intro();
    process.exit(1);
}

if (!validWeapons.includes(weaponLower)) {
    console.log(`Error: Invalid weapon '${weapon}'.\n`);
    intro();
    process.exit(1);
}

// Logic
let story = `You blast through a portal sending you to ${world} wielding your ${weapon}. \n`;

if (worldLower === "the shire" && weaponLower === "lightsaber") {
    story += "Gandalf joins you as you battle an army of the Sith!"
} else if (worldLower === "the shire" && weaponLower === "death note") {
    story+= "Frodo looks nervous as you write names in the Death Note!"
}