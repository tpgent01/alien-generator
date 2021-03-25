const Ability = require('../Ability');

class SelfContainedBioFunctions extends Ability {
    constructor() {
        super();
        this.name = 'Self-Contained Bio Functions';
        this.description = "You can save a lot of bitcoin on not needing  caloric intake, ever.";
        this.uses = "Could exist in the vacume of space eternally";
        this.duration = 'Passive';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = SelfContainedBioFunctions;