const Ability = require('../Ability');

class Fortitude extends Ability {
    constructor() {
        super();
        this.name = 'Fortitude';
        this.description = "Hardiness is the path to being a hard-ass, and you're well on your way to hitting the peak.";
        this.uses = "WILL";
        this.duration = 'Passive';
        this.cost = '';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = Fortitude;