const Ability = require('../Ability');

class ExtraLimbsCombat extends Ability {
    constructor() {
        super();
        this.name = 'Extra Limbs (Combat)';
        this.description = "A step up from assembling weaponry, now you can quad wield said weaponry.";
        this.uses = "Gain an Extra 2 Action Points (Only usable for melee attacks) per Action Round";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '4';
        this.resist = '';
    }
}

module.exports = ExtraLimbsCombat;