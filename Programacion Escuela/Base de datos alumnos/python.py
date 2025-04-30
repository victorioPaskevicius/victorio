import sqlite3
import tkinter as tk
from tkinter import messagebox
db = sqlite3.connect("../Base de datos alumnos//Curso.db")

# Creando ventana de tkinter
def agregar_estudiante():
    nombre = entry_nombre.get()
    edad = entry_edad.get()
    materia = entry_materia.get()

    if not nombre or not edad or not materia:
        messagebox.showwarning("Campos vacíos", "Por favor, completa todos los campos.")
        return

    if not edad.isdigit():
        messagebox.showerror("Edad inválida", "Por favor, ingresa un número válido en el campo 'Edad'.")
        return

    conn = sqlite3.connect("Curso.db")
    conn.execute("INSERT INTO Curso (Nombre, edad, materia) VALUES (?, ?, ?)", 
                 (nombre, int(edad), materia))
    conn.commit()
    conn.close()

    entry_nombre.delete(0, tk.END)
    entry_edad.delete(0, tk.END)
    entry_materia.delete(0, tk.END)

    actualizar_lista()


    actualizar_lista()

def actualizar_lista():
    listbox.delete(0, tk.END)
    conn = sqlite3.connect("Curso.db")
    cursor = conn.execute("SELECT * FROM Curso")
    for row in cursor:
        listbox.insert(tk.END, f"{row[0]} - {row[1]}, Edad: {row[2]}, Materia: {row[3]}")
    conn.close()

# Interfaz
ventana = tk.Tk()
ventana.title("Gestión de Estudiantes")

tk.Label(ventana, text="Nombre:").pack()
entry_nombre = tk.Entry(ventana)
entry_nombre.pack()

tk.Label(ventana, text="Edad:").pack()
entry_edad = tk.Entry(ventana)
entry_edad.pack()

tk.Label(ventana, text="Materia:").pack()
entry_materia = tk.Entry(ventana)
entry_materia.pack()

tk.Button(ventana, text="Agregar Estudiante", command=agregar_estudiante).pack()

listbox = tk.Listbox(ventana, width=50)
listbox.pack(pady=10)

actualizar_lista()

ventana.mainloop()

# Creando conexion y consultas de base de datos
cursor = db.cursor()

# Consultar los datos
cursor.execute("""
               SELECT * FROM Curso
               """)
resultados = cursor.fetchall()

db.commit()

# Mostrar resultados
for fila in resultados:
    print(fila)
    