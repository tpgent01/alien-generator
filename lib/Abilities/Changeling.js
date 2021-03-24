const Ability = require('../Ability');

class Changeling extends Ability {
    constructor() {
        super();
        this.name = 'Changeling';
        this.description = "The ability to shift your biological make up and transform into a different being, fundamentally. Very useful when you forget your fake ID at home and you really need to get past the security point.";
        this.uses = "Change your outword appearance into something of equal volume and mass. This is only the outword appearance of physical biology. You cannot mimic inanimate clothing, equuipment etc. You also cannot mimic the creature or characters voice, etc.";
        this.duration = 'Activated / ';
        this.cost = '2 Overall Per Minute';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = Changeling;