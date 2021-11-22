const router = require("express").Router();
require("mongoose")
const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});


router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(data => res.json(data))
        .catch(err => {
            console.log("error", err);
            res.json(err);
        });
});


router.put("/api/workouts", (req, res) => {
    let id = req.params.id;
    let newData = req.body;

    Workout.findOneAndUpdate({
        _id: id
    }, {
        $push: {
            exercises: newData
        }
    }).then(dbUpdate => {
        res.send(dbUpdate);
    });
});


router.get("/api/range", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
    res.json(dbWorkout);
    })
    .catch((err) => {
    res.json(err);
    });
});
module.exports = router;


