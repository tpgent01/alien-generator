const Ability = require('../Ability');

class AcceleratedEvolution extends Ability {
    constructor() {
        super();
        this.name = 'Accelerated Evolution';
        this.description = "Forget about diving masks, atmo-filters, or protective suits - whatever the verse can throw at you, there's good chance your body can take it. Unless it's copious amounts of bullets.";
        this.uses = "In combat, no meaningful effects. Out of combat, this ability is used at the GM's discretion. It is not meant to make the creature invulnrable. ";
        this.duration = 'Passive.';
        this.cost = '10 Overall to adapt. No cost to maintain.';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = AcceleratedEvolution;