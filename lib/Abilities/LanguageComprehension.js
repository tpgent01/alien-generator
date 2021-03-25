const Ability = require('../Ability');

class LanguageComprehension extends Ability {
    constructor() {
        super();
        this.name = 'Language comprehension';
        this.description = "Sometimes you don't have enough pockets to keep  a universal translator on hand.";
        this.uses = "Communicate with any lifeform that communicates";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = LanguageComprehension;