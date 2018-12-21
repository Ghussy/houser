const express = require('express')
const massive = require('massive')
require('dotenv').config()
const pc = require('./controller')


const app = express();

const {CONNECTION_STRING, PORT} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('the db has connected master');
} )



app.use(express.json())

//----------------- ENDPOINTS -----------------------------------//
app.get('/api/houses', pc.getAll)



//--------------------------------------- test below-------------

// app.listen(4000, ( ) => console.log(`${PORT} ducks marching in rome`));

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
}).catch(err => console.log(err))