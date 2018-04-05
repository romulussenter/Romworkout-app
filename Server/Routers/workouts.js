const express = require('express');
const router = express.Router();
const axios = require('axios');
const Workout = require('../Models/workouts');




 router.get('/workouts/day/:number', (req, res, next) => {
     const { number } = req.params;
    const now = new Date ();
    now.setDate(now.getDate() - number)
     Workout.find()
     .where('completedOn')
     .gt(now)
     .exec()
     .then(selectedWorkouts => {
         res.status(200).json({
         workouts: selectedWorkouts
         });
     })
    .catch(next);
});

router.post('/workouts', (req, res, next) => {
 
    console.log(req.body)
    const workout = new Workout({
        exercises: req.body.exercises
    });

    workout
    .save()
    .then(() => {
        res.status(201).json({
            msg: ' You created your workout.'
        });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            msg: 'Stuff broken'
        });
    });
});

module.exports = router;