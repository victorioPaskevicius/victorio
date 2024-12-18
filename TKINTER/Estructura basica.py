import tkinter as tk  # Importar el módulo de Tkinter

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Mi primera aplicación")  # Título de la ventana
ventana.geometry("400x300")  # Tamaño de la ventana (ancho x alto)

# Crear un widget: etiqueta (label)
etiqueta = tk.Label(ventana, text="¡Hola, mundo!", font=("Arial", 16), bg="lightyellow")
etiqueta.pack(pady=50)  # Empaquetar la etiqueta en la ventana

# Crear un botón
boton = tk.Button(ventana, text="Haz clic", command=lambda: print("Botón presionado"))
boton.pack()

# Crear un input
input = tk.Entry(ventana)

# Iniciar el bucle principal de la aplicación
ventana.mainloop()
# Widgets: Tkinter utiliza "widgets" para crear elementos interactivos. Algunos de los widgets más comunes son:
#   Label: Muestra texto o imágenes.
#   Button: Crea botones interactivos.