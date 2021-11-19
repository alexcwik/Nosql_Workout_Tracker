const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: {
        type: Text,
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

})