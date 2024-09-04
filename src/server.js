const express = require('express')
const path = require('path')


const app = express()

// definindo template engine:

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// rota para caminhos estátios é criada automaticamente pelo ejs

app.use(express.static(path.join(__dirname, 'public')))


// habilita para receber dados de formulários pelo método post

app.use(express.urlencoded({extended: true}))

// rotas

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Título Teste'
    })
})

// 404 error (not found)

app.use((req, res) => {
    res.send('Página não encontrada!')
})



// executando servidor

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))

