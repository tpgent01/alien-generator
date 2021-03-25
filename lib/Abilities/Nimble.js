const Ability = require('../Ability');

class Nimble extends Ability {
    constructor() {
        super();
        this.name = 'Nimble';
        this.description = "As slippery as a junk ferret and twice as ratty.";
        this.uses = "DEFT";
        this.duration = 'Passive';
        this.cost = '';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = Nimble;