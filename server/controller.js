module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(response => {
            res.status(200).send(response)
        })
    }
}



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