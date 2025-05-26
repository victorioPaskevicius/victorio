const db = require("../database/db");

exports.getAllTasks = (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.createTask = (req, res) => {
  const { titulo, descripcion, estado } = req.body;
  db.run(
    "INSERT INTO tasks (titulo, descripcion, estado) VALUES (?, ?, ?)",
    [titulo, descripcion, estado],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, titulo, descripcion, estado });
    }
  );
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, estado } = req.body;
  db.run(
    "UPDATE tasks SET titulo = ?, descripcion = ?, estado = ? WHERE id = ?",
    [titulo, descripcion, estado, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
};
