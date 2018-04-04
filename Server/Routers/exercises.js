const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get("/exercises", (req, res, next) => {
    Exercises.find()
    .exec()
    .then(allExercise => {
        res.status(200).json({
            exercises: allExercises
        });
    })

    .catch(next);
});

router.get('/exercises/:name', (req, res, next) => {
    const { name } = req.params;

    exercises.findByName(name)
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
    const exercises = new Exercises({
        name: req.body.name,
        description: req.body.description
    });

    exercises
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