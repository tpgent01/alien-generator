const Ability = require('../Ability');

class AlienIntelligence extends Ability {
    constructor() {
        super();
        this.name = 'Alien Intelligence';
        this.description = "Well, we're all aliens here, but your smarts are just out of this world!";
        this.uses = "CUNN";
        this.duration = 'Passive';
        this.cost = '';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = AlienIntelligence;