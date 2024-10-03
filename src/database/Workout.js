const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
}

const getOneWorkout=(workoutId)=>{
    const workout= DB.workouts.find(workout => workout.id===workoutId);

    if(!workout){
        return;
    }

    return workout;
}

const createNewWorkout=(newWorkout)=>{

    const isAlreadyAdded = DB.workouts.findIndex(
        workout => workout.name===newWorkout.name
    )>-1;

    if(isAlreadyAdded){
        return;
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);

    return newWorkout;
}

const updateOneWorkout= (workoutId, changes)=>{

    const indexForUpdated=DB.workouts.findIndex(
        workout => workout.id===workoutId
    );

    if(indexForUpdated===-1){
        return;
    }

    const updatedWorkout={
        ...BD.workouts[indexForUpdated],
        ...changes,
        updatedAt: new Date().toLocaleDateString("en-US", {timeZone:"UTC"})
    }
    BD.workouts[indexForUpdated]=updatedWorkout;

    saveToDatabase(DB);

    return updatedWorkout;

}

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout
}