const router = require('express').Router();
const LifeFormGenerator = require('../../lib/LifeformGenerator');

//get a random alien name

router.get('/alien', (req, res) => {
    const lifeformGenerator = new LifeFormGenerator
    res.send(lifeformGenerator.initializeLifeformGenerator())
});

router.get('/alien/:name', (req, res) => {
    const lifeformGenerator = new LifeFormGenerator
    res.send(lifeformGenerator.initializeLifeformGenerator(req.params.name))
});

module.exports = router;