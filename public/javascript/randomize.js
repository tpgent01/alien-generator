let lifeformAbilitiesArray = [];

const randomize = () => {
    const randomName = document.getElementById('randomName');
    const randomDisposition = document.getElementById('randomDisposition');
    const randomBirth = document.getElementById('randomBirth');
    const randomReason = document.getElementById('randomReason');
    const randomLocomotion = document.getElementById('randomLocomotion');
    const randomUpper = document.getElementById('randomUpper');
    const randomHead = document.getElementById('randomHead');
    const randomFace = document.getElementById('randomFace');
    const randomMouth = document.getElementById('randomMouth');
    const randomEyes = document.getElementById('randomEyes');
    const randomNose = document.getElementById('randomNose');
    const randomEars = document.getElementById('randomEars');
    const randomSkin = document.getElementById('randomSkin');
    const randomOther = document.getElementById('randomOther');
    const randomAbilities = document.getElementById('randomAbilities');
    const generateLifeform = document.getElementById('generateLifeform');
    const saveLifeform = document.getElementById('saveLifeform');

    randomName.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('lifeformName').value = '';
        getRandom('lifeformName','name');
    })
    randomDisposition.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformDisposition','disposition');
    })
    randomBirth.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformBirth','birth');
    })
    randomReason.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformReason','reason');
    })
    randomLocomotion.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformLocomotion','locomotion');
    })
    randomUpper.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformUpper','upperAppendageType');
    })
    randomHead.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformHead','head');
    })
    randomFace.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformFace','facialFeatures');
    })
    randomMouth.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformMouth','mouth');
    })
    randomEyes.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformEyes','eyes');
    })
    randomNose.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformNose','nose');
    })
    randomEars.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformEars','ears');
    })
    randomSkin.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformSkin','skin');
    })
    randomOther.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformOther','otherFeatures');
    })
    randomAbilities.addEventListener('click', (event) => {
        event.preventDefault();
        getRandomAbilities();
    })
    generateLifeform.addEventListener('click', (event) => {
        event.preventDefault();
        getLifeform();
    })

    saveLifeform.addEventListener('click', (event) => {
        event.preventDefault();
        saveAlienLifeform();
    })

    getLifeform();
}

const getRandom = (place, item) => {
    named = document.getElementById('lifeformName').value
    return fetch(`/api/generate/alien/${named}`)
            .then(response => response.json())
            .then(function(data) {
                    document.getElementById(place).value = data[item];
                    getPhysicalDescription();
                    getBackstory();
                })
            .catch(function(error) {
                    console.log(error);
                });
}

const getRandomAbilities = () => {
    named = document.getElementById('lifeformName').value
    return fetch(`/api/generate/alien/${named}`)
            .then(response => response.json())
            .then(function(data) {
                document.getElementById('lifeformAbilities').value = ``;
                data.abilities.forEach(ability=> {
                    document.getElementById('lifeformAbilities').value = document.getElementById('lifeformAbilities').value + `${ability.name} - ${ability.description}

`
                });
                getPhysicalDescription();
                getBackstory();
                lifeformAbilitiesArray = data.abilities;
                })
            .catch(function(error) {
                    console.log(error);
                });
}

const getPhysicalDescription = () => {
    document.getElementById('physicalDescription').value = `${document.getElementById('lifeformName').value} is ${
        document.getElementById('lifeformLocomotion').value
      } that ${generateUpperMadLib()} using its ${
        document.getElementById('lifeformUpper').value
      }. ${document.getElementById('lifeformName').value}${document.getElementById('lifeformHead').value} ${
        document.getElementById('lifeformFace').value
      }. ${generateFaceMadLib()} its ${document.getElementById('lifeformEyes').value} eyes, ${
        document.getElementById('lifeformNose').value
      }, ${document.getElementById('lifeformEars').value} ears, and ${document.getElementById('lifeformMouth').value}! ${
        document.getElementById('lifeformName').value
      }'s epidermis is ${document.getElementById('lifeformSkin').value}, but most notably ${
        document.getElementById('lifeformName').value
      } has ${document.getElementById('lifeformOther').value}.`
    
    getBackstory();
    document.getElementById('name').value = document.getElementById('lifeformName').value
    document.getElementById('abilities').value = document.getElementById('lifeformAbilities').value
}

const getBackstory = () => {
    document.getElementById('backstory').value = `${document.getElementById('lifeformName').value} ${document.getElementById('lifeformDisposition').value} It ${document.getElementById('lifeformBirth').value}. ${document.getElementById('lifeformName').value} ${document.getElementById('lifeformReason').value}`;
  }

const generateUpperMadLib = () => {
    let chance = Math.floor(Math.random() * Math.floor(6)) + 1;
    if (chance >= 1 && chance <= 2) {
      return `interacts with the world around it`;
    } else if (chance >= 3 && chance <= 5) {
      return `manipulates its immediate environment`;
    } else {
      return `imposes its will on surrounding objects and entities`;
    }
  }

const generateFaceMadLib = () => {
    let chance = Math.floor(Math.random() * Math.floor(6)) + 1;
    if (chance >= 1 && chance <= 2) {
      return `This does nothing to distract one from`;
    } else if (chance >= 3 && chance <= 5) {
      return `Despite this, you can't help but notice`;
    } else {
      return `As if all of that wasn't odd enough, you now take in`;
    }
  }

const getLifeform = () => {
    return fetch(`/api/generate/alien/`)
            .then(response => response.json())
            .then(function(data) {
                document.getElementById('lifeformName').value = data.name;
                document.getElementById('lifeformDisposition').value = data.disposition;
                document.getElementById('lifeformBirth').value = data.birth;
                document.getElementById('lifeformReason').value = data.reason;
                document.getElementById('lifeformLocomotion').value = data.locomotion;
                document.getElementById('lifeformUpper').value = data.upperAppendageType;
                document.getElementById('lifeformHead').value = data.head;
                document.getElementById('lifeformFace').value = data.facialFeatures;
                document.getElementById('lifeformMouth').value = data.mouth;
                document.getElementById('lifeformEyes').value = data.eyes;
                document.getElementById('lifeformNose').value = data.nose;
                document.getElementById('lifeformEars').value = data.ears;
                document.getElementById('lifeformSkin').value = data.skin;
                document.getElementById('lifeformOther').value = data.otherFeatures;
                document.getElementById('lifeformAbilities').value = getRandomAbilities();                

                    getPhysicalDescription();
                    getBackstory();
                })
            .catch(function(error) {
                    console.log(error);
                });
  }

async function saveAlienLifeform() {
    const name = document.getElementById('lifeformName').value;
    const disposition = document.getElementById('lifeformDisposition').value;
    const birth = document.getElementById('lifeformBirth').value;
    const reason = document.getElementById('lifeformReason').value;
    const locomotion = document.getElementById('lifeformLocomotion').value;
    const upperAppendageType = document.getElementById('lifeformUpper').value;
    const head = document.getElementById('lifeformHead').value;
    const facialFeatures = document.getElementById('lifeformFace').value;
    const mouth = document.getElementById('lifeformMouth').value;
    const eyes = document.getElementById('lifeformEyes').value;
    const nose = document.getElementById('lifeformNose').value;
    const ears = document.getElementById('lifeformEars').value;
    const skin = document.getElementById('lifeformSkin').value;
    const otherFeatures = document.getElementById('lifeformOther').value;
    const backstory = document.getElementById('backstory').value;
    const physicalDescription = document.getElementById('physicalDescription').value;
    const abilities = lifeformAbilitiesArray


  
    const response = await fetch(`/api/aliens`, {
      method: 'POST',
      body: JSON.stringify({
        lifeform:{name,
        disposition,
        birth,
        reason,
        backstory,
        locomotion,
        upperAppendageType,
        head,
        facialFeatures,
        mouth,
        eyes,
        nose,
        ears,
        skin,
        otherFeatures,
        physicalDescription,
        abilities}
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

randomize();