const Ability = require('../Ability');

class SizeControl extends Ability {
    constructor() {
        super();
        this.name = 'Size Control';
        this.description = "There are easier way to do this than going on a diet.";
        this.uses = "Your character can change between 2 static adjacent base sizes";
        this.duration = 'Activated';
        this.cost = '25 Overall';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = SizeControl;