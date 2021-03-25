const Ability = require('../Ability');

class AcidBlood extends Ability {
    constructor() {
        super();
        this.name = 'Acid Blood';
        this.description = "Just like that movie series we all love, but without the extra mouth inside your main mouth.";
        this.uses = " In combat, do 6 random location damage to the attacker if any of your body locations are depleted. If the attacker is armored, take away 4 armor durability instead.  Out of combat, the creature my cut itself to have access to its acid blood and use it at the GM's discretion. For example: maybe eat through 1/4 inch steel.";
        this.duration = 'Passive.';
        this.cost = 'None';
        this.range = 'Physical Contact';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = AcidBlood;