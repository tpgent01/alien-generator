const Ability = require('../Ability');

class IllusionMinor extends Ability {
    constructor() {
        super();
        this.name = 'Illusion (Minor)';
        this.description = "With a sleight of hand and clever use of light, you can conjure something out of nothing.";
        this.uses = "Objects 1 ft x 1 ft or smaller";
        this.duration = 'Activated';
        this.cost = '5 per minute';
        this.range = '50 ft LOS';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = IllusionMinor;