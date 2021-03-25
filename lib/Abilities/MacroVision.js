const Ability = require('../Ability');

class MacroVision extends Ability {
    constructor() {
        super();
        this.name = 'Macro vision';
        this.description = "You can focus on the smallest details.  Not a big help with interpersonal relationships.";
        this.uses = "Can look at thing really realy closely";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = MacroVision;