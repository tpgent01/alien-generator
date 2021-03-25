const Ability = require('../Ability');

class Mezmerize extends Ability {
    constructor() {
        super();
        this.name = 'Mezmerize ';
        this.description = "Enthrall another being and put it in a trance-like state. Remember that local laws may apply to whatever you choose to do next.";
        this.uses = "Visual, auditory, or odorous method of relaxing an opponent. ";
        this.duration = 'Activated';
        this.cost = '5 Overall per target';
        this.range = '3 Feet';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = Mezmerize;