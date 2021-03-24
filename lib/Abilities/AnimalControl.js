const Ability = require('../Ability');

class AnimalControl extends Ability {
    constructor() {
        super();
        this.name = 'Animal Control';
        this.description = "They won't even know what bit them…";
        this.uses = "Nothing Larger or more intelligent than a medium sized dog. The character is completely exposed and does not roll to defend attacks. If something harms the animal the character will take OVERALL damage. If the animal is killed, the character goes to 0 overall and is imediately incapacitated.";
        this.duration = 'Activated';
        this.cost = '1 Overall Per Minute';
        this.range = 'Line of Sight';
        this.combat = '';
        this.points = '2';
        this.resist = 'ME Check';
    }
}

module.exports = AnimalControl;