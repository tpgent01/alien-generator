const Ability = require('../Ability');

class MindProbe extends Ability {
    constructor() {
        super();
        this.name = 'Mind Probe';
        this.description = "An investigator's favourite tool.";
        this.uses = "He knows who stole the data drive.";
        this.duration = 'Activated';
        this.cost = '5 per attempt';
        this.range = 'Touch';
        this.combat = '';
        this.points = '2';
        this.resist = 'ME Check';
    }
}

module.exports = MindProbe;