const Ability = require('../Ability');

class NaturalArmorAdaptive extends Ability {
    constructor() {
        super();
        this.name = 'Natural Armor - Adaptive';
        this.description = "Your hide, or equivalent material thereof, is a tough nut to crack.";
        this.uses = "The character can boost it's armor value in one location at the cost of it's overall. Character may activate or change locations durring combat, but must repay the Overall cost  and surrender it's action round each time.";
        this.duration = 'Activated / Lasts 15 Min';
        this.cost = '1 Action Round / 10 Overall for the first AR point and 3 Overall for each additional.';
        this.range = 'Self';
        this.combat = '';
        this.points = '3';
        this.resist = '';
    }
}

module.exports = NaturalArmorAdaptive;