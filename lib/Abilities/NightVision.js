const Ability = require('../Ability');

class NightVision extends Ability {
    constructor() {
        super();
        this.name = 'Night Vision';
        this.description = "Just don't forget to adapt your pupils back to daylight. People have gone blind over that.";
        this.uses = "See in the dark bitch!";
        this.duration = 'Passive';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = NightVision;