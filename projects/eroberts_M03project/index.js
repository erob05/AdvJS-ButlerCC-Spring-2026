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

let weapon = "";
let world = "";

const lastTwo = args.slice(-2).join(" ").toLowerCase();
if (lastTwo === "death note") {
    weapon = "Death Note";
    world = args.slice(0, -2).join(" ");
} else {
    weapon = args[args.length - 1];
    world = args.slice(0, -1).join(" ");
}


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
    story += "Gandalf joins you as you battle an army of the Sith! You saved the Shire!";
} else if (worldLower === "the shire" && weaponLower === "death note") {
    story+= "Frodo looks nervous as you write names in the Death Note! You realize you don't know Sauron's last name. The Shire is lost to the dark forces...";
} else if (worldLower === "hogwarts" && weaponLower === "lightsaber") {
    story += "Dumbledore trains you in magical wizard lightsaber combat! It's not enough as Voldemort just Avada Kedavra's you. Hogwarts is lost to the dark forces...";
} else if (worldLower === "hogwarts" && weaponLower === "death note") {
    story += "Everyone is terrified by your notebook of doom. You write Voldemort's name swiftly putting an end to the war. You saved Hogwarts!"
}

const outputFile = "adventure.result.txt";
fs.writeFile(outputFile, story, err => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log(`\nYour adventure has been saved to '${outputFile}'!`);

    const message = fs.readFileSync(outputFile, 'utf8');
    console.log(message);
});