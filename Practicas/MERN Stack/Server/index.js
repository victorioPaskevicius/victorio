import express from "express";
import PORT from "./config.js";

import Routes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express()

app.use(express.json())

app.use(Routes)
app.use(tasksRoutes)


app.listen(PORT)
console.log('Server listening on port ' + PORT)