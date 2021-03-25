const Ability = require('../Ability');

class Invisibility extends Ability {
    constructor() {
        super();
        this.name = 'Invisibility';
        this.description = "Where did you come from, where did you go? No, seriously.";
        this.uses = "Character Only, no clothing or equipment +2SDS to Defense in Melee Combat Cannot be targeted in Ranged Combat Spend 4AP and 5 OA per AR in melee combat to maintain Only Optical (Still seen by heatvision, still trigger alarms, etc) ";
        this.duration = 'Activated';
        this.cost = '10 per minute';
        this.range = 'Self';
        this.combat = '';
        this.points = '4';
        this.resist = '';
    }
}

module.exports = Invisibility;