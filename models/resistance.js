const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    name:{
        type: Text,
        trim: true,
        require: "Enter a name for workout"
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