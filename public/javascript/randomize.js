const randomize = () => {
    const randomName = document.getElementById('randomName')
    const randomBackstory = document.getElementById('randomBackstory')
    const randomLocomotion = document.getElementById('randomLocomotion')
    const randomUpper = document.getElementById('randomUpper')
    const randomHead = document.getElementById('randomHead')
    const randomFace = document.getElementById('randomFace')
    const randomMouth = document.getElementById('randomMouth')
    const randomEyes = document.getElementById('randomEyes')
    const randomNose = document.getElementById('randomNose')
    const randomEars = document.getElementById('randomEars')
    const randomSkin = document.getElementById('randomSkin')
    const randomOther = document.getElementById('randomOther')
    const randomAbilities = document.getElementById('randomAbilities')

    randomName.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('lifeformName').value = '';
        getRandom('lifeformName','name');
    })
    randomBackstory.addEventListener('click', (event) => {
        event.preventDefault();
        getRandom('lifeformBackstory','backstory');
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
        getRandom('lifeformAbilities','abilities');
    })
}

const getRandom = (place, item) => {
    named = document.getElementById('lifeformName').value
    return fetch(`/api/generate/alien/${named}`)
            .then(response => response.json())
            .then(function(data) {
                    document.getElementById(place).value = data[item];
                    getPhysicalDescription();
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

randomize();