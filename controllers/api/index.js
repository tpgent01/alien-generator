const router = require('express').Router();

const alienRoutes = require('./alien-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');
const gererateRoutes = require('./generate-routes')

router.use('/aliens', alienRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/generate', gererateRoutes);

module.exports = router;