const Ability = require('../Ability');

class HighSpeedRunning extends Ability {
    constructor() {
        super();
        this.name = 'High Speed Running';
        this.description = "It doesn't completely replace motorised transports, but it works for rush hour.";
        this.uses = "Run 3x normal Speed Move Combat distances in 1/2 the time.";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = HighSpeedRunning;