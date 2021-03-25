const Ability = require('../Ability');

class SixthSense extends Ability {
    constructor() {
        super();
        this.name = 'Sixth Sense';
        this.description = "You can see things before they happen. Which is why you got a pre-emptive divorce.";
        this.uses = "INST";
        this.duration = 'Passive';
        this.cost = '';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = SixthSense;