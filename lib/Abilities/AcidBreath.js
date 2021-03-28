const Ability = require('../Ability');

class AcidBreath extends Ability {
    constructor() {
        super();
        this.name = 'Acid Breath';
        this.description = "Several steps up from Morning Breath.";
        this.uses = "In combat, the spittle causes 1 overall damage and is treated as a ranged weapon with a maximum range of melee distance. Out of comabt, the mist can incinerate documents or cloth. The spittle could eat through wood or similar items.";
        this.duration = 'In Combat, once per action round for 1 AP. / Out of Combat, Activated.';
        this.cost = 'None';
        this.range = '2 m/ 6 ft';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = AcidBreath;