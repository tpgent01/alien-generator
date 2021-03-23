
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
        this.lifeform.forearmSize = this.generateSize();
        this.lifeform.calveSize = this.generateSize();
        this.lifeform.feetSize = this.generateSize();
        this.lifeform.handSize = this.generateSize();
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
    }

    generateLocomotion() {
        let chance = random.dice(6,2).reduce((a, b) => a + b, 0)
        if (chance ===2) { return `${this.generateOverallProportions()} Creeper (Hexapedal)` }
        else if (chance === 3) { return `${this.generateOverallProportions()} Plopper (Gelatinous)` }
        else if (chance === 4) { return `${this.generateOverallProportions()} Squirmer (Tentacled Octopedal)` }
        else if (chance === 5) { return `${this.generateOverallProportions()} Hopper (Bipedal Jumper)` }
        else if (chance === 6) { return `${this.generateOverallProportions()} Clinger (Brachiation)` }
        else if (chance === 7) { return `${this.generateOverallProportions()} Normy (Bipedal Walker)` }
        else if (chance === 8) { return `${this.generateOverallProportions()} Knuckle Dragger (Orthograde)` }
        else if (chance === 9) { return `${this.generateOverallProportions()} Flapper (Avian)` }
        else if (chance === 10) { return `${this.generateOverallProportions()} Slitherer (Peristalsis and Looping)` }
        else if (chance === 11) { return `${this.generateOverallProportions()} Looper (Quadrupedal)` }
        else { return `${this.generateOverallProportions()} Trotter (Quadrupedal)` }
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

    generateUpperAppendageType() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `${this.generateUpperAppendageNumber()} Tentacles` }
        else if (chance >= 3 && chance <= 5 ) { return `${this.generateUpperAppendageNumber()} Humanoid arms with opposable thumbs and ${random.die(6)} fingers` }
        else { return `${this.generateUpperAppendageNumber()} Multijointed (Insectoid/Arachnid) Upper Limbs` }
    }

    generateUpperAppendageNumber() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `4` }
        else if (chance >= 3 && chance <= 5 ) { return `2` }
        else { return `6` }
    }

    generateNeck() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) { return `Elongated` }
        else if (chance >= 3 && chance <= 5 ) { return `Normal` }
        else { return `No Neck` }
    }

    generateHead() {
        let chance = random.die(6)
        if (chance >= 1 && chance <= 2 ) {
            let chance = random.die(100)
            if (chance >= 1 && chance <= 3) { return `${this.generateSize()}Canine-like Head` }
            else if (chance >= 4 && chance <= 6) { return `${this.generateSize()}Feline-like Head` }
            else if (chance >= 7 && chance <= 9) { return `${this.generateSize()}Bison-like Head` }
            else if (chance >= 10 && chance <= 12) { return `${this.generateSize()}Beetle-like Head` }
            else if (chance >= 13 && chance <= 15) { return `${this.generateSize()}Bear-like Head` }
            else if (chance >= 16 && chance <= 18) { return `${this.generateSize()}Monkey-like Head` }
            else if (chance >= 19 && chance <= 21) { return `${this.generateSize()}Rhino-like Head` }
            else if (chance >= 22 && chance <= 24) { return `${this.generateSize()}Camel-like Head` }
            else if (chance >= 25 && chance <= 27) { return `${this.generateSize()}Giraffe-like Head` }
            else if (chance >= 28 && chance <= 30) { return `${this.generateSize()}Praying Mantis-like Head` }
            else if (chance >= 31 && chance <= 33) { return `${this.generateSize()}Mole-like Head` }
            else if (chance >= 34 && chance <= 36) { return `${this.generateSize()}Walrus-like Head` }
            else if (chance >= 37 && chance <= 39) { return `${this.generateSize()}Gorilla-like Head` }
            else if (chance >= 40 && chance <= 42) { return `${this.generateSize()}Hippo-like Head` }
            else if (chance >= 43 && chance <= 45) { return `${this.generateSize()}Eagle-like Head` }
            else if (chance >= 46 && chance <= 48) { return `${this.generateSize()}Raccoon-like Head` }
            else if (chance >= 49 && chance <= 51) { return `${this.generateSize()}Horse-like Head` }
            else if (chance >= 52 && chance <= 54) { return `${this.generateSize()}Koala-like Head` }
            else if (chance >= 55 && chance <= 57) { return `${this.generateSize()}Centipede-like Head` }
            else if (chance >= 58 && chance <= 60) { return `${this.generateSize()}Wasp-like Head` }
            else if (chance >= 61 && chance <= 63) { return `${this.generateSize()}Fly-like Head` }
            else if (chance >= 64 && chance <= 66) { return `${this.generateSize()}Buzzard-like Head` }
            else if (chance >= 67 && chance <= 69) { return `${this.generateSize()}Spider-like Head` }
            else if (chance >= 70 && chance <= 72) { return `${this.generateSize()}Crocodile-like Head` }
            else if (chance >= 73 && chance <= 75) { return `${this.generateSize()}Shark-like Head` }
            else if (chance >= 76 && chance <= 78) { return `${this.generateSize()}Lizard-like Head` }
            else if (chance >= 79 && chance <= 81) { return `${this.generateSize()}Grasshopper-like Head` }
            else if (chance >= 82 && chance <= 84) { return `${this.generateSize()}Frog-like Head` }
            else if (chance >= 85 && chance <= 87) { return `${this.generateSize()}Dragon-like Head` }
            else if (chance >= 88 && chance <= 90) { return `${this.generateSize()}Duck-like Head` }
            else if (chance >= 91 && chance <= 93) { return `${this.generateSize()}Dragonfly-like Head` }
            else if (chance >= 94 && chance <= 96) { return `${this.generateSize()}Aardvark-like Head` }
            else { return `Pig` }            
        }
        else if (chance >= 3 && chance <= 5 ) {
            let chance = random.die(6)
            if (chance === 1) { return `${this.generateSize()}Humanoid Head with a Pronounced Brow` }
            else if (chance === 2) { return `${this.generateSize()}Humanoid Head with a Pronounced Maxilla (Extreme Overbite)` }
            else if (chance === 3) { return `${this.generateSize()}Humanoid Head with a Pronounced Mandible (Extreme Underbite)` }
            else if (chance === 4) { return `${this.generateSize()}Humanoid Head with a Pronounced Chin` }
            else if (chance === 5) { return `${this.generateSize()}Humanoid Head ` }
            else { return `${this.generateSize()}Humanoid Head with an Enlarged Cranium` }                       
        }
        else { return `No head, it's face is on it's chest` }
    }
    
    generateFacialFeature() {
        let chance = random.die(100)
        if (chance >= 1 && chance <= 5) { return `Tusks` }
        else if (chance >= 6 && chance <= 11) { return `Pinchers` }
        else if (chance >= 12 && chance <= 16) { return `Antennae` }
        else if (chance >= 17 && chance <= 22) { return `Tendrils` }
        else if (chance >= 23 && chance <= 27) { return `Whiskers` }
        else if (chance >= 28 && chance <= 33) { return `Horns` }
        else if (chance >= 34 && chance <= 39) { return `Gills` }
        else if (chance >= 45 && chance <= 54) { return `Spikes` }
        else if (chance >= 55 && chance <= 60) { return `Markings` }
        else if (chance >= 61 && chance <= 64) { return `Cybernetics` }
        else if (chance >= 65 && chance <= 69) { return `Mandibles` }
        else if (chance >= 70 && chance <= 74) { return `Exposed Brain` }
        else if (chance >= 75 && chance <= 78) { return `Ornate Feathering` }
        else if (chance >= 79 && chance <= 85) { return `Mane` }
        else if (chance >= 86 && chance <= 91) { return `Wattle` }
        else if (chance >= 92 && chance <= 96) { return `Antlers` }
        else { return `Ossicones` }
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

        if (chance === 1 ) { return `None` }
        else if (chance >= 2 && chance <= 3 ) { return `${this.generateSize()}${facialFeatureOne}` }
        else if (chance >= 4 && chance <= 5 ) { return `${this.generateSize()}${facialFeatureOne} and ${this.generateSize()}${facialFeatureTwo}` }
        else { return `${this.generateSize()}${facialFeatureOne}, ${this.generateSize()}${facialFeatureTwo}, and ${this.generateSize()}${facialFeatureThree}` }        
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
        else if (chance >= 92 && chance <= 94) { return `None` }
        else { return `Chameleon` }
    }

    generateMouth() {
        let chance = random.die(100)
        if (chance >= 1 && chance <=12) { return `Exposed Lower Canines` }
        else if (chance >= 13 && chance <= 25) { return `Exposed Upper Canines` }
        else if (chance >= 26 && chance <= 37) { return `Multiple Rows of Teeth` }
        else if (chance >= 38 && chance <= 50) { return `Widely Spaced Teeth` }
        else if (chance >= 51 && chance <= 63) { return `Standard Humanoid` }
        else if (chance >= 64 && chance <=75) { return `None` }
        else if (chance >= 76 && chance <= 88) { return `Vagina Dentata Mouth` }
        else { return `Lamprey Mouth` }
    }

    generateNose() {
        let chance = random.die(100)
        if (chance >= 1 && chance <=11) { return `Humanoid` }
        else if (chance >= 12 && chance <= 22) { return `Trunk` }
        else if (chance >= 23 && chance <= 33) { return `Beak` }
        else if (chance >= 34 && chance <= 44) { return `Proboscis` }
        else if (chance >= 45 && chance <= 55) { return `Rhinarium` }
        else if (chance >= 56 && chance <= 66) { return `Snout` }
        else if (chance >= 67 && chance <= 77) { return `None` }
        else if (chance >= 78 && chance <= 88) { return `Nostril Slits` }
        else { return `Duck Bill` }
    }

    generateEars() {
        let chance = random.die(100)
        if (chance >= 1 && chance <=12) { return `Humanoid` }
        else if (chance >= 13 && chance <= 25) { return `Elf-like` }
        else if (chance >= 26 && chance <= 37) { return `Cat-like` }
        else if (chance >= 38 && chance <= 50) { return `Goat-like` }
        else if (chance >= 51 && chance <= 63) { return `Mouse-like` }
        else if (chance >= 64 && chance <=75) { return `Earholes` }
        else if (chance >= 76 && chance <= 88) { return `Floppy` }
        else { return `None` }
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
        else if (chance >= 41 && chance <= 44) { return `Sharkskin` }	
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
        else if (chance >= 85 && chance <= 88) { return `Pinecone Like` }	
        else if (chance >= 89 && chance <= 92) { return `Peach Fuzzed Texture` }	
        else if (chance >= 93 && chance <= 96) { return `Slimy` }	
        else { return `Coral` }	
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
            if (chance === 1) { return `${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Hexagons` }
            else if (chance === 2) { return `${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Trapezoids` }
            else if (chance === 3) { return `${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Chevron` }
            else if (chance === 4) { return `${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Striped` }
            else if (chance === 5) { return `${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Hexagons` }
            else { return `${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Freckled` }
        }	
        else { return `${this.generateSkinColor()}` }
    }

    gernerateSkin() {
        let coverage = this.gernerateSkinCoverage();
        if (100 - coverage === 0) {
            return `${this.generateSkinType()} ${this.generateSkinPattern()}`
        } else {
            return `${coverage}% ${this.generateSkinType()} ${this.generateSkinPattern()} and ${100 - coverage}% ${this.generateSkinType()} ${this.generateSkinPattern()}`
        }
    }

    generateFeature() {
        let chance = random.die(100)
        if (chance >= 1 && chance <= 5) { return `Wings (decorative)` }
        else if (chance >= 6 && chance <= 10) { return `Fins` }
        else if (chance >= 11 && chance <= 15) { return `Body is Covered in Alien Tattoos` }
        else if (chance >= 16 && chance <= 20) { return `Horns` }
        else if (chance >= 21 && chance <= 25) { return `Various Lumps, Hernias or Tumors` }
        else if (chance >= 26 && chance <= 30) { return `Webbed Limbs` }
        else if (chance >= 31 && chance <= 35) { return `A Bad Rash` }
        else if (chance >= 36 && chance <= 40) { return `Tail` }
        else if (chance >= 41 && chance <= 45) { return `Cybernetics` }
        else if (chance >= 46 && chance <= 50) { return `Natural Suction Cups` }
        else if (chance >= 51 && chance <= 55) { return `Prehensile Tongue` }
        else if (chance >= 56 && chance <= 60) { return `Additional Head (Complete with its own personality)` }
        else if (chance >= 61 && chance <= 65) { return `Abnormally Large Sexual Organ` }
        else if (chance >= 66 && chance <= 70) { return `Shell` }
        else if (chance >= 71 && chance <= 75) { return `Body Oozes Puss from Constantly Weeping Lesions` }
        else if (chance >= 76 && chance <= 80) { return `Antennae` }
        else if (chance >= 81 && chance <= 85) { return `Strange Glowing Runes or Markings` }
        else if (chance >= 86 && chance <= 90) { return `Insect like Exoskeleton` }
        else if (chance >= 91 && chance <= 95) { return `Spikes` }
        else { return `Body is Covered in Nasty Scarring` }
        
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

        if (chance === 1 ) { return `None` }
        else if (chance >= 2 && chance <= 3 ) { return `${this.generateSize()}${featureOne}` }
        else if (chance >= 4 && chance <= 5 ) { return `${this.generateSize()}${featureOne} and ${this.generateSize()}${featureTwo}` }
        else { return `${this.generateSize()}${featureOne}, ${this.generateSize()}${featureTwo}, and ${this.generateSize()}${featureThree}` }        
    }
}

module.exports = LifeformGenerator