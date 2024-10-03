const workoutService = require('../services/workoutService')


const getAllWorkouts = (req, res) => {

    const allWorkouts=workoutService.getAllWorkouts();
    //res.send("Get All workouts")
    res.send({status:"OK", data:allWorkouts});

}

const getOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    
    if(!workoutId){
        return;
    }

    const workout=workoutService.getOneWorkout(workoutId);

    res.send({status:"OK", data: workout}); 

    //const workout = workoutService.getOneWorkout(req.params.workoutId);
    //res.send(`Get One Workout ${req.params.workoutId}`);

}

const createNewWorkout = (req, res) => {

    const {body} = req;

    if(!body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises
    ){
        return;
    }

    const newWorkout = {
        name:body.name,
        mode:body.mode,
        equipment: body.equipment
    }

    const createdWorkout = workoutService.createNewWorkout(newWorkout)

    //res.send("Created a new workout");
    res.status(201).send({status:"OK", data:createdWorkout})

}


const updateOneWorkout = (req, res) =>{
    const { body, params:{workoutId}} = req;

    if(!workoutId){
        return;
    }

    const updatedWorkout=workoutService.updateOneWorkout(workoutId,body);

    res.status(202).res({status:"OK", data: updatedWorkout});

}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout
}