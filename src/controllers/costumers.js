const CostumersModel = require('../models/costumers')
const {crypto} = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

async function add (req, res) {
    const  {
        name,
        age,
        email,
        password,
    } =  req.body
    
    const passwordCrypto = await crypto(password)

    const register = new CostumersModel ({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso'
    })
}

function index (req, res) {
    res.render('register', {
        title: defaultTitle
    })
}

async function listUsers (req, res) {
    const users = await CostumersModel.find()


    res.render('listUsers', {
        title: 'Listagem de Clientes',
        users: users,
    })
}

module.exports = {
    add,
    index,
    listUsers,
}