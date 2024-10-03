const express = require('express')
const v1WorkoutRouter = require("./v1/routes/wourkoutRoutes")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))