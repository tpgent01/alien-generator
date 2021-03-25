const Ability = require('../Ability');

class NaturalWeaponry extends Ability {
    constructor() {
        super();
        this.name = 'Natural Weaponry ';
        this.description = "No wonder you're a natural-born killer, just look at that tail!";
        this.uses = "Does 2 Damage per Ability Point Spent";
        this.duration = 'Passive / Is not affected by durrability.';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = 'Varies';
        this.resist = '';
    }
}

module.exports = NaturalWeaponry;