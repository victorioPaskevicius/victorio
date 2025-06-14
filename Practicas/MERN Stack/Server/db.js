// db.js
import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./mi_basedatos.db"); // crea un archivo persistente

// Creamos la tabla si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT
    )
  `);
});

export default db; // No cerramos la conexión aquí