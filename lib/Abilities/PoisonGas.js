const Ability = require('../Ability');

class PoisonGas extends Ability {
    constructor() {
        super();
        this.name = 'Poison Gas';
        this.description = "Bonus damage if you're on a spicy food diet.";
        this.uses = "Poison all targets within melee range making them -SDS to Attack and Defend";
        this.duration = 'Activated / Lasts 3 Action Rounds';
        this.cost = '3 AP / 4 hours to Regenerate';
        this.range = 'Melee';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = PoisonGas;