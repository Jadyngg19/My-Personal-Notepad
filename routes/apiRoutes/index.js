const router = require('express').Router();
const notesRoutes = require('./apiRoutes')

router.use(notesRoutes);

module.exports = router;