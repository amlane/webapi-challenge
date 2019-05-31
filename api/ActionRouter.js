const router = require('express').Router();

const Actions = require('../data/helpers/actionModel.js');


router.get('/:id', (req, res) => {
    const id = req.params.id;

    Actions.get(id)
    .then( actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({ error: "cannot retrieve actions" })
    })
})

module.exports = router;