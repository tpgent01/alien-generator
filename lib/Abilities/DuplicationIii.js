const Ability = require('../Ability');

class DuplicationIii extends Ability {
    constructor() {
        super();
        this.name = 'Duplication III';
        this.description = "Ever needed to kick yourself in the ass and couldn't bend that way?";
        this.uses = "Complete control and shared conciousness. No Combat";
        this.duration = 'Activated';
        this.cost = '50% of Max Overall / 1 Overall per minute to both. / Damage inflicted is applied to both.';
        this.range = 'Self';
        this.combat = '';
        this.points = '4';
        this.resist = '';
    }
}

module.exports = DuplicationIii;