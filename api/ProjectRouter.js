const router = require('express').Router();

const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel.js');

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

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.get(id)
    .then( project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error trying to retrieve the projects from the database." })
    })
})


router.get('/:id/actions', (req, res) => {
    const id = req.params.id;

    Projects.getProjectActions(id)
    .then( action => {
        if(action && action.length) {
            res.status(201).json(action)
        } else {
            res.status(404).json({ message: "No actions found." })
        }
    })
    .catch(error => {
        res.status(500).json({ message: "error" })
    })
})

router.post('/:id/actions', (req, res) => {
    let action = req.body;
    const id = req.params.id;
    action.project_id = id;

    if(!action.description || !action.notes){
        res.status(400).json({ message: "Actions require a description and note" })
    } 
    Actions.insert(action)
    .then( action => {
        res.status(201).json(action)
    } )
    .catch(error => {
        res.status(500).json({ error: "Error trying to post to actions." })
    })
})


module.exports = router;