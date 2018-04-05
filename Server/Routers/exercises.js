const express = require('express');
const router = express.Router();
const axios = require('axios');
const mockExercises = require('../Mock/exercises');
const Exercise =require('../Models/exercises');

router.get("/exercises", (req, res, next) => {
    
    Exercise.find()
    .exec()
    .then(allExercises => {
        res.status(200).json({
            exercises: allExercises
        });
    })

    .catch(next);
});

router.get('/exercises/:name', (req, res, next) => {
    const { name } = req.params;

    Exercise.findById(name)
    .exec()
    .then(selectedExercises => {
        res.status(200).json({
        exercises: selectedExercises
        });
    })
    .catch(next);
});

router.post('/exercises', (req, res, next) => {
    if(!req.body.name) {
        next ({ msg: 'Nope notbhing worked'});
    }
    const exercise = new Exercise({
        name: req.body.name,
        description: req.body.description
    });

    exercise
    .save()
    .then(() => {
        res.status(201).json({
            msg: ' You created your workout.'
        });
    })
    .catch(err => {
        res.status(500).json({
            msg: 'Stuff broken'
        });
    });
});

module.exports = router;