import db from "../db.js";

export const getTasks = (req, res) => {
  const query = "SELECT * FROM tasks";
  db.all(query, function (err, data) {
    if (err) {
      res.status(500).json({ error: "No se han podido leer las tareas" });
    }
    res.status(201).json(data);
  });
};
export const getTask = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM Tasks WHERE tasks.id == ?`;
  db.get(query, [id], function (err, data) {
    if (!data) {
      return res.status(404).json({ Error: "La tarea no existe" });
    } else if (err) {
      return res.status(500).json({ error: "Tarea no encontrada" });
    }
    res.status(200).json(data);
  });
};
export const createTask = (req, res) => {
  const { title, description } = req.body;
  const query = "INSERT INTO tasks (title,description) VALUES(?,?)";
  db.run(query, [title, description], function (err) {
    if (err) {
      res.status(500).json({ error: "No se pudo cargar los datos a la tarea" });
    }
    res.status(200).json({ id: this.lastID, title, description });
  });
};
export const updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const query = "UPDATE Tasks SET title = ?, description = ? WHERE id = ?";

  db.run(query, [title, description, id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar la tarea" });
    }
    res.status(200).json({ msg: "Tarea actualizada con éxito" });
  });
};
export const deleteTask = (req, res) => {
  const id = req.params.id
  const query = "DELETE FROM Tasks WHERE id = ?"
  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar la tarea" })
    }
    return res.status(200).json({ message: "Tarea eliminada correctamente" })
  })
};
