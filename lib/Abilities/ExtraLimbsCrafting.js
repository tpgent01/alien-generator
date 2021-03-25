const Ability = require('../Ability');

class ExtraLimbsCrafting extends Ability {
    constructor() {
        super();
        this.name = 'Extra Limbs (Crafting)';
        this.description = "You've been known to use your extra set of arms for something other than just flexing, like most creatures.";
        this.uses = "Your extra limbs give you an advantage in crafting. They move and act as if they each a mind of their own.";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = ExtraLimbsCrafting;