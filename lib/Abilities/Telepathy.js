const Ability = require('../Ability');

class Telepathy extends Ability {
    constructor() {
        super();
        this.name = 'Telepathy';
        this.description = "You can mindfuck others, literally.";
        this.uses = "Have a mental conversation with another being. Must share a language. Must be a willing participant (Cost doubles if not)";
        this.duration = 'Activated / 5 minute Conversation.';
        this.cost = '10 Overall';
        this.range = '100 ft LOS';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = Telepathy;