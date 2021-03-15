const db = require("../models")

module.exports = function (app) {
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    })


}