function spellCast(spell) {
    switch (spell) {
        case "fireball":
            console.log("Casted fireball! Boooom! Huge explosion!");
            console.log("You saved Midgar!")
            break;
        
        case "heal":
            console.log("Casted heal. You're feeling those healing energies!");
            console.log("You saved the Mushroom Kingdom!");
            break;

        case "spark":
            console.log("Casted sparks! Zzzzzap!");
            console.log("You saved Hyrule!");
            break;
        
        default:
            console.log("The spell backfired. You suck.");
            console.log("You saved Mordor!");
            break;
    }
}

module.exports = spellCast;