module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(response => {
            res.status(200).send(response)
        })
    },
    createHouse: (req, res) => {
        
        const db = req.app.get('db')
        let {name, address, city, state, zip} = req.body
        db.create_house({name, address, city, state, zip})
        .then(response =>{
            res.status(200).send(response)
        })
    },
    deleteHouse: (req, res) => {
        console.log('delete endpoint hit')
        
        const db = req.app.get('db')
        let {id} = req.params
        console.log(id)
        db.delete_house({id}).then(response =>{
            res.status(200).send(response)
        })
    }
    
}

