const Ability = require('../Ability');

class PhaseShifting extends Ability {
    constructor() {
        super();
        this.name = 'Phase Shifting';
        this.description = "You're a slippery sod, but unlike a regular crook, your escaping act is literally out of this world!";
        this.uses = "You can not phase back into any solid objects. Example: Can not reach into a drawer or lockbox to pull an  item out. Can not phse into a creatures chest to cause damage. GM Note: There are materials that have been created to prevent phasing through them.";
        this.duration = 'Activated. / 5 Secs';
        this.cost = '20 Overall';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = PhaseShifting;