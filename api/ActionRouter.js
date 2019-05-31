const router = require('express').Router();

const Actions = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
    Actions.get()
    .then( actions => {
        res.status(200).json(actions)
    })
    .catch(error => {
        res.status(500).json({ error: "Error getting actions." })
    })
})

router.post('/', (req, res) => {
    const { description, notes } = req.body;
    if(!description || !notes){
        res.status(400).json({ message: "Actions require a description and note" })
    } else {
        Actions.insert({ description, notes })
        .then( newAction => {
            res.status(201).json(newAction)
        } )
        .catch(error => {
            res.status(500).json({ error: "Error trying to post to actions." })
        })
    }
})

module.exports = router;