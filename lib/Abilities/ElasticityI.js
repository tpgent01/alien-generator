const Ability = require('../Ability');

class ElasticityI extends Ability {
    constructor() {
        super();
        this.name = 'Elasticity I';
        this.description = "You can reach the cockpit commands while working on the aft cargo bay. That doesn't mean you're even remotely competent at flying the damn thing.";
        this.uses = "Only affects Limbs Grapple?";
        this.duration = 'Activated';
        this.cost = '2 overall per meter';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = ElasticityI;