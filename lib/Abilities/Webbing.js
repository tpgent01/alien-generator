const Ability = require('../Ability');

class Webbing extends Ability {
    constructor() {
        super();
        this.name = 'Webbing';
        this.description = "It's sticky and can come out of the darndest places.";
        this.uses = "Minor dstraction with no real use in combat, it would take too long to produce enough to entangle them. Produce 100 ft max stored ammount. Shoot 20ft strait up or 30 ft strait across";
        this.duration = 'Activated';
        this.cost = 'Regenerates 100ft worth every 24hours';
        this.range = 'see discription';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = Webbing;