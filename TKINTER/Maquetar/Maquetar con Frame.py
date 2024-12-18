import tkinter as tk

# Crear ventana principal
ventana = tk.Tk()
ventana.title("Ejemplo de Frame")
ventana.geometry("400x300")

# Crear un contenedor Frame (parte superior)
frame_superior = tk.Frame(ventana, bg="lightblue", height=100)
frame_superior.pack(fill="x")  # Se expande horizontalmente

# Crear un contenedor Frame (parte inferior)
frame_inferior = tk.Frame(ventana, bg="lightgreen")
frame_inferior.pack(expand=True, fill="both")  # Se expande completamente

# Agregar widgets en el frame superior
etiqueta_superior = tk.Label(frame_superior, text="Esto está en el Frame Superior")
etiqueta_superior.pack(pady=20)

# Agregar widgets en el frame inferior
etiqueta_inferior = tk.Label(frame_inferior, text="Esto está en el Frame Inferior")
etiqueta_inferior.pack(pady=50)

# Iniciar el bucle principal
ventana.mainloop()

# EXPLICACION
# Frame(ventana) crea un contenedor donde se pueden agregar otros widgets.
# El parámetro bg="color" define el color de fondo para visualizar mejor el contenedor.
# pack() organiza los Frame dentro de la ventana principal:
# fill="x": Expande el Frame horizontalmente.
# expand=True, fill="both": Expande el Frame completamente.
