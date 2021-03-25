const Ability = require('../Ability');

class HighJumping extends Ability {
    constructor() {
        super();
        this.name = 'High Jumping';
        this.description = "You can clear reasonably high-stacked garbage bins in a single leap!";
        this.uses = "Jump 3x normal height";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = HighJumping;