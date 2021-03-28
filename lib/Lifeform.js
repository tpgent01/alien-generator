class Lifeform {
    constructor(
        name = ``,
        disposition = ``,
        birth = ``,
        reason = ``,
        backstory = ``,
        locomotion  = ``,
        upperAppendageType = ``,
        head = ``,
        facialFeatures = ``,
        mouth = ``,
        eyes = ``,
        nose = ``,
        ears = ``,
        skin = ``,
        otherFeatures = ``,
        physicalDescription = ``,
        abilities = []
    ) {
        this.name = name;
        this.disposition = disposition,
        this.birth = birth,
        this.reason = reason,
        this.backstory = backstory;
        this.locomotion  = locomotion;
        this.upperAppendageType = upperAppendageType;
        this.head = head;
        this.facialFeatures = facialFeatures;
        this.mouth = mouth;
        this.eyes = eyes;
        this.nose = nose;
        this.ears = ears;
        this.skin = skin;
        this.otherFeatures = otherFeatures;
        this.physicalDescription = physicalDescription;
        this.abilities = abilities;
    };
};

module.exports = Lifeform;