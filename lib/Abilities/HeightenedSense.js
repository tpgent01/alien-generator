const Ability = require('../Ability');

class HeightenedSense extends Ability {
    constructor() {
        super();
        this.name = 'Heightened Sense';
        this.description = "We don't call you (organ)-(organ-appropriate-epithet) for nothing.";
        this.uses = "Smell - Like a bloodhound Sight - Like Binoculars Hearing - Hear a whisper from 100m/300ft Taste - Pick out ingrediants, poisons, etc. Touch - Sense ground vibrations (X many people are coming), Bonuses to lock picking etc.";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = HeightenedSense;