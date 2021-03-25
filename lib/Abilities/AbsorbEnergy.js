const Ability = require('../Ability');

class AbsorbEnergy extends Ability {
    constructor() {
        super();
        this.name = 'Absorb Energy';
        this.description = "You can literally suck someone dry, and not in the fun way.";
        this.uses = "Release to shock or power an item. Only shock through touch. 5 Overall Damage.";
        this.duration = 'Activated';
        this.cost = '5 Overall to absorb energy from an object. No cost to discharge.';
        this.range = 'Touch';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = AbsorbEnergy;