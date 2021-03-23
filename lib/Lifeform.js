class Lifeform {
    constructor(
        name = ``,
        backstory = ``,
        locamotion  = ``,
        // overallProportions = ``,
        // headSize = ``,
        forearmSize = ``,
        calveSize = ``,
        feetSize = ``,
        handSize = ``,
        upperAppendageType = ``,
        // upperAppendageNumber = ``,
        neck = ``,
        head = ``,
        facialFeatures = ``,
        // facialFeatureSize = ``,
        mouth = ``,
        // mouthSize = ``,
        eyes = ``,
        // eyeSize = ``,
        nose = ``,
        // noseSize = ``,
        ears = ``,
        // earSize = ``,
        skin = ``,
        // color = ``,
        otherFeatures = ``,
    ) {
        this.name = name;
        this.backstory = backstory;
        this.locamotion  = locamotion ;
        // this.overallProportions = overallProportions;
        // this.headSize = headSize;
        this.forearmSize = forearmSize;
        this.calveSize = calveSize;
        this.feetSize = feetSize;
        this.handSize = handSize;
        this.upperAppendageType = upperAppendageType;
        // this.upperAppendageNumber = upperAppendageNumber;
        this.neck = neck;
        this.head = head;
        this.facialFeatures = facialFeatures;
        // this.facialFeatureSize = facialFeatureSize;
        this.mouth = mouth;
        // this.mouthSize = mouthSize;
        this.eyes = eyes;
        // this.eyeSize = eyeSize;
        this.nose = nose;
        // this.noseSize = noseSize;
        this.ears = ears;
        // this.earSize = earSize;
        this.skin = skin;
        // this.color = color;
        this.otherFeatures = otherFeatures;
    };
};

module.exports = Lifeform;