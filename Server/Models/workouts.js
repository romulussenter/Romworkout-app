const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutsSchema = new Schema({

    exercises:{
        type: [{
            description: String,
            reps: Number,
            sets: Number
        }],
        required: true,
    },
    completedOn: {
        required: true,
        type: Date,
        default: Date.now
    }

});

const Workout = mongoose.model('Workout', workoutsSchema);
module.exports = Workout;