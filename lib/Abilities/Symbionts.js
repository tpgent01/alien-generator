const Ability = require('../Ability');

class Symbionts extends Ability {
    constructor() {
        super();
        this.name = 'Symbionts';
        this.description = "Go forth, my darlings! Spread my word to the unsuspecting masses!";
        this.uses = "Create 6 Base0 creatures (Rat size) with doglike intelligence. Go fetch etc. Upon reabsorbtion you gain their memories of their experiences. You give them instructions, but they are NPCs controlled by the GM. If one dies it takes 24 hours to replace. Example: Can still summon the other 5 for 10 Overall";
        this.duration = 'Activated';
        this.cost = '10 Overall';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = Symbionts;