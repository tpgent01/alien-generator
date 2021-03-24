const Ability = require('../Ability');

class NaturalResistance extends Ability {
    constructor() {
        super();
        this.name = 'Natural Resistance ';
        this.description = "Playing with fire as a kid eventually renders you immune to it.";
        this.uses = "1/2 damage from a specific damage type. Calculated AFTER AV is taken into account.";
        this.duration = 'Passive';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = NaturalResistance;