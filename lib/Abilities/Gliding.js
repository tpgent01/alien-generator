const Ability = require('../Ability');

class Gliding extends Ability {
    constructor() {
        super();
        this.name = 'Gliding';
        this.description = "You are a leaf on the space wind!";
        this.uses = "You can glide! You can carry up to 2x your body weight.";
        this.duration = 'Passive';
        this.cost = 'No Cost';
        this.range = 'Self';
        this.combat = '';
        this.points = '1';
        this.resist = '';
    }
}

module.exports = Gliding;