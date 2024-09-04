const mongoose = require('mongoose')

// mongoose.set('useNewUrlParser', true)    no need anymore ig
// mongoose.set('useUnifiedTopology', true) no need anymore ig

function connect() {

    mongoose.connect('mongodb://localhost:27017/')
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Conected to data base!')
    })
    
    db.on('error', console.error.bind(console, 'connection error:'))
}

module.exports = {connect}