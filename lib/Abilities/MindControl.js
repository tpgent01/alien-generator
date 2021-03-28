const Ability = require('../Ability');

class MindControl extends Ability {
    constructor() {
        super();
        this.name = 'Mind Control';
        this.description = "A mind is a terrible thing to waste, why don't you show them how it's done, mostly against their own will?";
        this.uses = "Make something do what you tell it to do. No slef harm. Attack commands last one action round. Commands cannot take longer than 1 minute to complete";
        this.duration = 'Activated';
        this.cost = '20 per command';
        this.range = '10 ft LOS';
        this.combat = '';
        this.points = '4';
        this.resist = 'ME Check';
    }
}

module.exports = MindControl;