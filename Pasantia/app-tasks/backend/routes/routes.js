const express = require("express");
const routes = express.Router();
const db = require("../sql/sql");

// Función para obtener o crear un usuario por nombre
function getOrCreateUser(name, callback) {
  db.get("SELECT id FROM users WHERE name = ?", [name], (err, row) => {
    if (err) return callback(err);

    if (row) {
      callback(null, row.id);
    } else {
      db.run("INSERT INTO users (name) VALUES (?)", [name], function (err) {
        if (err) return callback(err);
        callback(null, this.lastID);
      });
    }
  });
}

// Obtener tareas por usuario
routes.get("/tasks/:user", (req, res) => {
  const user = req.params.user;

  getOrCreateUser(user, (err, userId) => {
    if (err) return res.status(500).json({ error: "Error al obtener usuario" });

    db.all("SELECT * FROM tasks WHERE user_id = ?", [userId], (err, rows) => {
      if (err) return res.status(500).json({ error: "Error al leer tareas" });
      res.json(rows);
    });
  });
});

// Agregar tarea
routes.post("/tasks/:user", (req, res) => {
  const user = req.params.user;
  const { title, description, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Falta título o descripción" });
  }

  getOrCreateUser(user, (err, userId) => {
    if (err) return res.status(500).json({ error: "Error al obtener usuario" });

    const sql =
      "INSERT INTO tasks (user_id, title, description, status) VALUES (?, ?, ?, ?)";
    db.run(sql, [userId, title, description, status], function (err) {
      if (err)
        return res.status(500).json({ error: "Error al insertar tarea" });

      res.status(201).json({
        id: this.lastID,
        user_id: userId,
        title,
        description,
        status,
      });
    });
  });
});

// Editar tarea
routes.put("/tasks/:user/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, status } = req.body;

  const sql =
    "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?";
  db.run(sql, [title, description, status, id], function (err) {
    if (err)
      return res.status(500).json({ error: "Error al actualizar tarea" });

    res.json({ id, title, description, status });
  });
});

// Eliminar tarea
routes.delete("/tasks/:user/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM tasks WHERE id = ?";
  db.run(sql, [id], function (err) {
    if (err) return res.status(500).json({ error: "Error al eliminar tarea" });

    if (this.changes === 0) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.status(204).send();
  });
});

module.exports = routes;
