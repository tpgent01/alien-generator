const Ability = require('../Ability');

class DuplicationIi extends Ability {
    constructor() {
        super();
        this.name = 'Duplication II';
        this.description = "Ever needed to do the dishes and didn't feel like it?";
        this.uses = "Can do meanial tasks. Make coffee, assist in a lab, move a desk. No Combat";
        this.duration = 'Activated';
        this.cost = '50% of Max Overall / 1 Overall per minute to both. / Damage inflicted is applied to both.';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = DuplicationIi;