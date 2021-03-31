const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({

    day: {
        type: Date, 
        default: Date.now () //might try "$currentDate"
    
    },
    exercise: [
        {
            type: Schema.Types.ObjectId,
            ref: "Excercise"
        }
    ],
    duration: {
        type: Number,
        default: 0
    }
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;