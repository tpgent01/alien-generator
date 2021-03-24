const Ability = require('../Ability');

class Cling extends Ability {
    constructor() {
        super();
        this.name = 'Cling';
        this.description = "Creatures who possess this ability are able to easily travel along walls, across ceilings, and basically  defy any manner of gravity they may come across.";
        this.uses = "Creature can carry it's own weight plus a reasonable amount of gear and equipment. Hands/Tenticles/Apendages must be bare.";
        this.duration = 'Passive';
        this.cost = 'None';
        this.range = 'Physical Contact';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = Cling;