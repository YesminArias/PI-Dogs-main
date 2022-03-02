const { Router } = require('express');
// Importar todos los routers;


const dogs = require('./dogs')
const dog = require('./dog')
const temperament = require('./temperament')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/temperament', temperament);
router.use('/dog', dog);


module.exports = router;
