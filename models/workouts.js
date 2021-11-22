const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },
    distance:{
        type: Number,
        required: "Enter distance"  
    },
    duration:{
        type: Number,
        required: "Enter duration"
    },
    weight: {
        type: Number,
        require: "Enter a weight"
    },

    sets:{
        type: Number,
        require: "Enter the amount of sets"
    },

    reps:{
        type: Number,
        require: "Enter the number of reps"
    },

    duration:{
        type: Number,
        require: "Enter the duration"    
    }

})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;