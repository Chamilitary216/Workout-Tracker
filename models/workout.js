const mongoose = requite ("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema ({

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


const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness