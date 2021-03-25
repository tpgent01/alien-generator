const Ability = require('../Ability');

class Empathy extends Ability {
    constructor() {
        super();
        this.name = 'Empathy';
        this.description = "An overrated feeling, but useful in the right circumstances.";
        this.uses = `Can feel the targets emotional and physical state as if it were their own. Ability to tell if the target is nervous, sad, happy, excited, apathetic, etc. "He is really nervous… and there appears to be something in his ass… it hurts pretty bad…"`;
        this.duration = 'Activated';
        this.cost = '10 Overall per execution';
        this.range = 'Touch';
        this.combat = '';
        this.points = '2';
        this.resist = 'ME Check';
    }
}

module.exports = Empathy;