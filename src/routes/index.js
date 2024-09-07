
const router = require('express').Router()

const CostumersController = require('../controllers/costumers')
const IndexController = require('../controllers/index')

// rotas

router.get('/', IndexController.index)


// registro

router.get('/register', CostumersController.index)
router.post('/register/add', CostumersController.add)

// listar 

router.get('/list', CostumersController.list)

// editar

router.get('/edit', CostumersController.formEdit)
router.post('/edit/:id', CostumersController.edit)

// remover




module.exports = router
