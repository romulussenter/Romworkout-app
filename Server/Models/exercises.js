const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    name: {
        required: true,
        type: String,

    },
    description: {
      type: String,  
    },
    created: {
        required: true,
        type: Date,
        default: Date.now
    }
});

const Exercise = mongoose.model('Exercise', exercisesSchema);
module.exports = Exercise;