class Lifeform {
    constructor(
        name = ``,
        backstory = ``,
        locamotion  = ``,
        upperAppendageType = ``,
        neck = ``,
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
        this.backstory = backstory;
        this.locamotion  = locamotion;
        this.upperAppendageType = upperAppendageType;
        this.neck = neck;
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