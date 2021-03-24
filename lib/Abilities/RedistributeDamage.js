const Ability = require('../Ability');

class RedistributeDamage extends Ability {
    constructor() {
        super();
        this.name = 'Redistribute Damage';
        this.description = "It won't regrow your foot, but it'll stop the bleeding.";
        this.uses = "Example: Take HP from your leg and give it to your head.";
        this.duration = 'Activated';
        this.cost = 'No Cost Out of Combat / 2 Overall per HP durring combat.';
        this.range = 'Self';
        this.combat = '';
        this.points = '2';
        this.resist = '';
    }
}

module.exports = RedistributeDamage;