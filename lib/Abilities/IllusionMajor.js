const Ability = require('../Ability');

class IllusionMajor extends Ability {
    constructor() {
        super();
        this.name = 'Illusion (Major)';
        this.description = "Your prowess is legendary, it's a wonder people believe anything you show them if they can't touch it.";
        this.uses = "Objects 50ft x 50ft or smaller";
        this.duration = 'Activated';
        this.cost = '10 per minute';
        this.range = '100 ft LOS';
        this.combat = '';
        this.points = '4';
        this.resist = '';
    }
}

module.exports = IllusionMajor;