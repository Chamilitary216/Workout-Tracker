const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema ({
    name: String,
    type: String,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number,

});

const Fitness = mongoose.model ("Fitness", fitnessSchema);

module.exports = Fitness;
