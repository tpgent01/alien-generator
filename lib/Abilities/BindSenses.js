const Ability = require('../Ability');

class BindSenses extends Ability {
    constructor() {
        super();
        this.name = 'Bind Senses';
        this.description = "The ability to experience another's senses as if they were your own. This includes but is not limited to love, hate, hunger, thirst, pain, or diarrhea.";
        this.uses = "Takes 3 minutes of physical contact to complete the process. The character appears unconcious while bound to the target. The character can unlink at any time, but cannot relink unless restarting the entire process. The character is completely exposed and does not roll to defend attacks. If something harms the binded sunjectthe character will take OVERALL damage. If the binded subject is killed, the character goes to 0 overall and is imediately incapacitated.";
        this.duration = 'Activated';
        this.cost = '1 Overall Per Minute';
        this.range = 'Touch';
        this.combat = '';
        this.points = '2';
        this.resist = 'ME Check';
    }
}

module.exports = BindSenses;