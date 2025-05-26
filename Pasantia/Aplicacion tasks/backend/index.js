// backend/index.js

const express = require("express");
const cors = require("cors");
const tasksRoutes = require("./routers/tasks.routes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente ✅");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
