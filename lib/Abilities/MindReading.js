const Ability = require('../Ability');

class MindReading extends Ability {
    constructor() {
        super();
        this.name = 'Mind Reading';
        this.description = "Forget digging for clues, you can literally read minds!";
        this.uses = "He knows that Tim stole the Data drive by kicking the guard in the balls and grabbing it off the desk and running to Arbys.";
        this.duration = 'Activated';
        this.cost = '10 per attempt';
        this.range = 'Touch';
        this.combat = '';
        this.points = '3';
        this.resist = 'ME Check';
    }
}

module.exports = MindReading;