const express = require("express");
const routes = express.Router();
const fs = require("fs");

// Routes
// Leer tareas de usuarios
routes.get("/tasks/:user", (req, res) => {
  const user = req.params.user;

  fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "No se pudieron leer las tareas" });
    }

    const users = JSON.parse(data);
    const userTasks = users[user]; // Accede directamente al arreglo del usuario

    if (!userTasks) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(userTasks);
  });
});

// Agrega tarea al usuario
routes.post("/tasks/:user", (req, res) => {
  const user = req.params.user;
  let taskBody = req.body;

  if (!taskBody) {
    return res
      .status(400)
      .json({ error: "Falta título, descripción o estado" });
  }

  fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ error: "No se pudo leer el archivo" });

    let users = JSON.parse(data);

    const lastId =
      userTasks.length > 0 ? userTasks[userTasks.length - 1].id : 1;
    let taskBody = { id: lastId, ...taskBody };

  console.log(taskBody)


    const userTasks = users[user];
    userTasks.push(taskBody);

    newTask.id = lastId + 1;
    fs.writeFile("./tasks.json", JSON.stringify(users, null, 2), (err) => {
      if (err)
        return res.status(500).json({ error: "Error al guardar la tarea" });
      res.status(201).json(newTask);
    });
  });
});
// Actualizar tarea por ID
routes.put("/tasks/:user/:id", (req, res) => {
  const user = req.params.user;
  const id = parseInt(req.params.id);
  const updatedTask = req.body;

  fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error leyendo tareas" });
    }

    let users = JSON.parse(data);

    let newTask = { id: id, ...updatedTask };
    users[user][id - 1] = newTask;

    fs.writeFile("./tasks.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Error guardando tarea actualizada" });
      }
      res.json(newTask);
    });
  });
});

// Eliminar tarea por ID
routes.delete("/tasks/:user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = req.params.user;

  fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error leyendo tareas" });
    }

    const users = JSON.parse(data);

    let currentUser = users[user];
    let newTasksUser = currentUser.filter((task) => task.id !== id);

    currentUser = newTasksUser;

    fs.writeFile("./tasks.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al eliminar la tarea" });
      }
      res.status(200).json(currentUser);
    });
  });
});

module.exports = routes;
