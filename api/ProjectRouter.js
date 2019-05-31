const router = require('express').Router();

const Projects = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    Projects.get()
    .then( projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error trying to retrieve the projects from the database." })
    })
})

module.exports = router;