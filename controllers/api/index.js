const router = require('express').Router();

const alienRoutes = require('./alien-routes.js');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');

router.use('/aliens', alienRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;