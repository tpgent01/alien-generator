

const randomize = () => {
    const randomName = document.getElementById('randomName')
    // const lifeformName = document.getElementById('lifeformName')
    randomName.addEventListener('click', () => {
        document.getElementById('lifeformName').value = lifeformGenerator.generateName();
    })
}

randomize();