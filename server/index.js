const express = require('express')
const massive = require('massive')
require('dotenv').config()
const pc = require('./controller')


const app = express();

const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('the db has connected master');
} )


app.use(express.json())

//----------------- ENDPOINTS -----------------------------------//
app.get('/api/houses', pc.getAll)

app.post('/api/addhouse', pc.createHouse)

app.delete('/api/delete/:id', pc.deleteHouse)


//--------------------------------------- test below-------------

// app.listen(4000, ( ) => console.log(`${SERVER_PORT} ducks marching in rome`));

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))