const db = require("../models")

module.exports = function (app) {
    AbortController.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    })
}