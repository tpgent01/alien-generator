const Ability = require('../Ability');

class Venom extends Ability {
    constructor() {
        super();
        this.name = 'Venom';
        this.description = `When you say "it's glandular" you mean something entirely different than most.`;
        this.uses = "Poison target with a successful melee attack making them -SDS to Attack and Defend";
        this.duration = 'Activated / Lasts 3 Action Rounds';
        this.cost = '3 AP / 4 hours to Regenerate';
        this.range = 'Melee';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = Venom;