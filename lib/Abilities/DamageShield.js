const Ability = require('../Ability');

class DamageShield extends Ability {
    constructor() {
        super();
        this.name = 'Damage Shield';
        this.description = "You've been around enough to know that you need to pass through their carapace to get to the soft shit that bleeds. This is how you do it.";
        this.uses = "2 Location Damage to unarmed melee attacker's location. Grapple Rules Extra Crush Damage Liberate Bonuses";
        this.duration = 'Passive';
        this.cost = 'None';
        this.range = 'Physical Contact';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = DamageShield;