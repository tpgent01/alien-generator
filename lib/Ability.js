class Ability {
    constructor(
        name = ``,
        description = ``,
        uses = ``,
        duration = ``,
        range = ``,
        combat = ``,
        cost = ``,
        points = ``,
        resist = ``
    ) {
        this.name = name;
        this.description = description;
        this.uses = uses;
        this.duration = duration;
        this.range = range;
        this.combat = combat;
        this.cost = cost;
        this.points = points;
        this.resist = resist;
    };
};

module.exports = Ability;