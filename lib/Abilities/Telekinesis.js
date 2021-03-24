const Ability = require('../Ability');

class Telekinesis extends Ability {
    constructor() {
        super();
        this.name = 'Telekinesis';
        this.description = "For when you want to push somebody  but you're too disgusted to touch them.";
        this.uses = "Calculate based on weight and distance. 1 Overall per 2kg/5lbs 1 Overall per 1m/1yd";
        this.duration = 'Activated';
        this.cost = 'Varies';
        this.range = '100 ft LOS';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = Telekinesis;