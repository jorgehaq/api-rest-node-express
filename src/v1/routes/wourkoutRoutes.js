const express = require('express');
const router = express.Router();
const workoutController = require("../../controllers/workoutController");

router
    .get('/', workoutController.getAllWorkouts)
    .get('/:workoutId',workoutController.getOneWorkout)
    .post('/', workoutController.createNewWorkout)

module.exports = router;
