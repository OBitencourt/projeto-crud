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

async function list (req, res) {
    const users = await CostumersModel.find()


    res.render('list', {
        title: 'Listagem de Clientes',
        users: users,
    })
}

async function formEdit (req, res) {
    const {id} = req.query

    const user = await CostumersModel.findById(id)
    console.log(user)
    res.render('edit', {
        title: 'Editar Usuário',
        user: user,
    })
}

async function edit (req, res) {
    const  {
        name,
        age,
        email,
    } =  req.body 

    const {id} = req.params

    const user = await CostumersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar Usuário',
        user: user,
        message: 'A Edição foi feita com sucesso!'
    })

}


module.exports = {
    add,
    index,
    list,
    formEdit,
    edit,
}