const path = require('path');
const express = require('express');
const serverApp = express();
const mongoose = require('mongoose');


require('dotenv').config();
const bodyParser = require('body-parser');
mongoose.connect(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;

const exercisesRouter = require ('./Routers/exercises')
const workoutsRouter = require ('./Routers/workouts')
serverApp.use(bodyParser.json())
serverApp.use(bodyParser.urlencoded({ extended: true}));
serverApp.use(exercisesRouter);
serverApp.use(workoutsRouter);

serverApp.use(express.static('client/build'));

serverApp.get('*', (request, response) =>{
    response.sendFile('index.html', {root: path.resolve('client/build') });
});

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
})

