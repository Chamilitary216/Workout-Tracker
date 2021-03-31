const db = require ("../models")
module.export = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if (err){
                console.log (err);
            }else {
                res.json(workouts)
            }
        });
    });
}