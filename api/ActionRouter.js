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

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    

    if(!changes){
        res.status(400).json({ message: "Actions require a description and note" })
    } 

    Actions.update(id, changes)
    .then( updatedAction => {
        if(updatedAction){
            res.status(200).json(updatedAction)
        } else {
            res.status(404).json({ message: "This project doesn't exist in the database." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "error occurred while updating actions" })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Actions.remove(id)
    .then(deletedAction => {
        if(deletedAction){
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Action doesn't exist in database." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "error occurred while deleting action from database." })
    })
})

module.exports = router;