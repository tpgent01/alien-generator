const Ability = require('../Ability');

class Split extends Ability {
    constructor() {
        super();
        this.name = 'Split';
        this.description = "Your personality's fine, it's when there's literally two of you around that it becomes unbearable.";
        this.uses = "Base 2 would become 2 Base 1s Base 3 would become 2 Base 2s Each has 1/2 Maximum Overall If one dies, they are just reabsorbed by the other returning it to the original size";
        this.duration = 'Activated';
        this.cost = '10 Overall to Split / but nothing to reform';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = Split;