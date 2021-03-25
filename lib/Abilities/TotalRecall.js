const Ability = require('../Ability');

class TotalRecall extends Ability {
    constructor() {
        super();
        this.name = 'Total Recall';
        this.description = "You literally cannot forget a single thing,  which is probably why nobody likes you. Smartass.";
        this.uses = "Eidetic Memory";
        this.duration = 'Passive';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = TotalRecall;