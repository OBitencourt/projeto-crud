
const router = require('express').Router()

const CostumersController = require('../controllers/costumers')


// rotas

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
})

router.post('/register/add', CostumersController.add)


module.exports = router
