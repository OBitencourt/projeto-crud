const CostumersModel = require('../models/costumers')

function add (req, res) {
    const  {
        name,
        age,
        email,
        password,
    } =  req.body
    

    const register = new CostumersModel ({
        name,
        age,
        email,
        password,
    })

    register.save()
    res.send('cadastro realizado!')
}

module.exports = {
    add,
}