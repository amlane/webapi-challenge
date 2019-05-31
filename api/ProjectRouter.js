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

router.post('/', (req, res) => {
    const { name, description } = req.body;
    if(!name || !description){
        res.status(400).json({ message: "Project name and description is required." })
    } else {
        
    Projects.insert({ name, description })
    .then( newProject => {
        res.status(201).json(newProject)
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error trying to post a new project to the database." })
    })
    }
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    const { name, description } = req.body;

    if(!name || !description){
        res.status(400).json({ message: "Project name and description is required." })
    } else {
    
        Projects.update(id, changes)
        .then( updatedProject => {
            if(updatedProject){
                res.status(200).json(updatedProject)
            } else {
                res.status(404).json({ message: "This project doesn't exist in the database." })
            }
        })
        .catch( error => {
            res.status(500).json({ error: "There was an error saving your changes to the database." })
        })
        }
    })

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Projects.remove(id)
    .then( deletedProject => {
        if(deletedProject){
            res.status(204).end();
        } else {
            res.status(404).json({ message: "This project doesn't exist in the database." })
        }
    })
    .catch( error => {
        res.status(500).json({ error: "There was an error trying to delete your project." })
    })
})



module.exports = router;