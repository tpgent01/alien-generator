const Ability = require('../Ability');

class DuplicationI extends Ability {
    constructor() {
        super();
        this.name = 'Duplication I';
        this.description = "Ever needed to check your haircut and couldn't find a mirror?";
        this.uses = "Static clone. Will just causually stand around and cannot communicate. No Tasks. No Combat.";
        this.duration = 'Activated';
        this.cost = '50% of Max Overall / 1 Overall per minute to both. / Damage inflicted is applied to both.';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = DuplicationI;