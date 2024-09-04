const express = require('express')
const path = require('path')

const db = require('./database/index')
const routes = require('./routes/index')

const app = express()

// conexão com o banco de dados

db.connect()


// definindo template engine:

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// rota para caminhos estátios é criada automaticamente pelo ejs

app.use(express.static(path.join(__dirname, 'public')))

// habilita para receber dados de formulários pelo método post

app.use(express.urlencoded({extended: true}))

// routes

app.use('/', routes)

// 404 error (not found)

app.use((req, res) => {
    res.send('Página não encontrada!')
})



// executando servidor

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))

