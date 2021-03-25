const Ability = require('../Ability');

class Regeneration extends Ability {
    constructor() {
        super();
        this.name = 'Regeneration';
        this.description = "If a leg's slowing you down, you can always cut your losses.";
        this.uses = "Only affects upper and lower appendages as well as tails. This process takes 4 hours per point. 48 hours to regenerate an entire limb. Natural Overall recovery is also 2x as fast.";
        this.duration = 'Passive.';
        this.cost = 'No Cost / Can double Limb Regeneration speed at the cost of 1/2 Maximum Overall.';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = Regeneration;