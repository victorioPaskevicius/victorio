import tkinter as tk

ventana = tk.Tk()
ventana.title("Ejemplo de LabelFrame")
ventana.geometry("400x200")

# Crear un LabelFrame
marco = tk.LabelFrame(ventana, text="Información Personal", padx=10, pady=10)
marco.pack(padx=10, pady=10, fill="both", expand=True)

# Agregar widgets dentro del LabelFrame
etiqueta_nombre = tk.Label(marco, text="Nombre:")
etiqueta_nombre.grid(row=0, column=0, sticky="w")
entrada_nombre = tk.Entry(marco)
entrada_nombre.grid(row=0,column=1)

etiqueta_edad = tk.Label(marco, text="Edad:")
etiqueta_edad.grid(row=1, column=0, sticky="w")
entrada_edad = tk.Entry(marco)
entrada_edad.grid(row=1, column=1)

# Agregar boton
button = tk.Button(marco, text="Subbmit", pady=10)
button.grid(row=2,column=1)

ventana.mainloop()

# Explicación:
# LabelFrame() crea un contenedor con una etiqueta.
# padx y pady añaden márgenes internos al LabelFrame.
# Los widgets dentro del LabelFrame se organizan con grid().