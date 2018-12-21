const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express();

const {CONNECTION_STRING, PORT} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('the db has connected master');
} )



app.use(express.json())

// app.get('/api/house/:id', (req, res) => {
//     const dbInstance = req.app.get('db');
//     console.log(req.params)
//     dbInstance.getSingleHouse(req.params).then((response) => {
//         if(response[0]) {
//             res.send(response[0])
//         } else {
//             res.sendStatus(404)
//         }
//     })
// })

app.listen(4000, ( ) => console.log(`${PORT} ducks marching in rome`));