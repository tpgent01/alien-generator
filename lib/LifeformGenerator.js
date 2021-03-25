const Lifeform = require("./Lifeform");
const Abilities = require("./Abilities/Abilities");
const { Random } = require("random-js");
const random = new Random();
const abilities = new Abilities();

class LifeformGenerator {
  constructor(lifeform = new Lifeform()) {
    this.lifeform = lifeform;
  }

  initializeLifeformGenerator() {
    this.lifeform.name = this.generateName();
    this.lifeform.backstory = `${
      this.lifeform.name
    } ${this.generateDisposition()} It ${this.generateBirth()}. ${
      this.lifeform.name
    } ${this.generateReason()}`;
    this.lifeform.locamotion = this.generateLocomotion();
    this.lifeform.upperAppendageType = this.generateUpperAppendageType();
    this.lifeform.neck = this.generateNeck();
    this.lifeform.head = this.generateHead();
    this.lifeform.facialFeatures = this.generateFacialFeatures();
    this.lifeform.eyes = this.generateEyes();
    this.lifeform.mouth = this.generateMouth();
    this.lifeform.nose = this.generateNose();
    this.lifeform.ears = this.generateEars();
    this.lifeform.skin = this.gernerateSkin();
    this.lifeform.otherFeatures = this.generateFeatures();
    this.lifeform.abilities = this.gernerateAbilities();
    this.lifeform.physicalDescription = `${this.lifeform.name} is ${
      this.lifeform.locamotion
    } that ${this.generateUpperMadLib()} using its ${
      this.lifeform.upperAppendageType
    }. ${this.lifeform.name}${this.lifeform.head} ${
      this.lifeform.facialFeatures
    }. ${this.generateFaceMadLib()} its ${this.lifeform.eyes} eyes, ${
      this.lifeform.nose
    }, ${this.lifeform.ears} ears, and ${this.lifeform.mouth}! ${
      this.lifeform.name
    }'s epidermis is ${this.lifeform.skin}, but most notably ${
      this.lifeform.name
    } has ${this.lifeform.otherFeatures}.`;
    console.log(this.lifeform);
    this.saveLifeform(JSON.stringify(this.lifeform, null, 2));
  }

  saveLifeform(lifeform) {
    console.log(
      `{
"lifeform": ${lifeform}
}`
    );
  }

  generateLocomotion() {
    let chance = random.dice(6, 2).reduce((a, b) => a + b, 0);
    if (chance === 2) {
      return `${this.generateOverallProportions()} Creeper (Hexapedal Locomotion)`;
    } else if (chance === 3) {
      return `${this.generateOverallProportions()} Plopper (Gelatinous Locomotion)`;
    } else if (chance === 4) {
      return `${this.generateOverallProportions()} Squirmer (Tentacled Octopedal Locomotion)`;
    } else if (chance === 5) {
      return `${this.generateOverallProportions()} Hopper (Bipedal Jumping Locomotion)`;
    } else if (chance === 6) {
      return `${this.generateOverallProportions()} Clinger (Brachiation Locomotion)`;
    } else if (chance === 7) {
      return `${this.generateOverallProportions()} Normy (Bipedal Walking Locomotion)`;
    } else if (chance === 8) {
      return `${this.generateOverallProportions()} Knuckle Dragger (Orthograde Locomotion)`;
    } else if (chance === 9) {
      return `${this.generateOverallProportions()} Flapper (Avian Locomotion)`;
    } else if (chance === 10) {
      return `${this.generateOverallProportions()} Slitherer (Unipedal Locomotion)`;
    } else if (chance === 11) {
      return `${this.generateOverallProportions()} Looper (Peristalsis and Looping Locomotion)`;
    } else {
      return `${this.generateOverallProportions()} Trotter (Quadrupedal Locomotion)`;
    }
  }

  generateOverallProportions() {
    let chance = random.die(6);
    if (chance === 1) {
      return `a Lanky`;
    } else if (chance === 2) {
      return `an Obese`;
    } else if (chance >= 3 && chance <= 5) {
      return `an Average sized`;
    } else {
      return `a Muscular`;
    }
  }

  generateSize() {
    let chance = random.die(6);
    if (chance === 1) {
      return `Small `;
    } else if (chance >= 2 && chance <= 5) {
      return ``;
    } else {
      return `Large `;
    }
  }

  generateLength() {
    let chance = random.die(6);
    if (chance === 1) {
      return `Short `;
    } else if (chance >= 2 && chance <= 5) {
      return ``;
    } else {
      return `Long `;
    }
  }

  generateUpperAppendageType() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      return `${this.generateUpperAppendageNumber()} ${this.generateLength()}Tentacles. These tentacles are quite nimble, offering ${
        this.lifeform.name
      } unrestricted foreign object interaction`;
    } else if (chance >= 3 && chance <= 5) {
      return `${this.generateUpperAppendageNumber()} ${this.generateLength()}Humanoid arms and ${this.generateSize()}humanoid hands. Each with an opposable thumb and ${this.generateFingerNumber()}`;
    } else {
      return `${this.generateUpperAppendageNumber()} ${this.generateLength()}Multijointed (Insectoid/Arachnid-like) Upper Limbs. Each one with a surprisingly dexterous pincher at its end`;
    }
  }

  generateUpperAppendageNumber() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      return `four`;
    } else if (chance >= 3 && chance <= 5) {
      return `two`;
    } else {
      return `six`;
    }
  }

  generateFingerNumber() {
    let chance = random.die(6);
    if (chance === 1) {
      return `a single ${this.generateLength()}finger`;
    } else if (chance === 3) {
      return `three ${this.generateLength()}fingers`;
    } else if (chance === 4) {
      return `four ${this.generateLength()}fingers`;
    } else if (chance === 5) {
      return `five ${this.generateLength()}fingers`;
    } else {
      return `six ${this.generateLength()}fingers`;
    }
  }

  generateNeck() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      return `is supported by its extreamly elongated neck and features`;
    } else if (chance >= 3 && chance <= 5) {
      return `features`;
    } else {
      return `sits atop its upper body without any kind of discernible neck and features`;
    }
  }

  generateHead() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      let chance = random.die(100);
      if (chance >= 1 && chance <= 3) {
        return `'s ${this.generateSize()}Canine-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 4 && chance <= 6) {
        return `'s ${this.generateSize()}Feline-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 7 && chance <= 9) {
        return `'s ${this.generateSize()}Bison-like Head ${this.lifeform.neck}`;
      } else if (chance >= 10 && chance <= 12) {
        return `'s ${this.generateSize()}Beetle-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 13 && chance <= 15) {
        return `'s ${this.generateSize()}Bear-like Head ${this.lifeform.neck}`;
      } else if (chance >= 16 && chance <= 18) {
        return `'s ${this.generateSize()}Monkey-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 19 && chance <= 21) {
        return `'s ${this.generateSize()}Rhino-like Head ${this.lifeform.neck}`;
      } else if (chance >= 22 && chance <= 24) {
        return `'s ${this.generateSize()}Camel-like Head ${this.lifeform.neck}`;
      } else if (chance >= 25 && chance <= 27) {
        return `'s ${this.generateSize()}Giraffe-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 28 && chance <= 30) {
        return `'s ${this.generateSize()}Praying Mantis-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 31 && chance <= 33) {
        return `'s ${this.generateSize()}Mole-like Head ${this.lifeform.neck}`;
      } else if (chance >= 34 && chance <= 36) {
        return `'s ${this.generateSize()}Walrus-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 37 && chance <= 39) {
        return `'s ${this.generateSize()}Gorilla-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 40 && chance <= 42) {
        return `'s ${this.generateSize()}Hippo-like Head ${this.lifeform.neck}`;
      } else if (chance >= 43 && chance <= 45) {
        return `'s ${this.generateSize()}Eagle-like Head ${this.lifeform.neck}`;
      } else if (chance >= 46 && chance <= 48) {
        return `'s ${this.generateSize()}Raccoon-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 49 && chance <= 51) {
        return `'s ${this.generateSize()}Horse-like Head ${this.lifeform.neck}`;
      } else if (chance >= 52 && chance <= 54) {
        return `'s ${this.generateSize()}Koala-like Head ${this.lifeform.neck}`;
      } else if (chance >= 55 && chance <= 57) {
        return `'s ${this.generateSize()}Centipede-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 58 && chance <= 60) {
        return `'s ${this.generateSize()}Wasp-like Head ${this.lifeform.neck}`;
      } else if (chance >= 61 && chance <= 63) {
        return `'s ${this.generateSize()}Fly-like Head ${this.lifeform.neck}`;
      } else if (chance >= 64 && chance <= 66) {
        return `'s ${this.generateSize()}Buzzard-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 67 && chance <= 69) {
        return `'s ${this.generateSize()}Spider-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 70 && chance <= 72) {
        return `'s ${this.generateSize()}Crocodile-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 73 && chance <= 75) {
        return `'s ${this.generateSize()}Shark-like Head ${this.lifeform.neck}`;
      } else if (chance >= 76 && chance <= 78) {
        return `'s ${this.generateSize()}Lizard-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 79 && chance <= 81) {
        return `'s ${this.generateSize()}Grasshopper-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 82 && chance <= 84) {
        return `'s ${this.generateSize()}Frog-like Head ${this.lifeform.neck}`;
      } else if (chance >= 85 && chance <= 87) {
        return `'s ${this.generateSize()}Dragon-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 88 && chance <= 90) {
        return `'s ${this.generateSize()}Duck-like Head ${this.lifeform.neck}`;
      } else if (chance >= 91 && chance <= 93) {
        return `'s ${this.generateSize()}Dragonfly-like Head ${
          this.lifeform.neck
        }`;
      } else if (chance >= 94 && chance <= 96) {
        return `'s ${this.generateSize()}Aardvark-like Head ${
          this.lifeform.neck
        }`;
      } else {
        return `'s Pig-like Head  ${this.lifeform.neck}`;
      }
    } else if (chance >= 3 && chance <= 5) {
      let chance = random.die(6);
      if (chance === 1) {
        return `'s ${this.generateSize()}Humanoid Head with its Pronounced Brow ${
          this.lifeform.neck
        }`;
      } else if (chance === 2) {
        return `'s ${this.generateSize()}Humanoid Head with its Pronounced Maxilla (Extreme Overbite) ${
          this.lifeform.neck
        }`;
      } else if (chance === 3) {
        return `'s ${this.generateSize()}Humanoid Head with its Pronounced Mandible (Extreme Underbite) ${
          this.lifeform.neck
        }`;
      } else if (chance === 4) {
        return `'s ${this.generateSize()}Humanoid Head with its Pronounced Chin ${
          this.lifeform.neck
        }`;
      } else if (chance === 5) {
        return `'s ${this.generateSize()}Humanoid Head ${this.lifeform.neck}`;
      } else {
        return `'s ${this.generateSize()}Humanoid Head with its Enlarged Cranium ${
          this.lifeform.neck
        }`;
      }
    } else {
      return ` has no head! It's face appears to be a part of it's chest and features`;
    }
  }

  generateFacialFeature() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 5) {
      return `${this.generateLength()}Tusks`;
    } else if (chance >= 6 && chance <= 11) {
      return `${this.generateSize()}Pinchers`;
    } else if (chance >= 12 && chance <= 16) {
      return `${this.generateLength()}Antennae`;
    } else if (chance >= 17 && chance <= 22) {
      return `${this.generateSize()}Tendrils`;
    } else if (chance >= 23 && chance <= 27) {
      return `${this.generateLength()}Whiskers`;
    } else if (chance >= 28 && chance <= 33) {
      return `${this.generateSize()}Horns`;
    } else if (chance >= 34 && chance <= 39) {
      return `${this.generateSize()}Gills`;
    } else if (chance >= 45 && chance <= 54) {
      return `${this.generateLength()}Spikes`;
    } else if (chance >= 55 && chance <= 60) {
      return `${this.generateSize()}Alien Markings`;
    } else if (chance >= 61 && chance <= 64) {
      return `${this.generateSize()}Exposed Cybernetics`;
    } else if (chance >= 65 && chance <= 69) {
      return `${this.generateSize()}Mandibles`;
    } else if (chance >= 70 && chance <= 74) {
      return `a ${this.generateSize()}Exposed Brain`;
    } else if (chance >= 75 && chance <= 78) {
      return `${this.generateSize()}Ornate Feathering`;
    } else if (chance >= 79 && chance <= 85) {
      return `a ${this.generateLength()}Mane`;
    } else if (chance >= 86 && chance <= 91) {
      return `a ${this.generateSize()}Wattle`;
    } else if (chance >= 92 && chance <= 96) {
      return `${this.generateLength()}Antlers`;
    } else {
      return `${this.generateLength()}Ossicones`;
    }
  }

  generateFacialFeatures() {
    let chance = random.die(6);
    let facialFeatureOne = this.generateFacialFeature();
    let facialFeatureTwo = this.generateFacialFeature();

    while (facialFeatureOne === facialFeatureTwo) {
      facialFeatureTwo = this.generateFacialFeature();
    }

    let facialFeatureThree = this.generateFacialFeature();

    while (
      facialFeatureThree === facialFeatureOne ||
      facialFeatureThree === facialFeatureTwo
    ) {
      facialFeatureThree = this.generateFacialFeature();
    }

    if (chance === 1) {
      return `nothing special`;
    } else if (chance >= 2 && chance <= 3) {
      return `${facialFeatureOne}`;
    } else if (chance >= 4 && chance <= 5) {
      return `${facialFeatureOne} as well as ${facialFeatureTwo}`;
    } else {
      return `${facialFeatureOne}, ${facialFeatureTwo}, and ${facialFeatureThree}`;
    }
  }

  generateEyes() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 5) {
      return `Droopy`;
    } else if (chance >= 6 && chance <= 11) {
      return `Bulbous`;
    } else if (chance >= 12 && chance <= 16) {
      return `Black Void`;
    } else if (chance >= 17 && chance <= 22) {
      return `Compound (Fly)`;
    } else if (chance >= 23 && chance <= 27) {
      return `Deep Set`;
    } else if (chance >= 28 && chance <= 33) {
      return `Protruding`;
    } else if (chance >= 34 && chance <= 39) {
      return `Tubular`;
    } else if (chance >= 45 && chance <= 54) {
      return `Almond`;
    } else if (chance >= 55 && chance <= 60) {
      return `Crescent`;
    } else if (chance >= 61 && chance <= 64) {
      return `Liquid Pool`;
    } else if (chance >= 65 && chance <= 69) {
      return `Walleyed`;
    } else if (chance >= 70 && chance <= 74) {
      return `Beady`;
    } else if (chance >= 75 && chance <= 78) {
      return `Catlike Vertical Pupils`;
    } else if (chance >= 79 && chance <= 82) {
      return `Crystal`;
    } else if (chance >= 83 && chance <= 86) {
      return `Marbled`;
    } else if (chance >= 87 && chance <= 91) {
      return `Eyestalks`;
    } else if (chance >= 92 && chance <= 94) {
      return `complete lack of`;
    } else {
      return `Chameleon`;
    }
  }

  generateMouth() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 12) {
      return `${this.generateLength()}Exposed Lower Canines`;
    } else if (chance >= 13 && chance <= 25) {
      return `${this.generateLength()}Exposed Upper Canines`;
    } else if (chance >= 26 && chance <= 37) {
      return `Multiple Rows of ${this.generateLength()}Teeth`;
    } else if (chance >= 38 && chance <= 50) {
      return `Widely Spaced ${this.generateLength()}Teeth`;
    } else if (chance >= 51 && chance <= 63) {
      return `${this.generateSize()}Humanoid mouth`;
    } else if (chance >= 64 && chance <= 75) {
      return `lack of a mouth`;
    } else if (chance >= 76 && chance <= 88) {
      return `${this.generateSize()}Vagina Dentata Mouth`;
    } else {
      return `${this.generateSize()}Lamprey Mouth`;
    }
  }

  generateNose() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 11) {
      return `${this.generateSize()}Humanoid nose`;
    } else if (chance >= 12 && chance <= 22) {
      return `${this.generateLength()}Trunk`;
    } else if (chance >= 23 && chance <= 33) {
      return `${this.generateLength()}Beak`;
    } else if (chance >= 34 && chance <= 44) {
      return `${this.generateLength()}Proboscis`;
    } else if (chance >= 45 && chance <= 55) {
      return `${this.generateLength()}Rhinarium`;
    } else if (chance >= 56 && chance <= 66) {
      return `${this.generateLength()}Pig-like Snout`;
    } else if (chance >= 67 && chance <= 77) {
      return `visibly absent nose`;
    } else if (chance >= 78 && chance <= 88) {
      return `${this.generateSize()}Exposed Nostril Slits`;
    } else {
      return `${this.generateLength()}Duck Bill`;
    }
  }

  generateEars() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 12) {
      return `${this.generateSize()}Humanoid`;
    } else if (chance >= 13 && chance <= 25) {
      return `${this.generateLength()}Elf-like`;
    } else if (chance >= 26 && chance <= 37) {
      return `${this.generateLength()}Cat-like`;
    } else if (chance >= 38 && chance <= 50) {
      return `${this.generateLength()}Goat-like`;
    } else if (chance >= 51 && chance <= 63) {
      return `${this.generateSize()}Mouse-like`;
    } else if (chance >= 64 && chance <= 75) {
      return `${this.generateSize()}Earholes`;
    } else if (chance >= 76 && chance <= 88) {
      return `${this.generateSize()}Floppy`;
    } else {
      return `absence of`;
    }
  }

  gernerateSkinCoverage() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      return 25;
    } else if (chance >= 3 && chance <= 4) {
      return 50;
    } else {
      return 100;
    }
  }

  generateSkinType() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 4) {
      return `Mossy Flesh`;
    } else if (chance >= 5 && chance <= 8) {
      return `Decomposing Flesh`;
    } else if (chance >= 9 && chance <= 12) {
      return `Glowing Skin`;
    } else if (chance >= 13 && chance <= 16) {
      return `Bony Exoskeleton`;
    } else if (chance >= 17 && chance <= 20) {
      return `Foliage`;
    } else if (chance >= 21 && chance <= 24) {
      return `Lumpy Flesh`;
    } else if (chance >= 25 && chance <= 28) {
      return `Spectral Form`;
    } else if (chance >= 29 && chance <= 32) {
      return `Crystalized Exoskeleton`;
    } else if (chance >= 33 && chance <= 36) {
      return `Vapor Form`;
    } else if (chance >= 37 && chance <= 40) {
      return `Shimmering Skin`;
    } else if (chance >= 41 && chance <= 44) {
      return `Shark-like Flesh`;
    } else if (chance >= 45 && chance <= 48) {
      return `Leathery Hide`;
    } else if (chance >= 49 && chance <= 52) {
      return `Rind Flesh (Like an Orange)`;
    } else if (chance >= 53 && chance <= 56) {
      return `Translucent Skin`;
    } else if (chance >= 57 && chance <= 60) {
      return `Fur`;
    } else if (chance >= 61 && chance <= 64) {
      return `Scaled Skin`;
    } else if (chance >= 65 && chance <= 68) {
      return `Quills`;
    } else if (chance >= 69 && chance <= 72) {
      return `Feathers`;
    } else if (chance >= 73 && chance <= 76) {
      return `Flesh`;
    } else if (chance >= 77 && chance <= 80) {
      return `Sandpaper Textured Hide`;
    } else if (chance >= 81 && chance <= 84) {
      return `Rocky Hide`;
    } else if (chance >= 85 && chance <= 88) {
      return `Pinecone-like Exoskeleton`;
    } else if (chance >= 89 && chance <= 92) {
      return `Peach Fuzzed Textured Skin`;
    } else if (chance >= 93 && chance <= 96) {
      return `Slimy Flesh`;
    } else {
      return `Coral-like Exoskeleton`;
    }
  }

  generateSkinColor() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 4) {
      return `Maroon`;
    } else if (chance >= 5 && chance <= 9) {
      return `Brown`;
    } else if (chance >= 10 && chance <= 13) {
      return `Olive`;
    } else if (chance >= 14 && chance <= 18) {
      return `Teal`;
    } else if (chance >= 19 && chance <= 22) {
      return `Navy`;
    } else if (chance >= 23 && chance <= 27) {
      return `Black`;
    } else if (chance >= 28 && chance <= 32) {
      return `Red`;
    } else if (chance >= 33 && chance <= 36) {
      return `Orange`;
    } else if (chance >= 37 && chance <= 41) {
      return `Yellow`;
    } else if (chance >= 42 && chance <= 45) {
      return `Lime`;
    } else if (chance >= 46 && chance <= 50) {
      return `Green`;
    } else if (chance >= 51 && chance <= 54) {
      return `Cyan`;
    } else if (chance >= 55 && chance <= 59) {
      return `Blue`;
    } else if (chance >= 60 && chance <= 64) {
      return `Purple`;
    } else if (chance >= 65 && chance <= 68) {
      return `Magenta`;
    } else if (chance >= 69 && chance <= 73) {
      return `Grey`;
    } else if (chance >= 74 && chance <= 77) {
      return `Pink`;
    } else if (chance >= 78 && chance <= 81) {
      return `Apricot`;
    } else if (chance >= 82 && chance <= 86) {
      return `Beige`;
    } else if (chance >= 87 && chance <= 90) {
      return `Mint`;
    } else if (chance >= 91 && chance <= 94) {
      return `Lavender`;
    } else {
      return `White`;
    }
  }

  generateSkinPattern() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      let chance = random.die(6);
      if (chance === 1) {
        return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Hexagons`;
      } else if (chance === 2) {
        return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Trapezoids`;
      } else if (chance === 3) {
        return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Chevron`;
      } else if (chance === 4) {
        return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Stripes`;
      } else if (chance === 5) {
        return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Hexagons`;
      } else {
        return `${this.generateSkinType()} with ${this.generateSize()}${this.generateSkinColor()} and ${this.generateSkinColor()} Freckles`;
      }
    } else {
      return `${this.generateSkinColor()} ${this.generateSkinType()}`;
    }
  }

  gernerateSkin() {
    let coverage = this.gernerateSkinCoverage();
    if (100 - coverage === 0) {
      return `primarily ${this.generateSkinPattern()}`;
    } else if (100 - coverage === 50) {
      return `one-half ${this.generateSkinPattern()} and one-half ${this.generateSkinPattern()}`;
    } else {
      return `a quarter ${this.generateSkinPattern()} and three-quarters ${this.generateSkinPattern()}`;
    }
  }

  generateFeature() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 5) {
      return `${this.generateSize()}Decorative Wings`;
    } else if (chance >= 6 && chance <= 10) {
      return `${this.generateSize()}Fins`;
    } else if (chance >= 11 && chance <= 15) {
      return `a Body that is Covered in Alien Tattoos`;
    } else if (chance >= 16 && chance <= 20) {
      return `${this.generateSize()}Horns`;
    } else if (chance >= 21 && chance <= 25) {
      return `Various ${this.generateSize()}Lumps, Hernias and Tumors`;
    } else if (chance >= 26 && chance <= 30) {
      return `Webbed Limbs`;
    } else if (chance >= 31 && chance <= 35) {
      return `a ${this.generateSize()}very Bad Rash`;
    } else if (chance >= 36 && chance <= 40) {
      return `a ${this.generateLength()}Tail`;
    } else if (chance >= 41 && chance <= 45) {
      return `a multitude of ${this.generateSize()}Exposed Cybernetics`;
    } else if (chance >= 46 && chance <= 50) {
      return `${this.generateSize()}Natural Suction Cups`;
    } else if (chance >= 51 && chance <= 55) {
      return `a ${this.generateLength()}Prehensile Tongue`;
    } else if (chance >= 56 && chance <= 60) {
      return `an Additional Head (Complete with its own personality)`;
    } else if (chance >= 61 && chance <= 65) {
      return `an Abnormally Large Sexual Organ`;
    } else if (chance >= 66 && chance <= 70) {
      return `a ${this.generateSize()}Shell`;
    } else if (chance >= 71 && chance <= 75) {
      return `a Body that Oozes Puss from Constantly Weeping Lesions`;
    } else if (chance >= 76 && chance <= 80) {
      return `a multitude of ${this.generateLength()}Antennae`;
    } else if (chance >= 81 && chance <= 85) {
      return `a multitude of Strange Glowing Runes or Markings`;
    } else if (chance >= 86 && chance <= 90) {
      return `an Insect like Exoskeleton`;
    } else if (chance >= 91 && chance <= 95) {
      return `${this.generateSize()}Spikes`;
    } else {
      return `a Body that is Covered in Nasty Scarring`;
    }
  }

  generateFeatures() {
    let chance = random.die(6);
    let featureOne = this.generateFeature();
    let featureTwo = this.generateFeature();

    while (featureOne === featureTwo) {
      featureTwo = this.generateFeature();
    }

    let featureThree = this.generateFeature();

    while (featureThree === featureOne || featureThree === featureTwo) {
      featureThree = this.generateFeature();
    }

    if (chance >= 1 && chance <= 3) {
      return `${featureOne}`;
    } else if (chance >= 4 && chance <= 5) {
      return `${featureOne} and ${featureTwo}`;
    } else {
      return `${featureOne}, ${featureTwo}, and ${featureThree}`;
    }
  }

  generateUpperMadLib() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      return `interacts with the world around it`;
    } else if (chance >= 3 && chance <= 5) {
      return `manipulates its immediate environment`;
    } else {
      return `imposes its will on surrounding objects and entities`;
    }
  }

  generateFaceMadLib() {
    let chance = random.die(6);
    if (chance >= 1 && chance <= 2) {
      return `This does nothing to distract one from`;
    } else if (chance >= 3 && chance <= 5) {
      return `Despite this, you can't help but notice`;
    } else {
      return `As if all of that wasn't odd enough, you now take in`;
    }
  }

  generateAbility() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 2) {
      return abilities.absorbEnergy;
    } else if (chance >= 3 && chance <= 4) {
      return abilities.acidBlood;
    } else if (chance >= 5 && chance <= 6) {
      return abilities.acidBreath;
    } else if (chance >= 7 && chance <= 8) {
      return abilities.cling;
    } else if (chance >= 9 && chance <= 10) {
      return abilities.gelatinousStorage;
    } else if (chance >= 11 && chance <= 12) {
      return abilities.gliding;
    } else if (chance >= 13 && chance <= 14) {
      return abilities.highJumping;
    } else if (chance >= 15 && chance <= 16) {
      return abilities.languageComprehension;
    } else if (chance >= 17 && chance <= 18) {
      return abilities.macroVision;
    } else if (chance >= 19 && chance <= 20) {
      return abilities.nightVision;
    } else if (chance >= 21 && chance <= 22) {
      return abilities.selfContainedBioFunctions;
    } else if (chance >= 23 && chance <= 24) {
      return abilities.telepathy;
    } else if (chance >= 25 && chance <= 26) {
      return abilities.thermalVision;
    } else if (chance >= 27 && chance <= 28) {
      return abilities.webbing;
    } else if (chance >= 29 && chance <= 30) {
      return abilities.acceleratedEvolution;
    } else if (chance >= 31 && chance <= 32) {
      return abilities.animalControl;
    } else if (chance >= 33 && chance <= 34) {
      return abilities.damageShield;
    } else if (chance >= 35 && chance <= 36) {
      return abilities.duplicationI;
    } else if (chance >= 37 && chance <= 38) {
      return abilities.empathy;
    } else if (chance >= 39 && chance <= 40) {
      return abilities.bindSenses;
    } else if (chance >= 41 && chance <= 42) {
      return abilities.extraLimbsCrafting;
    } else if (chance >= 43 && chance <= 44) {
      return abilities.highSpeedRunning;
    } else if (chance >= 45 && chance <= 46) {
      return abilities.mezmerize;
    } else if (chance >= 47 && chance <= 48) {
      return abilities.mindProbe;
    } else if (chance >= 49 && chance <= 50) {
      return abilities.naturalResistance;
    } else if (chance >= 51 && chance <= 52) {
      return abilities.poisonGas;
    } else if (chance >= 53 && chance <= 54) {
      return abilities.redistributeDamage;
    } else if (chance >= 55 && chance <= 56) {
      return abilities.regeneration;
    } else if (chance >= 57 && chance <= 58) {
      return abilities.telekinesis;
    } else if (chance >= 59 && chance <= 60) {
      return abilities.totalRecall;
    } else if (chance >= 61 && chance <= 62) {
      return abilities.venom;
    } else if (chance >= 63 && chance <= 64) {
      return abilities.changeling;
    } else if (chance >= 65 && chance <= 66) {
      return abilities.mindReading;
    } else if (chance >= 67 && chance <= 68) {
      return abilities.phaseShifting;
    } else if (chance >= 69 && chance <= 70) {
      return abilities.sizeControl;
    } else if (chance >= 71 && chance <= 72) {
      return abilities.split;
    } else if (chance >= 73 && chance <= 74) {
      return abilities.symbionts;
    } else if (chance >= 75 && chance <= 76) {
      return abilities.temporaryInvulnerability;
    } else if (chance >= 77 && chance <= 78) {
      return abilities.sixthSense;
    } else if (chance >= 79 && chance <= 80) {
      return abilities.fortitude;
    } else if (chance >= 81 && chance <= 82) {
      return abilities.might;
    } else if (chance >= 83 && chance <= 84) {
      return abilities.nimble;
    } else if (chance >= 85 && chance <= 86) {
      return abilities.beauty;
    } else if (chance >= 87 && chance <= 88) {
      return abilities.alienIntelligence;
    } else if (chance >= 89 && chance <= 90) {
      return abilities.duplicationIii;
    } else if (chance >= 91 && chance <= 92) {
      return abilities.elasticityIi;
    } else if (chance >= 93 && chance <= 94) {
      return abilities.flight;
    } else if (chance >= 95 && chance <= 96) {
      return abilities.illusionMajor;
    } else if (chance >= 97 && chance <= 98) {
      return abilities.invisibility;
    } else {
      return abilities.mindControl;
    }
  }

  gernerateAbilities() {
    let abilitiesArr = [];

    let chance = random.die(6);
    let abilityOne = this.generateAbility();
    let abilityTwo = this.generateAbility();

    while (abilityOne === abilityTwo) {
      abilityTwo = this.generateAbility();
    }

    let abilityThree = this.generateAbility();

    while (abilityThree === abilityOne || abilityThree === abilityTwo) {
      abilityThree = this.generateAbility();
    }

    if (chance >= 1 && chance <= 3) {
      abilitiesArr.push({
        name: abilityOne.name,
        description: abilityOne.description,
      });
      abilitiesArr.push({
        name: abilityTwo.name,
        description: abilityTwo.description,
      });
    } else {
      abilitiesArr.push({
        name: abilityOne.name,
        description: abilityOne.description,
      });
      abilitiesArr.push({
        name: abilityTwo.name,
        description: abilityTwo.description,
      });
      abilitiesArr.push({
        name: abilityThree.name,
        description: abilityThree.description,
      });
    }

    return abilitiesArr;
  }

  generateName() {
    var name1 = ["A","E","I","O","U","Y","Ba","Be","Bi","Bo","Bu","By","Bla","Ble","Bli","Blo","Blu","Bly","Bra","Bre","Bri","Bro","Bru","Bry","Ca","Ce","Ci","Co","Cu","Cy","Cha","Che","Chi","Cho","Chu","Chy","Cla","Cle","Cli","Clo","Clu","Cly","Cra","Cre","Cri","Cro","Cru","Cry","Cta","Cte","Cti","Cto","Ctu","Cty","Da","De","Di","Do","Du","Dy","Dha","Dhe","Dhi","Dho","Dhu","Dhy","Dra","Dre","Dri","Dro","Dru","Dry","Fa","Fe","Fi","Fo","Fu","Fy","Fla","Fle","Fli","Flo","Flu","Fly","Fra","Fre","Fri","Fro","Fru","Fry","Fra","Fre","Fri","Fro","Fru","Fry","Ga","Ge","Gi","Go","Gu","Gy","Gra","Gre","Gri","Gro","Gru","Gry","Ha","He","Hi","Ho","Hu","Hy","Hra","Hre","Hri","Hro","Hru","Hry","Ja","Je","Ji","Jo","Ju","Jy","Ka","Ke","Ki","Ko","Ku","Ky","Kha","Khe","Khi","Kho","Khu","Khy","Kla","Kle","Kli","Klo","Klu","Kly","Kra","Kre","Kri","Kro","Kru","Kry","La","Le","Li","Lo","Lu","Ly","Ma","Me","Mi","Mo","Mu","My","Mpa","Mpe","Mpi","Mpo","Mpu","Mpy","Na","Ne","Ni","No","Nu","Ny","Nta","Nte","Nti","Nto","Ntu","Nty","Pa","Pe","Pi","Po","Pu","Py","Pha","Phe","Phi","Pho","Phu","Phy","Pra","Pre","Pri","Pro","Pru","Pry","Psa","Pse","Psi","Pso","Psu","Psy","Qa","Qe","Qi","Qo","Qu","Qy","Ra","Re","Ri","Ro","Ru","Ry","Rha","Rhe","Rhi","Rho","Rhu","Rhy","Rha","Rhe","Rhi","Rho","Rhu","Rhy","Sa","Se","Si","So","Su","Sy","Sca","Sce","Sci","Sco","Scu","Scy","Spa","Spe","Spi","Spo","Spu","Spy","Sta","Ste","Sti","Sto","Stu","Sty","Ta","Te","Ti","To","Tu","Ty","Tha","The","Thi","Tho","Thu","Thy","Tra","Tre","Tri","Tro","Tru","Try","Tsa","Tse","Tsi","Tso","Tsu","Tsy","Va","Ve","Vi","Vo","Vu","Vy","Vra","Vre","Vri","Vro","Vru","Vry","Wa","We","Wi","Wo","Wu","Wy","Xa","Xe","Xi","Xo","Xu","Xy","Za","Ze","Zi","Zo","Zu","Zy","Zha","Zhe","Zhi","Zho","Zhu","Zhy"];
    var name2 = ["ba","be","bi","bo","bu","by","bla","ble","bli","blo","blu","bly","bra","bre","bri","bro","bru","bry","ca","ce","ci","co","cu","cy","cha","che","chi","cho","chu","chy","cla","cle","cli","clo","clu","cly","cra","cre","cri","cro","cru","cry","cta","cte","cti","cto","ctu","cty","da","de","di","do","du","dy","dha","dhe","dhi","dho","dhu","dhy","dra","dre","dri","dro","dru","dry","fa","fe","fi","fo","fu","fy","fla","fle","fli","flo","flu","fly","fra","fre","fri","fro","fru","fry","fra","fre","fri","fro","fru","fry","ga","ge","gi","go","gu","gy","gra","gre","gri","gro","gru","gry","ha","he","hi","ho","hu","hy","hra","hre","hri","hro","hru","hry","ja","je","ji","jo","ju","jy","ka","ke","ki","ko","ku","ky","kha","khe","khi","kho","khu","khy","kla","kle","kli","klo","klu","kly","kra","kre","kri","kro","kru","kry","la","le","li","lo","lu","ly","ma","me","mi","mo","mu","my","mpa","mpe","mpi","mpo","mpu","mpy","na","ne","ni","no","nu","ny","nta","nte","nti","nto","ntu","nty","pa","pe","pi","po","pu","py","pha","phe","phi","pho","phu","phy","pra","pre","pri","pro","pru","pry","psa","pse","psi","pso","psu","psy","qa","qe","qi","qo","qu","qy","ra","re","ri","ro","ru","ry","rha","rhe","rhi","rho","rhu","rhy","rha","rhe","rhi","rho","rhu","rhy","sa","se","si","so","su","sy","sca","sce","sci","sco","scu","scy","spa","spe","spi","spo","spu","spy","sta","ste","sti","sto","stu","sty","ta","te","ti","to","tu","ty","tha","the","thi","tho","thu","thy","tra","tre","tri","tro","tru","try","tsa","tse","tsi","tso","tsu","tsy","va","ve","vi","vo","vu","vy","vra","vre","vri","vro","vru","vry","wa","we","wi","wo","wu","wy","xa","xe","xi","xo","xu","xy","za","ze","zi","zo","zu","zy","zha","zhe","zhi","zho","zhu","zhy"];
    var name3 = ["ron","ran","ria","rion","rous","rix","son","san","via","sion","gus","sex","rex","gia","diti"]

    var randName1 = name1[Math.floor(Math.random() * name1.length)];
    var randName2 = name2[Math.floor(Math.random() * name2.length)];
    var randName3 = name3[Math.floor(Math.random() * name3.length)];

    return randName1 + randName2 + randName3;
}

  generateBirth() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 15) {
      return `is the first born of ${random
        .dice(6, 3)
        .reduce((a, b) => a + b, 0)} genetically related lifeforms`;
    } else if (chance >= 16 && chance <= 28) {
      return `was just one of a litter of ${random
        .dice(100, 3)
        .reduce((a, b) => a + b, 0)} offspring`;
    } else if (chance >= 29 && chance <= 43) {
      return `was hatched after an incubation period of ${random
        .dice(3, 20)
        .reduce((a, b) => a + b, 0)} years from a nest of ${random
        .dice(10, 2)
        .reduce((a, b) => a + b, 0)} eggs`;
    } else if (chance >= 44 && chance <= 57) {
      return `was the only survivor of ${random
        .dice(100, 3)
        .reduce(
          (a, b) => a + b,
          0
        )} offspring, the rest were consumed by its parents`;
    } else if (chance >= 58 && chance <= 70) {
      return `is just one of its parents ${random.die(
        900
      )},000 pupa that emerged from a pupal case`;
    } else if (chance >= 71 && chance <= 80) {
      return `is a conjoined twin that consumed its sibling during puberty`;
    } else if (chance >= 81 && chance <= 90) {
      return `is the last born of ${random
        .dice(6, 3)
        .reduce((a, b) => a + b, 0)} genetically related lifeforms`;
    } else {
      return `is an illegitimate bastard offspring of inter-dimensional gypsies`;
    }
  }

  generateReason() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 10) {
      return `is an outlaw wanted in over ${random
        .dice(10, 3)
        .reduce((a, b) => a + b, 0)} dimensions.`;
    } else if (chance >= 11 && chance <= 20) {
      return `is on a quest for power and glory by way of ${this.gererateStudy()}.`;
    } else if (chance >= 21 && chance <= 35) {
      return `is a refugee who lost its homeworld after ${this.generateDestruction()}.`;
    } else if (chance >= 36 && chance <= 45) {
      return `is seeking its fame and fortune through ${this.gererateStudy()}.`;
    } else if (chance >= 46 && chance <= 55) {
      return `is on a quest for ultimate knowledge of ${this.gererateStudy()}`;
    } else if (chance >= 56 && chance <= 65) {
      return `is seeking some kind of purpose or answer to existance. Wow, won't it be dissapointed.`;
    } else if (chance >= 66 && chance <= 75) {
      return `is here enjoying an extended vacation.`;
    } else if (chance >= 76 && chance <= 85) {
      return `is just you know, walking the d-verse, meeting lifeforms... getting into adventures. Like Kane in Kung Fu.`;
    } else if (chance >= 86 && chance <= 95) {
      return `is looking for a... You wouldn't happened to have six fingers on your right hand would you?`;
    } else {
      return `is an absolute mystery, it's intentions are completely unkown`;
    }
  }

  gererateStudy() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 10) {
      return `drugs`;
    } else if (chance >= 11 && chance <= 20) {
      return `lifeform trafficking`;
    } else if (chance >= 21 && chance <= 30) {
      return `weapon development`;
    } else if (chance >= 31 && chance <= 40) {
      return `natural resource exploitation`;
    } else if (chance >= 41 && chance <= 50) {
      return `full stack web development`;
    } else if (chance >= 51 && chance <= 60) {
      return `bitcoin`;
    } else if (chance >= 61 && chance <= 70) {
      return `gender studies`;
    } else if (chance >= 71 && chance <= 80) {
      return `alien orifices`;
    } else if (chance >= 81 && chance <= 90) {
      return `imitation arousal cheese`;
    } else {
      return `viagra`;
    }
  }

  generateDestruction() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 10) {
      return `it was swallowed by a blackhole`;
    } else if (chance >= 11 && chance <= 20) {
      return `it's life giving star went supernova`;
    } else if (chance >= 21 && chance <= 30) {
      return `an asteroid barreled into its ocean`;
    } else if (chance >= 31 && chance <= 40) {
      return `its species' contributions to the planet's global warming`;
    } else if (chance >= 41 && chance <= 50) {
      return `its species' contributions to the planet's global cooling`;
    } else if (chance >= 51 && chance <= 60) {
      return `it was destroyed due war between its fellow planetary inhabitants`;
    } else if (chance >= 61 && chance <= 70) {
      return `it was destroyed as a result of a galactic war`;
    } else if (chance >= 71 && chance <= 80) {
      return `it was destroyed because of something it did. It doesn't want to talk about it`;
    } else if (chance >= 81 && chance <= 90) {
      return `it was destroyed due to some malfunction of alien technology`;
    } else {
      return `it was destroyed due to lack of knowledge about ${this.gererateStudy()}`;
    }
  }

  generateDisposition() {
    let chance = random.die(100);
    if (chance >= 1 && chance <= 7) {
      return `is aloof and always has it's head in the clouds. Very absent minded and forgetful.`;
    } else if (chance >= 8 && chance <= 13) {
      return `is an all around good person. What a loser.`;
    } else if (chance >= 14 && chance <= 19) {
      return `is unbearably arrogant and is always in charge, regardless of what anyone else thinks.`;
    } else if (chance >= 20 && chance <= 25) {
      return `loves to hear itself speak and can't seem to ever shut-up.`;
    } else if (chance >= 26 && chance <= 31) {
      return `is a misserable bastard`;
    } else if (chance >= 32 && chance <= 37) {
      return `is constantly aggravated about something.`;
    } else if (chance >= 38 && chance <= 43) {
      return `is laid back and accepting of others.`;
    } else if (chance >= 44 && chance <= 49) {
      return `is always looking for a way to hustle lifeforms out of something.`;
    } else if (chance >= 50 && chance <= 55) {
      return `is suspicious, spiteful and vindictive.`;
    } else if (chance >= 56 && chance <= 61) {
      return `is quick-tempered and emotional.`;
    } else if (chance >= 62 && chance <= 67) {
      return `always thinks the glass is half empty, and never feels it gets its fair share.`;
    } else if (chance >= 68 && chance <= 73) {
      return `is overprotective of others, especially friends.`;
    } else if (chance >= 74 && chance <= 79) {
      return `is quiet and timid.`;
    } else if (chance >= 80 && chance <= 85) {
      return `is cocky and self-reliant.`;
    } else if (chance >= 86 && chance <= 91) {
      return `tends to rush into situations without thinking it all through.`;
    } else {
      return `is a worry wart and tends to be cautious about everything.`;
    }
  }
}

module.exports = LifeformGenerator;
