const Ability = require('../Ability');

class Beauty extends Ability {
    constructor() {
        super();
        this.name = 'Beauty';
        this.description = "They say it's in the eye of the beholder, but… Wow!!";
        this.uses = "SWAG";
        this.duration = 'Passive';
        this.cost = '';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = Beauty;