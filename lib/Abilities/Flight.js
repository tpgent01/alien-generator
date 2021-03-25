const Ability = require('../Ability');

class Flight extends Ability {
    constructor() {
        super();
        this.name = 'Flight';
        this.description = "Many creatures have vestigial wings or the ability to hover. This gives your character the ability to fly, baby!";
        this.uses = "You can fly! You can carry up to 2x your body weight.";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '4';
        this.resist = '';
    }
}

module.exports = Flight;