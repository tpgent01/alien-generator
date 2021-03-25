const Ability = require('../Ability');

class ElasticityIi extends Ability {
    constructor() {
        super();
        this.name = 'Elasticity II';
        this.description = "Your body is a wonderland, a parachute, a suitcase, a skip rope, a table for four, astounding…";
        this.uses = "Never thinner than 1 in (25mm). That being said, it's entire body could fit through a quarter sized whole. Grapple?";
        this.duration = 'Activated';
        this.cost = '10 Overall per manipulation (This includes the change back to original form).';
        this.range = 'Self';
        this.combat = '';
        this.points = '4';
        this.resist = '';
    }
}

module.exports = ElasticityIi;