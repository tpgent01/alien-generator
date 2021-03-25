const Ability = require('../Ability');

class Chameleon extends Ability {
    constructor() {
        super();
        this.name = 'Chameleon';
        this.description = "Nobody really knows where the term comes from, but that won't stop you from being one and just… blending in.";
        this.uses = "Impossible to detect from extended range, adds 3 to stealth checks at ranged and +2 to stealth checks at melee.";
        this.duration = 'Activated';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = Chameleon;