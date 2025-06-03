const express = require("express");
const fs = require("fs");
const routes = express.Router();

// Obtener tareas por usuario
routes.get("/tasks/:user", (req, res) => {
  const user = req.params.user;

  fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "No se pudieron leer las tareas" });

    const users = JSON.parse(data);
    const userTasks = users[user];

    if (!userTasks) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(userTasks);
  });
});

// Agregar tarea a usuario
routes.post("/tasks/:user", (req, res) => {
  const user = req.params.user;
  let { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Falta título o descripción" });
  }

  fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "No se pudo leer el archivo" });

    let users = JSON.parse(data);
    let newTask = { id: 1, title, description };

    if (!users[user]) {
      users[user] = [newTask];
    } else {
      const userTasks = users[user];
      const lastId = userTasks.length > 0 ? userTasks[userTasks.length - 1].id : 0;
      newTask.id = lastId + 1;
      userTasks.push(newTask);
    }

    fs.writeFile("./tasks.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error al guardar la tarea" });
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
    if (err) return res.status(500).json({ error: "Error leyendo tareas" });

    let users = JSON.parse(data);
    let userTasks = users[user];

    if (!userTasks) return res.status(404).json({ error: "Usuario no encontrado" });

    const taskIndex = userTasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) return res.status(404).json({ error: "Tarea no encontrada" });

    const newTask = { id, ...updatedTask };
    users[user][taskIndex] = newTask;

    fs.writeFile("./tasks.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error guardando tarea actualizada" });
      res.json(newTask);
    });
  });
});

// Eliminar tarea por ID
routes.delete("/tasks/:user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = req.params.user;

  fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error leyendo tareas" });

    const users = JSON.parse(data);

    if (!users[user]) return res.status(404).json({ error: "Usuario no encontrado" });

    const oldLength = users[user].length;
    users[user] = users[user].filter((task) => task.id !== id);

    if (users[user].length === oldLength) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    fs.writeFile("./tasks.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error al eliminar la tarea" });
      res.status(204).send(); // No devuelve contenido
    });
  });
});

module.exports = routes;
