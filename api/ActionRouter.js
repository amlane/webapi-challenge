const router = require('express').Router();

const Actions = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
    Actions.get()
    .then( actions => {
        if(actions){
            res.status(200).json(actions)
        } else {
            res.status(404).json({ message: "Action not found." })
        }
    })
    .catch(err => {
        res.status(500).json({ error: "cannot retrieve actions" })
    })
})


router.get('/:id', (req, res) => {
    const id = req.params.id;

    Actions.get(id)
    .then( actions => {
        if(actions){
            res.status(200).json(actions)
        } else {
            res.status(404).json({ message: "Action not found." })
        }
    })
    .catch(err => {
        res.status(500).json({ error: "cannot retrieve actions" })
    })
})

module.exports = router;