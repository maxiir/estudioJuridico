const {Router} = require('express')
const router = Router();

const{ renderIndex, renderContacto, renderProfesional} = require('../controllers/index.controllers') //llamo modulo de index.controllers.js

router.get('/', renderIndex);
router.get('/contacto',renderContacto);
router.get('/profesional',renderProfesional);

module.exports = router;