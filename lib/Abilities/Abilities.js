const AbsorbEnergy = require('./AbsorbEnergy');
const AcidBlood = require('./AcidBlood');
const AcidBreath = require('./AcidBreath');
const Chameleon = require('./Chameleon');
const Cling = require('./Cling');
const GelatinousStorage = require('./GelatinousStorage');
const Gliding = require('./Gliding');
const HeightenedSense = require('./HeightenedSense');
const HighJumping = require('./HighJumping');
const LanguageComprehension = require('./LanguageComprehension');
const MacroVision = require('./MacroVision');
const NightVision = require('./NightVision');
const SelfContainedBioFunctions = require('./SelfContainedBioFunctions');
const Telepathy = require('./Telepathy');
const ThermalVision = require('./ThermalVision');
const Webbing = require('./Webbing');
const AcceleratedEvolution = require('./AcceleratedEvolution');
const AnimalControl = require('./AnimalControl');
const DamageShield = require('./DamageShield');
const DuplicationI = require('./DuplicationI');
const ElasticityI = require('./ElasticityI');
const Empathy = require('./Empathy');
const BindSenses = require('./BindSenses');
const ExtraLimbsCrafting = require('./ExtraLimbsCrafting');
const HighSpeedRunning = require('./HighSpeedRunning');
const Mezmerize = require('./Mezmerize');
const IllusionMinor = require('./IllusionMinor');
const MindProbe = require('./MindProbe');
const NaturalResistance = require('./NaturalResistance');
const PoisonGas = require('./PoisonGas');
const RedistributeDamage = require('./RedistributeDamage');
const Regeneration = require('./Regeneration');
const Telekinesis = require('./Telekinesis');
const TotalRecall = require('./TotalRecall');
const Venom = require('./Venom');
const Changeling = require('./Changeling');
const DuplicationIi = require('./DuplicationIi');
const MindReading = require('./MindReading');
const NaturalArmorAdaptive = require('./NaturalArmorAdaptive');
const PhaseShifting = require('./PhaseShifting');
const SizeControl = require('./SizeControl');
const Split = require('./Split');
const Symbionts = require('./Symbionts');
const TemporaryInvulnerability = require('./TemporaryInvulnerability');
const SixthSense = require('./SixthSense');
const Fortitude = require('./Fortitude');
const Might = require('./Might');
const Nimble = require('./Nimble');
const Beauty = require('./Beauty');
const AlienIntelligence = require('./AlienIntelligence');
const DuplicationIii = require('./DuplicationIii');
const ElasticityIi = require('./ElasticityIi');
const ExtraLimbsCombat = require('./ExtraLimbsCombat');
const Flight = require('./Flight');
const IllusionMajor = require('./IllusionMajor');
const Invisibility = require('./Invisibility');
const MindControl = require('./MindControl');
const NaturalArmorLocation = require('./NaturalArmorLocation');
const NaturalWeaponry = require('./NaturalWeaponry');

class Abilities {
    constructor(
        absorbEnergy = new AbsorbEnergy,
        acidBlood = new AcidBlood,
        acidBreath = new AcidBreath,
        chameleon = new Chameleon,
        cling = new Cling,
        gelatinousStorage = new GelatinousStorage,
        gliding = new Gliding,
        heightenedSense = new HeightenedSense,
        highJumping = new HighJumping,
        languageComprehension = new LanguageComprehension,
        macroVision = new MacroVision,
        nightVision = new NightVision,
        selfContainedBioFunctions = new SelfContainedBioFunctions,
        telepathy = new Telepathy,
        thermalVision = new ThermalVision,
        webbing = new Webbing,
        acceleratedEvolution = new AcceleratedEvolution,
        animalControl = new AnimalControl,
        damageShield = new DamageShield,
        duplicationI = new DuplicationI,
        elasticityI = new ElasticityI,
        empathy = new Empathy,
        bindSenses = new BindSenses,
        extraLimbsCrafting = new ExtraLimbsCrafting,
        highSpeedRunning = new HighSpeedRunning,
        mezmerize = new Mezmerize,
        illusionMinor = new IllusionMinor,
        mindProbe = new MindProbe,
        naturalResistance = new NaturalResistance,
        poisonGas = new PoisonGas,
        redistributeDamage = new RedistributeDamage,
        regeneration = new Regeneration,
        telekinesis = new Telekinesis,
        totalRecall = new TotalRecall,
        venom = new Venom,
        changeling = new Changeling,
        duplicationIi = new DuplicationIi,
        mindReading = new MindReading,
        naturalArmorAdaptive = new NaturalArmorAdaptive,
        phaseShifting = new PhaseShifting,
        sizeControl = new SizeControl,
        split = new Split,
        symbionts = new Symbionts,
        temporaryInvulnerability = new TemporaryInvulnerability,
        sixthSense = new SixthSense,
        fortitude = new Fortitude,
        might = new Might,
        nimble = new Nimble,
        beauty = new Beauty,
        alienIntelligence = new AlienIntelligence,
        duplicationIii = new DuplicationIii,
        elasticityIi = new ElasticityIi,
        extraLimbsCombat = new ExtraLimbsCombat,
        flight = new Flight,
        illusionMajor = new IllusionMajor,
        invisibility = new Invisibility,
        mindControl = new MindControl,
        naturalArmorLocation = new NaturalArmorLocation,
        naturalWeaponry = new NaturalWeaponry
    ) {
        this.absorbEnergy = absorbEnergy;
        this.acidBlood = acidBlood;
        this.acidBreath = acidBreath;
        this.chameleon = chameleon;
        this.cling = cling;
        this.gelatinousStorage = gelatinousStorage;
        this.gliding = gliding;
        this.heightenedSense = heightenedSense;
        this.highJumping = highJumping;
        this.languageComprehension = languageComprehension;
        this.macroVision = macroVision;
        this.nightVision = nightVision;
        this.selfContainedBioFunctions = selfContainedBioFunctions;
        this.telepathy = telepathy;
        this.thermalVision = thermalVision;
        this.webbing = webbing;
        this.acceleratedEvolution = acceleratedEvolution;
        this.animalControl = animalControl;
        this.damageShield = damageShield;
        this.duplicationI = duplicationI;
        this.elasticityI = elasticityI;
        this.empathy = empathy;
        this.bindSenses = bindSenses;
        this.extraLimbsCrafting = extraLimbsCrafting;
        this.highSpeedRunning = highSpeedRunning;
        this.mezmerize = mezmerize;
        this.illusionMinor = illusionMinor;
        this.mindProbe = mindProbe;
        this.naturalResistance = naturalResistance;
        this.poisonGas = poisonGas;
        this.redistributeDamage = redistributeDamage;
        this.regeneration = regeneration;
        this.telekinesis = telekinesis;
        this.totalRecall = totalRecall;
        this.venom = venom;
        this.changeling = changeling;
        this.duplicationIi = duplicationIi;
        this.mindReading = mindReading;
        this.naturalArmorAdaptive = naturalArmorAdaptive;
        this.phaseShifting = phaseShifting;
        this.sizeControl = sizeControl;
        this.split = split;
        this.symbionts = symbionts;
        this.temporaryInvulnerability = temporaryInvulnerability;
        this.sixthSense = sixthSense;
        this.fortitude = fortitude;
        this.might = might;
        this.nimble = nimble;
        this.beauty = beauty;
        this.alienIntelligence = alienIntelligence;
        this.duplicationIii = duplicationIii;
        this.elasticityIi = elasticityIi;
        this.extraLimbsCombat = extraLimbsCombat;
        this.flight = flight;
        this.illusionMajor = illusionMajor;
        this.invisibility = invisibility;
        this.mindControl = mindControl;
        this.naturalArmorLocation = naturalArmorLocation;
        this.naturalWeaponry = naturalWeaponry;        
    };
};

module.exports = Abilities;