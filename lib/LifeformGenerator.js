
const Lifeform = require('./Lifeform')
const { Random } = require('random-js');
const random = new Random();


class LifeformGenerator {
    constructor (lifeform = new Lifeform) {
        this.lifeform = lifeform;
    }

    initializeLifeformGenerator() {
        // set character race
        this.lifeform.name = `Charlie`;
        this.lifeform.backstory = `A sad tale about a happy alien`
        this.lifeform.locamotion = this.generateLocomotion();
        // this.lifeform.overallProportions = this.generateOverallProportions();
        // this.lifeform.headSize = this.generateSize();
        // this.lifeform.forearmSize = this.generateSize();
        // this.lifeform.calveSize = this.generateSize();
        // this.lifeform.feetSize = this.generateSize();
        // this.lifeform.handSize = this.generateSize();
        this.lifeform.upperAppendageType = this.generateUpperAppendageType();
        // this.lifeform.upperAppendageNumber = this.generateUpperAppendageNumber();
        this.lifeform.neck = this.generateNeck();
        this.lifeform.head = this.generateHead();
        this.lifeform.facialFeatures = this.generateFacialFeatures();
        this.lifeform.eyes = this.generateEyes();
        this.lifeform.mouth = this.generateMouth();
        this.lifeform.nose = this.generateNose();
        this.lifeform.ears = this.generateEars();
        this.lifeform.skin = this.gernerateSkin();
        this.lifeform.otherFeatures = this.generateFeatures();

        console.log(this.lifeform)

        console.log(`${this.lifeform.name} is a ${this.lifeform.locamotion} that ${this.generateUpperMadLib()} using it's ${this.lifeform.upperAppendageType}. ${this.lifeform.name}${this.lifeform.head} ${this.lifeform.facialFeatures}. ${this.generateFaceMadLib()} it's ${this.lifeform.eyes} eyes, ${this.lifeform.nose}, ${this.lifeform.ears} ears, and ${this.lifeform.mouth}! ${this.lifeform.name}'s epidermis is ${this.lifeform.skin}, but most notably it features ${this.lifeform.otherFeatures}.`)
    }

    generateLocomotion() {
        let chance = random.dice(6,2).reduce((a, b) => a + b, 0)
        if (chance ===2) { return `${this.generateOverallProportions()} Creeper (Hexapedal Locamotion)` }
        else if (chance === 3) { return `${this.generateOverallProportions()} Plopper (Gelatinous Locamotion)` }
        else if (chance === 4) { return `${this.generateOverallProportions()} Squirmer (Tentacled Octopedal Locamotion)` }
        else if (chance === 5) { return `${this.generateOverallProportions()} Hopper (Bipedal Jumping Locamotion)` }
        else if (chance === 6) { return `${this.generateOverallProportions()} Clinger (Brachiation Locamotion)` }
        else if (chance === 7) { return `${this.generateOverallProportions()} Normy (Bipedal Walking Locamotion)` }
        else if (chance === 8) { return `${this.generateOverallProportions()} Knuckle Dragger (Orthograde Locamotion)` }
        else if (chance === 9) { return `${this.generateOverallProportions()} Flapper (Avian Locamotion)` }
        else if (chance === 10) { return `${this.generateOverallProportions()} Slitherer (Unipedal Locamotion)` }
        else if (chance === 11) { return `${this.generateOverallProportions()} Looper (Peristalsis and Looping Locamotion)` }
        else { return `${this.generateOverallProportions()} Trotter (Quadrupedal Locamotion)` }
    }

    generateOverallProportions() {
        let chance = random.die(6)
        if (chance === 1) { return `Lanky` }
        else if (chance === 2) { return `Obese` }
        else if (chance >= 3 && chance <= 5 ) { return `Average sized` }
        else { return `Muscular` }
    }

    generateSize() {
        let chance = random.die(6)
        if (chance === 1) { return `Small ` }
        else if (chance >= 2 && chance <= 5 ) { return `` }
        else { return `Large ` }
    }

    generateLength() {
        let chance = random.die(6)
        if (chance === 1) { return `Short ` }
        else if (chance >= 2 && chance <= 5 ) { return `` }
        else { return `Long ` }
    }

    generateUpperAppendageType() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `${this.generateUpperAppendageNumber()} ${this.generateLength()}Tentacles. These tentacles are quite nimble, offering ${this.lifeform.name} unrestricted foreign object interaction` }
        else if (chance >= 3 && chance <= 5 ) { return `${this.generateUpperAppendageNumber()} ${this.generateLength()}Humanoid arms and ${this.generateSize()}humanoid hands. Each with an opposable thumb and ${random.dice(3,2).reduce((a, b) => a + b, 0)} fingers` }
        else { return `${this.generateUpperAppendageNumber()} ${this.generateLength()}Multijointed (Insectoid/Arachnid-like) Upper Limbs. Each one with a suprisingly dexterous pincher at its end` }
    }

    generateUpperAppendageNumber() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `4` }
        else if (chance >= 3 && chance <= 5 ) { return `2` }
        else { return `6` }
    }

    generateNeck() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `is supported by its extreamly elongated neck and features` }
        else if (chance >= 3 && chance <= 5 ) { return `features` }
        else { return `sits atop its upper body without any kind of discernible neck and features` }
    }

    generateHead() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) {
            let chance = random.die(100)
            if (chance >= 1 && chance <= 3) { return `'s ${this.generateSize()}Canine-like Head ${this.lifeform.neck}` }
            else if (chance >= 4 && chance <= 6) { return `'s ${this.generateSize()}Feline-like Head ${this.lifeform.neck}` }
            else if (chance >= 7 && chance <= 9) { return `'s ${this.generateSize()}Bison-like Head ${this.lifeform.neck}` }
            else if (chance >= 10 && chance <= 12) { return `'s ${this.generateSize()}Beetle-like Head ${this.lifeform.neck}` }
            else if (chance >= 13 && chance <= 15) { return `'s ${this.generateSize()}Bear-like Head ${this.lifeform.neck}` }
            else if (chance >= 16 && chance <= 18) { return `'s ${this.generateSize()}Monkey-like Head ${this.lifeform.neck}` }
            else if (chance >= 19 && chance <= 21) { return `'s ${this.generateSize()}Rhino-like Head ${this.lifeform.neck}` }
            else if (chance >= 22 && chance <= 24) { return `'s ${this.generateSize()}Camel-like Head ${this.lifeform.neck}` }
            else if (chance >= 25 && chance <= 27) { return `'s ${this.generateSize()}Giraffe-like Head ${this.lifeform.neck}` }
            else if (chance >= 28 && chance <= 30) { return `'s ${this.generateSize()}Praying Mantis-like Head ${this.lifeform.neck}` }
            else if (chance >= 31 && chance <= 33) { return `'s ${this.generateSize()}Mole-like Head ${this.lifeform.neck}` }
            else if (chance >= 34 && chance <= 36) { return `'s ${this.generateSize()}Walrus-like Head ${this.lifeform.neck}` }
            else if (chance >= 37 && chance <= 39) { return `'s ${this.generateSize()}Gorilla-like Head ${this.lifeform.neck}` }
            else if (chance >= 40 && chance <= 42) { return `'s ${this.generateSize()}Hippo-like Head ${this.lifeform.neck}` }
            else if (chance >= 43 && chance <= 45) { return `'s ${this.generateSize()}Eagle-like Head ${this.lifeform.neck}` }
            else if (chance >= 46 && chance <= 48) { return `'s ${this.generateSize()}Raccoon-like Head ${this.lifeform.neck}` }
            else if (chance >= 49 && chance <= 51) { return `'s ${this.generateSize()}Horse-like Head ${this.lifeform.neck}` }
            else if (chance >= 52 && chance <= 54) { return `'s ${this.generateSize()}Koala-like Head ${this.lifeform.neck}` }
            else if (chance >= 55 && chance <= 57) { return `'s ${this.generateSize()}Centipede-like Head ${this.lifeform.neck}` }
            else if (chance >= 58 && chance <= 60) { return `'s ${this.generateSize()}Wasp-like Head ${this.lifeform.neck}` }
            else if (chance >= 61 && chance <= 63) { return `'s ${this.generateSize()}Fly-like Head ${this.lifeform.neck}` }
            else if (chance >= 64 && chance <= 66) { return `'s ${this.generateSize()}Buzzard-like Head ${this.lifeform.neck}` }
            else if (chance >= 67 && chance <= 69) { return `'s ${this.generateSize()}Spider-like Head ${this.lifeform.neck}` }
            else if (chance >= 70 && chance <= 72) { return `'s ${this.generateSize()}Crocodile-like Head ${this.lifeform.neck}` }
            else if (chance >= 73 && chance <= 75) { return `'s ${this.generateSize()}Shark-like Head ${this.lifeform.neck}` }
            else if (chance >= 76 && chance <= 78) { return `'s ${this.generateSize()}Lizard-like Head ${this.lifeform.neck}` }
            else if (chance >= 79 && chance <= 81) { return `'s ${this.generateSize()}Grasshopper-like Head ${this.lifeform.neck}` }
            else if (chance >= 82 && chance <= 84) { return `'s ${this.generateSize()}Frog-like Head ${this.lifeform.neck}` }
            else if (chance >= 85 && chance <= 87) { return `'s ${this.generateSize()}Dragon-like Head ${this.lifeform.neck}` }
            else if (chance >= 88 && chance <= 90) { return `'s ${this.generateSize()}Duck-like Head ${this.lifeform.neck}` }
            else if (chance >= 91 && chance <= 93) { return `'s ${this.generateSize()}Dragonfly-like Head ${this.lifeform.neck}` }
            else if (chance >= 94 && chance <= 96) { return `'s ${this.generateSize()}Aardvark-like Head ${this.lifeform.neck}` }
            else { return `'s Pig-like Head  ${this.lifeform.neck}` }            
        }
        else if (chance >= 3 && chance <= 5 ) {
            let chance = random.die(6)
            if (chance === 1) { return `'s ${this.generateSize()}Humanoid Head with its Pronounced Brow ${this.lifeform.neck}` }
            else if (chance === 2) { return `'s ${this.generateSize()}Humanoid Head with its Pronounced Maxilla (Extreme Overbite) ${this.lifeform.neck}` }
            else if (chance === 3) { return `'s ${this.generateSize()}Humanoid Head with its Pronounced Mandible (Extreme Underbite) ${this.lifeform.neck}` }
            else if (chance === 4) { return `'s ${this.generateSize()}Humanoid Head with its Pronounced Chin ${this.lifeform.neck}` }
            else if (chance === 5) { return `'s ${this.generateSize()}Humanoid Head ${this.lifeform.neck}` }
            else { return `'s ${this.generateSize()}Humanoid Head with its Enlarged Cranium ${this.lifeform.neck}` }                       
        }
        else { return ` has no head! It's face appears to be a part of it's chest and features` }
    }
    
    generateFacialFeature() {
        let chance = random.die(100)
        if (chance >= 1 && chance <= 5) { return `${this.generateLength()}Tusks` }
        else if (chance >= 6 && chance <= 11) { return `${this.generateSize()}Pinchers` }
        else if (chance >= 12 && chance <= 16) { return `${this.generateLength()}Antennae` }
        else if (chance >= 17 && chance <= 22) { return `${this.generateSize()}Tendrils` }
        else if (chance >= 23 && chance <= 27) { return `${this.generateLength()}Whiskers` }
        else if (chance >= 28 && chance <= 33) { return `${this.generateSize()}Horns` }
        else if (chance >= 34 && chance <= 39) { return `${this.generateSize()}Gills` }
        else if (chance >= 45 && chance <= 54) { return `${this.generateLength()}Spikes` }
        else if (chance >= 55 && chance <= 60) { return `${this.generateSize()}Alien Markings` }
        else if (chance >= 61 && chance <= 64) { return `${this.generateSize()}Exposed Cybernetics` }
        else if (chance >= 65 && chance <= 69) { return `${this.generateSize()}Mandibles` }
        else if (chance >= 70 && chance <= 74) { return `a ${this.generateSize()}Exposed Brain` }
        else if (chance >= 75 && chance <= 78) { return `${this.generateSize()}Ornate Feathering` }
        else if (chance >= 79 && chance <= 85) { return `a ${this.generateLength()}Mane` }
        else if (chance >= 86 && chance <= 91) { return `a ${this.generateSize()}Wattle` }
        else if (chance >= 92 && chance <= 96) { return `${this.generateLength()}Antlers` }
        else { return `${this.generateLength()}Ossicones` }
    } 

    generateFacialFeatures() {
        let chance = random.die(6)
        let facialFeatureOne = this.generateFacialFeature()
        let facialFeatureTwo = this.generateFacialFeature()

        while (facialFeatureOne === facialFeatureTwo) {
            facialFeatureTwo = this.generateFacialFeature()
        }

        let facialFeatureThree = this.generateFacialFeature()

        while (facialFeatureThree === facialFeatureOne || facialFeatureThree === facialFeatureTwo) {
            facialFeatureThree = this.generateFacialFeature()
        }

        if (chance === 1 ) { return `nothing special` }
        else if (chance >= 2 && chance <= 3 ) { return `${facialFeatureOne}` }
        else if (chance >= 4 && chance <= 5 ) { return `${facialFeatureOne} as well as ${facialFeatureTwo}` }
        else { return `${facialFeatureOne}, ${facialFeatureTwo}, and ${facialFeatureThree}` }        
    }

    generateEyes() {
        let chance = random.die(100)
        if (chance >= 1 && chance <= 5) { return `Droopy` }
        else if (chance >= 6 && chance <= 11) { return `Bulbous` }
        else if (chance >= 12 && chance <= 16) { return `Black Void` }
        else if (chance >= 17 && chance <= 22) { return `Compound (Fly)` }
        else if (chance >= 23 && chance <= 27) { return `Deep Set` }
        else if (chance >= 28 && chance <= 33) { return `Protruding` }
        else if (chance >= 34 && chance <= 39) { return `Tubular` }
        else if (chance >= 45 && chance <= 54) { return `Almond` }
        else if (chance >= 55 && chance <= 60) { return `Crescent` }
        else if (chance >= 61 && chance <= 64) { return `Liquid Pool` }
        else if (chance >= 65 && chance <= 69) { return `Walleyed` }
        else if (chance >= 70 && chance <= 74) { return `Beady` }
        else if (chance >= 75 && chance <= 78) { return `Catlike Vertical Pupils` }
        else if (chance >= 79 && chance <= 82) { return `Crystal` }
        else if (chance >= 83 && chance <= 86) { return `Marbled` }
        else if (chance >= 87 && chance <= 91) { return `Eyestalks` }
        else if (chance >= 92 && chance <= 94) { return `complete lack of` }
        else { return `Chameleon` }
    }

    generateMouth() {
        let chance = random.die(100)
        if (chance >= 1 && chance <=12) { return `${this.generateLength()}Exposed Lower Canines` }
        else if (chance >= 13 && chance <= 25) { return `${this.generateLength()}Exposed Upper Canines` }
        else if (chance >= 26 && chance <= 37) { return `Multiple Rows of ${this.generateLength()}Teeth` }
        else if (chance >= 38 && chance <= 50) { return `Widely Spaced ${this.generateLength()}Teeth` }
        else if (chance >= 51 && chance <= 63) { return `${this.generateSize()}Humanoid mouth` }
        else if (chance >= 64 && chance <=75) { return `lack of a mouth` }
        else if (chance >= 76 && chance <= 88) { return `${this.generateSize()}Vagina Dentata Mouth` }
        else { return `${this.generateSize()}Lamprey Mouth` }
    }

    generateNose() {
        let chance = random.die(100)
        if (chance >= 1 && chance <=11) { return `${this.generateSize()}Humanoid nose` }
        else if (chance >= 12 && chance <= 22) { return `${this.generateLength()}Trunk` }
        else if (chance >= 23 && chance <= 33) { return `${this.generateLength()}Beak` }
        else if (chance >= 34 && chance <= 44) { return `${this.generateLength()}Proboscis` }
        else if (chance >= 45 && chance <= 55) { return `${this.generateLength()}Rhinarium` }
        else if (chance >= 56 && chance <= 66) { return `${this.generateLength()}Pig-like Snout` }
        else if (chance >= 67 && chance <= 77) { return `visibly absent nose` }
        else if (chance >= 78 && chance <= 88) { return `${this.generateSize()}Exposed Nostril Slits` }
        else { return `${this.generateLength()}Duck Bill` }
    }

    generateEars() {
        let chance = random.die(100)
        if (chance >= 1 && chance <=12) { return `${this.generateSize()}Humanoid` }
        else if (chance >= 13 && chance <= 25) { return `${this.generateLength()}Elf-like` }
        else if (chance >= 26 && chance <= 37) { return `${this.generateLength()}Cat-like` }
        else if (chance >= 38 && chance <= 50) { return `${this.generateLength()}Goat-like` }
        else if (chance >= 51 && chance <= 63) { return `${this.generateSize()}Mouse-like` }
        else if (chance >= 64 && chance <=75) { return `${this.generateSize()}Earholes` }
        else if (chance >= 76 && chance <= 88) { return `${this.generateSize()}Floppy` }
        else { return `absence of` }
    }

    gernerateSkinCoverage() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 )  { return 25 }
        else if (chance >= 3 && chance <= 4 ) { return 50 }
        else { return 100 }
    }

    generateSkinType() {
        let chance = random.die(100)
        if (chance >= 1 && chance <= 4) { return `Mossy` }	
        else if (chance >= 5 && chance <= 8) { return `Decomposing` }	
        else if (chance >= 9 && chance <= 12) { return `Glowing` }	
        else if (chance >= 13 && chance <= 16) { return `Exoskeleton` }	
        else if (chance >= 17 && chance <= 20) { return `Foliage` }	
        else if (chance >= 21 && chance <= 24) { return `Lumpy` }	
        else if (chance >= 25 && chance <= 28) { return `Spectral` }	
        else if (chance >= 29 && chance <= 32) { return `Crystalized` }	
        else if (chance >= 33 && chance <= 36) { return `Vapor` }	
        else if (chance >= 37 && chance <= 40) { return `Shimmering` }	
        else if (chance >= 41 && chance <= 44) { return `Sharkskin-like` }	
        else if (chance >= 45 && chance <= 48) { return `Leathery` }	
        else if (chance >= 49 && chance <= 52) { return `Rind (Like an Orange)` }	
        else if (chance >= 53 && chance <= 56) { return `Translucent` }	
        else if (chance >= 57 && chance <= 60) { return `Fur` }	
        else if (chance >= 61 && chance <= 64) { return `Scaled` }	
        else if (chance >= 65 && chance <= 68) { return `Quills` }	
        else if (chance >= 69 && chance <= 72) { return `Feathers` }	
        else if (chance >= 73 && chance <= 76) { return `Fleshy` }	
        else if (chance >= 77 && chance <= 80) { return `Sandpaper Texture` }	
        else if (chance >= 81 && chance <= 84) { return `Rocky Hide` }	
        else if (chance >= 85 && chance <= 88) { return `Pinecone-like` }	
        else if (chance >= 89 && chance <= 92) { return `Peach Fuzzed Texture` }	
        else if (chance >= 93 && chance <= 96) { return `Slimy` }	
        else { return `Coral-like` }	
    }

    generateSkinColor() {
        let chance = random.die(100)
        if (chance >= 1 && chance <= 4) { return `Maroon` }
        else if (chance >= 5 && chance <= 9) { return `Brown` }
        else if (chance >= 10 && chance <= 13) { return `Olive` }
        else if (chance >= 14 && chance <= 18) { return `Teal` }
        else if (chance >= 19 && chance <= 22) { return `Navy` }
        else if (chance >= 23 && chance <= 27) { return `Black` }
        else if (chance >= 28 && chance <= 32) { return `Red` }
        else if (chance >= 33 && chance <= 36) { return `Orange` }
        else if (chance >= 37 && chance <= 41) { return `Yellow` }
        else if (chance >= 42 && chance <= 45) { return `Lime` }
        else if (chance >= 46 && chance <= 50) { return `Green` }
        else if (chance >= 51 && chance <= 54) { return `Cyan` }
        else if (chance >= 55 && chance <= 59) { return `Blue` }
        else if (chance >= 60 && chance <= 64) { return `Purple` }
        else if (chance >= 65 && chance <= 68) { return `Magenta` }
        else if (chance >= 69 && chance <= 73) { return `Grey` }
        else if (chance >= 74 && chance <= 77) { return `Pink` }
        else if (chance >= 78 && chance <= 81) { return `Apricot` }
        else if (chance >= 82 && chance <= 86) { return `Beige` }
        else if (chance >= 87 && chance <= 90) { return `Mint` }
        else if (chance >= 91 && chance <= 94) { return `Lavender` }
        else { return `White` }
    }

    generateSkinPattern() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2) { 
            let chance = random.die(6)
            if (chance === 1) { return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Hexagons` }
            else if (chance === 2) { return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Trapezoids` }
            else if (chance === 3) { return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Chevron` }
            else if (chance === 4) { return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Stripes` }
            else if (chance === 5) { return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Hexagons` }
            else { return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Freckles` }
        }	
        else { return `${this.generateSkinType()} ${this.generateSkinColor()}` }
    }

    gernerateSkin() {
        let coverage = this.gernerateSkinCoverage();
        if (100 - coverage === 0) {
            return `primarily ${this.generateSkinPattern()}`
        } else if (100 - coverage === 50) {
            return `one-half ${this.generateSkinPattern()} and one-half ${this.generateSkinPattern()}`
        } else {
            return `a quarter ${this.generateSkinPattern()} and three-quarters ${this.generateSkinPattern()}`
        }
    }

    generateFeature() {
        let chance = random.die(100)
        if (chance >= 1 && chance <= 5) { return `${this.generateSize()}Decorative Wings` }
        else if (chance >= 6 && chance <= 10) { return `${this.generateSize()}Fins` }
        else if (chance >= 11 && chance <= 15) { return `a Body that is Covered in Alien Tattoos` }
        else if (chance >= 16 && chance <= 20) { return `${this.generateSize()}Horns` }
        else if (chance >= 21 && chance <= 25) { return `Various ${this.generateSize()}Lumps, Hernias and Tumors` }
        else if (chance >= 26 && chance <= 30) { return `Webbed Limbs` }
        else if (chance >= 31 && chance <= 35) { return `A ${this.generateSize()}very Bad Rash` }
        else if (chance >= 36 && chance <= 40) { return `${this.generateLength()}Tail` }
        else if (chance >= 41 && chance <= 45) { return `a multitude of ${this.generateSize()}Exposed Cybernetics` }
        else if (chance >= 46 && chance <= 50) { return `${this.generateSize()}Natural Suction Cups` }
        else if (chance >= 51 && chance <= 55) { return `${this.generateLength()}Prehensile Tongue` }
        else if (chance >= 56 && chance <= 60) { return `an Additional Head (Complete with its own personality)` }
        else if (chance >= 61 && chance <= 65) { return `an Abnormally Large Sexual Organ` }
        else if (chance >= 66 && chance <= 70) { return `a ${this.generateSize()}Shell` }
        else if (chance >= 71 && chance <= 75) { return `a Body that Oozes Puss from Constantly Weeping Lesions` }
        else if (chance >= 76 && chance <= 80) { return `a multitude of ${this.generateLength()}Antennae` }
        else if (chance >= 81 && chance <= 85) { return `a multitude of Strange Glowing Runes or Markings` }
        else if (chance >= 86 && chance <= 90) { return `an Insect like Exoskeleton` }
        else if (chance >= 91 && chance <= 95) { return `${this.generateSize()}Spikes` }
        else { return `a Body that is Covered in Nasty Scarring` }
    } 

    generateFeatures() {
        let chance = random.die(6)
        let featureOne = this.generateFeature()
        let featureTwo = this.generateFeature()

        while (featureOne === featureTwo) {
            featureTwo = this.generateFeature()
        }

        let featureThree = this.generateFeature()

        while (featureThree === featureOne || featureThree === featureTwo) {
            featureThree = this.generateFeature()
        }

        if (chance >= 1 && chance <= 3 ) { return `${featureOne}` }
        else if (chance >= 4 && chance <= 5 ) { return `${featureOne} and ${featureTwo}` }
        else { return `${featureOne}, ${featureTwo}, and ${featureThree}` }        
    }

    generateUpperMadLib () {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `interacts with the world around it` }
        else if (chance >= 3 && chance <= 5 ) { return `manipulates it's immediate enviornment` }
        else { return `imposes it's will on surrounding objects and entities` }
    }

    generateFaceMadLib() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `This does nothing to distract one from` }
        else if (chance >= 3 && chance <= 5 ) { return `Despite this, you can't help but notice` }
        else { return `As if all of that wasn't odd enough, you now take in` }
    }
}

module.exports = LifeformGenerator