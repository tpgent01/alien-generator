const Ability = require('../Ability');

class Might extends Ability {
    constructor() {
        super();
        this.name = 'Might';
        this.description = "Your splendid strength gives you the upper hand(s) in most physical confrontations.";
        this.uses = "PHYS";
        this.duration = 'Passive';
        this.cost = '';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = Might;