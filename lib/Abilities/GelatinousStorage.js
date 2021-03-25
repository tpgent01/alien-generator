const Ability = require('../Ability');

class GelatinousStorage extends Ability {
    constructor() {
        super();
        this.name = 'Gelatinous Storage';
        this.description = "Most things go right through you, but you can hold on to some if you really focus.";
        this.uses = "Kinda like boofing, but automatic. The object must fit inside the character. Use common sense.";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = GelatinousStorage;