function runMagicalScan(state) {
    const regions = ['Mordor', 'Sword Coast', 'Mushroom Kingdom', 'Midgar', 'Hyrule'];

    for (let i=0; i < regions.length; i++) {
        const safety = state === "safe" ? "Safe and secure." : "Danger, invasion!";
        console.log(`${regions[i]} status: ${safety}`)
    }
}

module.exports = runMagicalScan;