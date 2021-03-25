const Ability = require('../Ability');

class ThermalVision extends Ability {
    constructor() {
        super();
        this.name = 'Thermal Vision';
        this.description = "Always handy when hunting for gasbags in the deep, dark void.";
        this.uses = "Vision based on heat signatures";
        this.duration = 'Passive';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = ThermalVision;