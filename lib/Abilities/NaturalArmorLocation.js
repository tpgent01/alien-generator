const Ability = require('../Ability');

class NaturalArmorLocation extends Ability {
    constructor() {
        super();
        this.name = 'Natural Armor - Location';
        this.description = "It's not that you're hard of hearing, it's all those extra scales covering your head.";
        this.uses = "Location Cost Head - 1 AV per Ability Point Chest and Mid-Section - 2 AV per Ability Point All Appendages -1 AV per Ability Point ";
        this.duration = 'Passive / Is not affected by durrability.';
        this.cost = 'None';
        this.range = 'Self';
        this.combat = '';
        this.points = 'Varies';
        this.resist = '';
    }
}

module.exports = NaturalArmorLocation;